import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const auth = require('../../../../config.js');

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {productQuestion: []};
  }

  //write axios get request that queries database for
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
      console.log(response.data.results)
      this.setState({productQuestion: response.data.results})
    })
  }

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div>
        Info below
        <ul>
          <li> {this.state.productQuestion.question_body}</li>
          {this.state.productQuestion.map((question, index) => {
            <li key={question.question_id}>{question.question_body}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Questions
;