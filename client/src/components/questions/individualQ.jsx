import React from 'react';
import ReactDOM from 'react-dom';
import Answers from './answers.jsx';
import HelpfulQ from './helpfulQuestion.jsx';
import AddAnswer from './addAnswer.jsx';

const IndividualQ = ({question, productId, productName}) => {


  return (
    <div >
      <div className='individual-question'>
        <p>Q: {question.question_body}</p>
        <HelpfulQ id={question.question_id} helpful={question.question_helpfulness} />
        <AddAnswer
        productName={productName}
        body={question.question_body}
        questionId={question.question_id}
        />
        <Answers id={question.question_id} ></Answers>
      </div>
    </div>
  )
}

export default IndividualQ;