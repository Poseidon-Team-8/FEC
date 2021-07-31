import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Answers from './answers.jsx';
import HelpfulQ from './helpfulQuestion.jsx';
import AddAnswer from './addAnswer.jsx';
import AddQuestion from './addQuestion.jsx';

const IndividualQ = ({question, productId}) => {

  const [productName, setProductName] = useState('');

  const getProductInfo = () => {
    axios({
      method: 'get',
      url: '/productInfo',
      headers: {
        id: `${productId}`
      }
    })
    .then( results => {
      setProductName(results.data.name);
    })
    .catch(error => {
      console.log('THIS IS CLIENT SIDE ERROR', error)
    })
  }
  useEffect(() => {
    getProductInfo();
  })
  //user property OVERFLOW: auto to make div switch to scrolling when it gets to big
  return (
    <div>
      <div>
        <p>Q: {question.question_body}</p>
        <HelpfulQ id={question.question_id} helpful={question.question_helpfulness} />
        <AddAnswer
        productName={productName}
        body={question.question_body}
        questionId={question.question_id}
        />
        <Answers id={question.question_id} ></Answers>
        <AddQuestion
        productName={productName}
        productId={productId}
        />
      </div>
    </div>
  )
}

export default IndividualQ;