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
      console.log('server response', response.data.results);
      setAnswer(response.data.results);
    })
  }
  useEffect(() => {
    getAnswers();
  }, [])

  return (
    <div>
      <ul>
        {answers.map( answer =>
          <li key={answer.answer_id}>{answer.body}</li>
        )}
      </ul>

    </div>
  )
}

export default Answers;