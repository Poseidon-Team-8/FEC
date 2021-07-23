import React from 'react';
import ReactDOM from 'react-dom';

const Answers = ({id}) => {

 const getAnswers = () => {
    axios.get('/productAnswers', {
      headers: `${id}`
    })
  }

  return (
    <p>answer</p>
  )
}

export default Answers;