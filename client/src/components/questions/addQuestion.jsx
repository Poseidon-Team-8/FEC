import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const AddQuestion = ({ productName, productId}) => {

  const [questionInput, setQuestionInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/addQuestion',
      data: {
        body: `${questionInput}`,
        name: `${nameInput}`,
        email: `${emailInput}`,
        product_id: `${productId}`
      }
    })
    .then(result => {
      setQuestionInput('');
      setNameInput('');
      setEmailInput('');
      setIsClicked(false);
    })
    .catch(error => {
      console.log('CLIENT SIDE ERROR', error)
    })
  }

  return (
    <div id='add-question'>
      { !isClicked ? <button id='add-question'
      onClick={() => setIsClicked(true)}>ADD A QUESTION &nbsp; &nbsp; +</button> :
      <div className='modal-container'>
        <div className='modal-content'>
        <button onClick={() => setIsClicked(false)}>Exit</button>
          <h2>Ask Your Question </h2>
          <h3>About the {productName}</h3>
          <form onClick={(e) => handleOnSubmit(e)}>
            <label>
              Your Question*:
              <input className='submit-question' required type='text' maxLength='1000'
              value={questionInput} onChange={(e) => setQuestionInput(e.target.value)}/>
            </label>
            <label>
              What is your nickname*:
              <input className='submit-name' required type='text' maxLength='60'
              value={nameInput} placeHolder='Example: jack543!'
              onChange={(e) => setNameInput(e.target.value)}/>
            </label>
            <label>
              Your email*:
              <input className='submit-email' required type='email' maxLength='60'
              value={emailInput} placeHolder='Example: jack@email.com'
              onChange={(e) => setEmailInput(e.target.value)}/>
            </label>
            <p>For authentication reasons, you will not be emailed</p>
              <input className='submit-answerButton' type='submit' value='Submit Question'/>
          </form>
        </div>
      </div>
    }
    </div>
  )
}

export default AddQuestion;