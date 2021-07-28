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
      console.log(response.data.results)
      setAnswer(response.data.results);
    })
  }

  useEffect(() => {
    getAnswers();
  }, [])
  console.log(answers)
  return (
    <div>
      {answers.map( answer =>
        <p key={answer.answer_id}>A: {answer.body}</p>
      )}
    </div>
  )
}

export default Answers;