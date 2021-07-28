import React from 'react';
import ReactDOM from 'react-dom';
import Answers from './answers.jsx'

const IndividualQ = ({question}) => {
  return (
    <div>
      <p>Q: {question.question_body}</p>
      <p>Helpful? ({question.question_helpfulness}) Add Answer</p>
      <Answers id={question.question_id} ></Answers>
    </div>
  )
}

export default IndividualQ;