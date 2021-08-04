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
      filteredQuestions: [],
      questionAmount: 2,
      productName: '',
      searchMessage: ''
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
    }).
    catch(error => {
      console.log('CLIENT SIDE ERROR', error)
    })
  }

  setQuestions = () => {
    this.setState({questionAmount: this.state.questionAmount + 2});
  }

  componentDidMount() {
    this.getQuestions();
  }
  searchFilterOnChange = (e) => {
    const questions = this.state.productQuestion.slice();
    if ( e.target.value > 3 ) {
      this.setState
    }
    this.setState({filteredQuestions:
      questions.filter( question => {
        return question.question_body.toLowerCase().includes(e.target.value.toLowerCase());
      }), searchMessage: e.target.value
    });
  }

  render() {
    let questionDisplay;
    let buttonDisplay;

    this.state.productQuestion.length > 2 &&
      this.state.questionAmount < this.state.productQuestion.length ?
      buttonDisplay =
      <button onClick={() => this.setQuestions()}>MORE ANSWERED QUESTIONS</button> :
      buttonDisplay = null;

    this.state.searchMessage.length > 2 ?
    questionDisplay =
    this.state.filteredQuestions.slice(0, this.state.questionAmount).map( question =>
      <IndividualQ question={question}
      key={question.question_id}
      productId={this.props.productId}
      productName={this.state.productName}
      />
    )
    :
    questionDisplay =
    this.state.productQuestion.slice(0, this.state.questionAmount).map( question =>
      <IndividualQ question={question}
      key={question.question_id}
      productId={this.props.productId}
      productName={this.state.productName}
      />
    )

    return (
      <div>
        <h2>Questions & Answers</h2>
          <Search
          searchFilter={this.searchFilterOnChange}
          />
        {this.state.searchMessage.length > 2 && !this.state.filteredQuestions.length ?
          <p>Oops, it looks like your search didn't return any matches</p> :
        <div className='qa-container'>

          {questionDisplay}
          {buttonDisplay}
          <AddQuestion
          productName={this.state.productName}
          productId={this.props.productId}
          />
        </div>
        }
      </div>
    )
  }
}

export default Questions;