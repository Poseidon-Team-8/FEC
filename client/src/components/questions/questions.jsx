import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import IndividualQ from './individualQ.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productQuestion: [],
      questionAmount: 2
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
      this.setState({productQuestion: sortedQuestions})
    })
  }

  setQuestions = () => {
    this.setState({questionAmount: this.state.questionAmount + 2});
  }

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    let buttonDisplay;
    // this.state.productQuestion.length > 2 ?
    // <button onClick={() => this.setQuestions()}>MORE ANSWERED QUESTIONS</button> : null;
    if ( this.state.productQuestion.length > 2 &&
      this.state.questionAmount < this.state.productQuestion.length ) {
      buttonDisplay = <button onClick={() => this.setQuestions()}>MORE ANSWERED QUESTIONS</button>;
    } else {
      buttonDisplay = null;
    }
    return (

      <div>
        {this.state.productQuestion.slice(0, this.state.questionAmount).map( question =>
          <IndividualQ question={question}
          key={question.question_id}
          productId={this.state.productId}
          />
        )}
        {buttonDisplay}
      </div>

    )
  }
}

export default Questions;