import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
var moment = require('moment');

const Answers = ({id}) => {

  const [ answers, setAnswer] = useState([]);

  const [answerAmount, setAnswerAmount] = useState(2);

  const getAnswers = () => {
    axios({
      method: 'get',
      url: '/productAnswers',
      headers: {
        id: `${id}`
      }
    })
    .then( response => {
      console.log(response.data.results)
      setAnswer(response.data.results);
    })
  }

  useEffect(() => {
    getAnswers();
  }, [])

  return (
    <div>
      {answers.slice(0, answerAmount).map( (answer, key)=>
      <div key={answer.answer_id}>
        <p >A: {answer.body}</p>
        <p>by {answer.answerer_name} {moment(answer.date).format('MMM Do YY')} | Helpful? Yes ({answer.helpfulness})</p>
      </div>
      )}
      <button onClick={() => setAnswerAmount(answerAmount +2)}>LOAD MORE ANSWERS</button>
    </div>
  )
}

export default Answers;