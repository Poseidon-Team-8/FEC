import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
var moment = require('moment');

const Answers = ({id}) => {

  const [ answers, setAnswer] = useState([]);

  const [answerAmount, setAnswerAmount] = useState(2);

  const [buttonText, setButton] = useState('LOAD MORE ANSWERS');

  const [disable, setDisable] = useState(false);

  const toggleButton = () => {
    if (answerAmount === 2 ) {
      setAnswerAmount(answers.length);
      setButton('COLLAPSE ANSWERS');
    } else {
      setAnswerAmount(2);
      setButton('LOAD MORE ANSWERS')
    }
  }

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
        <p>by <strong>{answer.answerer_name}</strong>
        {moment(answer.date).format('MMM Do YY')}</p>
        <p>| Helpful? Yes ({answer.helpfulness}) </p>
        <button disabled={disable}
        onClick={() => setDisable(true)}>Report</button>
      </div>
      )}
      {answers.length > 2 ? <button onClick={() => toggleButton()}>{buttonText}</button> : null}
    </div>
  )
}

export default Answers;