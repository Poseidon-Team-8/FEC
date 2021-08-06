import React from 'react';
import ReactDOM from 'react-dom';
import Answers from './answers.jsx';
import HelpfulQ from './helpfulQuestion.jsx';
import AddAnswer from './addAnswer.jsx';

const IndividualQ = ({question, productId, productName}) => {


  return (
    <>
        <div className='individual-question' id='individual-question'>
          <p><strong>Q: {question.question_body}</strong></p>
          <div id='helpful-add-answer'>
            <HelpfulQ id={question.question_id} helpful={question.question_helpfulness} />
            <AddAnswer
            productName={productName}
            body={question.question_body}
            questionId={question.question_id}
            />
          </div>
        </div>
        <Answers id={question.question_id} ></Answers>
    </>
  )
}

export default IndividualQ;