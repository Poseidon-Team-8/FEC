import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Answers = ({id}) => {

  const [ answers, setAnswer] = useState([])

  const getAnswers = () => {
    axios({
      method: 'get',
      url: '/productAnswers',
      headers: {
        id: `${id}`
      }
    })
    .then( response => {
      setAnswer(response.data.results);
    })
  }

  useEffect(() => {
    getAnswers();
  }, [])

  return (
    <div>
      {answers.map( answer =>
        <p key={answer.answer_id}>A: {answer.body}</p>
      )}
    </div>
  )
}

export default Answers;