import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import moment from 'moment';

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

  return (
    <div>
      {answers.map( answer =>
      <div>
        <p key={answer.answer_id}>A: {answer.body}</p>
        <p>by {answer.answerer_name} {answer.date} | Helpful? Yes ({answer.helpfulness})</p>
      </div>
      )}
    </div>
  )
}

export default Answers;