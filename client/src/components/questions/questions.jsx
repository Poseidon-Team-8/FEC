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
    const questions = this.state.productQuestion.slice();
    this.setState({filteredQuestions:
      questions.filter( question => {
        // console.log(e.target.value)
        return question.question_body.toLowerCase().includes(e.target.value.toLowerCase());
      })
    });
  }
  //how to display filtered questions: similar to displaying button, if filterquestions has length
    //display it, otherwise display productquestions. setup in render using conditional(ternary) and set value
    //to a variable which will go in the return statment.

  render() {
    let questionDisplay;
    let buttonDisplay;

    this.state.productQuestion.length > 2 &&
      this.state.questionAmount < this.state.productQuestion.length ?
      buttonDisplay = <button onClick={() => this.setQuestions()}>MORE ANSWERED QUESTIONS</button> :
      buttonDisplay = null;

    this.state.filteredQuestions.length > 0 ?
    questionDisplay = this.state.filteredQuestions.slice(0, this.state.questionAmount).map( question =>
      <IndividualQ question={question}
      key={question.question_id}
      productId={this.props.productId}
      productName={this.state.productName}
      />
    )
    :
    questionDisplay = this.state.productQuestion.slice(0, this.state.questionAmount).map( question =>
      <IndividualQ question={question}
      key={question.question_id}
      productId={this.props.productId}
      productName={this.state.productName}
      />
    )

    return (

      <div className='qa-container'>
        <h2>Questions & Answers</h2>
        <Search
        searchFilter={this.searchFilterOnChange}
        />
        {questionDisplay}
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