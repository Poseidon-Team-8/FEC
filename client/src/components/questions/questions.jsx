import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import IndividualQ from './individualQ.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productQuestion: [],
      questionAmount: 4
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
      console.log(sortedQuestions)
      this.setState({productQuestion: sortedQuestions})
    })
  }

  setQuestions = () => {
    //increase state of questionAmount by 2 on button click
    this.setState({questionAmount: this.state.questionAmount + productQuestion.length -4});
  }

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    let buttonDisplay =
    this.state.productQuestion.length > 4 ?
    <button onClick={() => this.setQuestions()}>MORE ANSWERED QUESTIONS</button> : null;

    return (

      <div>
        {this.state.productQuestion.slice(0, this.state.questionAmount).map( question =>
          <IndividualQ question={question} key={question.question_id}
          />
        )}
        {buttonDisplay}
      </div>

    )
  }
}

export default Questions;