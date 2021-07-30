import React from 'react';
import ReactDOM from 'react-dom';
import Answers from './answers.jsx';
import HelpfulQ from './helpfulQuestion.jsx';
import AddAnswer from './addAnswer.jsx';

const IndividualQ = ({question, productId}) => {

  //quesiton_id
  return (
    <div>
      <div>
        <p>Q: {question.question_body}</p>
        <HelpfulQ id={question.question_id} helpful={question.question_helpfulness} />
        <AddAnswer
        productId={productId}
        body={question.question_body}
        />
        <Answers id={question.question_id} ></Answers>
      </div>
    </div>
  )
}

export default IndividualQ;