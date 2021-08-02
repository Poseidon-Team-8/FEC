import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import IndividualQ from './individualQ.jsx';
import AddQuestion from './addQuestion.jsx';
import Search from './search.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productQuestion: [],
      questionAmount: 2,
      productName: ''
    };
  }

  getQuestions = () => {
    const productId = this.props.productId;
    axios({
      method: 'get',
      url: '/productQuestions',
      headers: {
        id: `${productId}`
      }
    })
    .then( response => {
      let sortedQuestions = response.data.results.sort((a, b) => {
        return b.question_helpfulness - a.question_helpfulness;
      })
      this.setState({productQuestion: sortedQuestions, productName: response.data.name})
    })
  }

  setQuestions = () => {
    this.setState({questionAmount: this.state.questionAmount + 2});
  }

  componentDidMount() {
    this.getQuestions();
  }

  searchFilterOnChange = (e) => {
    const copyOfQuestions = this.state.productQuestion.slice();
    const secondCopy = copyOfQuestions;
    this.setState({productQuestion:
      copyOfQuestions.filter( question => {
        // console.log(e.target.value)
        return question.question_body.toLowerCase().includes(e.target.value.toLowerCase());
      })
    });
    if (e.key === 'Delete' || e.key === 'Backspace') {
      console.log('i am firing', e.target.value)
      this.setState({productQuestion:
        copyOfQuestions.filter( question => {
          return question.question_body.toLowerCase().includes(e.target.value.toLowerCase());
        })
      });
    }
  }

  render() {
    let buttonDisplay;
    if ( this.state.productQuestion.length > 2 &&
      this.state.questionAmount < this.state.productQuestion.length ) {
      buttonDisplay = <button onClick={() => this.setQuestions()}>MORE ANSWERED QUESTIONS</button>;
    } else {
      buttonDisplay = null;
    }
    return (

      <div className='qa-container'>
        <h2>Questions & Answers</h2>
        <Search
        searchFilter={this.searchFilterOnChange}
        />
        {this.state.productQuestion.slice(0, this.state.questionAmount).map( question =>
          <IndividualQ question={question}
          key={question.question_id}
          productId={this.props.productId}
          productName={this.state.productName}
          />
        )}
        {buttonDisplay}
        <AddQuestion
        productName={this.state.productName}
        productId={this.props.productId}
        />
      </div>

    )
  }
}

export default Questions;