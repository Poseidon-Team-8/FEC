import React from 'react';
import ReactDOM from 'react-dom';

const Display = ({question}) => {
  return (
    <div>
      <p>Q: {question.question_body}</p>


    </div>
  )
}

export default Display;