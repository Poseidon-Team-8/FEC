import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Helpful from './helpful.jsx'
var moment = require('moment');

const Answers = ({id}) => {

  const [ answers, setAnswer] = useState([]);
  const [answerAmount, setAnswerAmount] = useState(2);
  const [buttonText, setButton] = useState('SEE MORE ANSWERS');
  const [disable, setDisable] = useState(false);

  const toggleButton = () => {
    if (answerAmount === 2 ) {
      setAnswerAmount(answers.length);
      setButton('COLLAPSE ANSWERS');
    } else {
      setAnswerAmount(2);
      setButton('SEE MORE ANSWERS')
    }
  }

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
      console.log(response.data)
    })
  }

  useEffect(() => {
    getAnswers();
  }, [])
  let copyOfAnswers = answers;
  const sortAnswers = (answersArray) => {
    let sellerArray = [];
    answersArray.sort( (a, b) => {
      return b.helpfulness-a.helpfulness;
    })
    for (let i = 0; i < answersArray.length; i++) {
      if ( answersArray[i].answerer_name === 'Seller' ) {
        sellerArray.push(answersArray[i])
      }
    }
    let filteredArray = answersArray.filter(answer => {
      return answer.answerer_name !== 'Seller';
    });
    let concatedArray = sellerArray.concat(filteredArray)
    return concatedArray;
  }

  copyOfAnswers = sortAnswers(copyOfAnswers);
  return (
    <div>
      {copyOfAnswers.slice(0, answerAmount).map( (answer, key)=>
      <div key={answer.answer_id}>
        <p >A: {answer.body}</p>
        <p>by <strong>{answer.answerer_name}</strong>
        {moment(answer.date).format('MMM Do YY')}</p>
        <Helpful id={answer.answer_id} helpful={answer.helpfulness}/>
        {disable === false ? <button disabled={false} onClick={() => setDisable(true)}>Report</button> :
        <button disabled={true}>Reported</button>}
      </div>
      )}
      {answers.length > 2 ? <button onClick={() => toggleButton()}>{buttonText}</button> : null}
    </div>
  )
}

export default Answers;