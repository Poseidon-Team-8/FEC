import React from 'react';
import ReactDOM from 'react-dom';
import Answers from './answers.jsx'

const IndividualQ = ({question}) => {

  //quesiton_id
  return (
    <div>
      <div>
        <p>Q: {question.question_body}</p>
        <p>Helpful? ({question.question_helpfulness}) Add Answer</p>
        <Answers id={question.question_id} ></Answers>
      </div>
    </div>
  )
}

export default IndividualQ;