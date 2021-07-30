import React from 'react';
import ReactDOM from 'react-dom';
import Answers from './answers.jsx'
import HelpfulQ from './helpfulQuestion.jsx'

const IndividualQ = ({question}) => {

  //quesiton_id
  return (
    <div>
      <div>
        <p>Q: {question.question_body}</p>
        <HelpfulQ id={question.question_id} helpful={question.question_helpfulness} />
        <Answers id={question.question_id} ></Answers>
      </div>
    </div>
  )
}

export default IndividualQ;