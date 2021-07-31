import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const AddQuestion = ({ productName, productId}) => {

  // const [productName, setProductName] = useState('');
  const [questionInput, setQuestionInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const validate = () => {
    let requiredQuestion = '';
    let requiredName = '';
    let requiredEmail = '';
    let emailValid = emailInput.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    let requiredValidEmail = '';
    let message = 'You must enter the following:';

    if ( questionInput === '' ) {
      requiredQuestion = 'A question';
    }
    if ( nameInput === '' ) {
      requiredName = 'A name';
    }
    if ( emailInput === '' ) {
      requiredEmail = 'An email';
    }
    if ( !emailValid ) {
      requiredValidEmail = 'A valid email';
    }
    if ( requiredQuestion || requiredName || requiredEmail || requiredValidEmail) {
      let invalidInfo = [requiredQuestion, requiredName, requiredEmail, requiredValidEmail];
      let alertMessage = `${message}`;
      invalidInfo.forEach(requiredInfo => {
        if ( requiredInfo) {
          alertMessage += '\n' + requiredInfo;
        }
      })
      alert(alertMessage);
      return true;
    }
  }

  const handleOnSubmit = () => {
    if (validate()) {
      return;
    }
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

// toggle button once I get response so I can clear fields firts
  return (
    <div>
      { !isClicked ? <button onClick={() => setIsClicked(true)}>Add A Question</button> :
      <div className='modal-container'>
        <div className='modal-content'>
        <button onClick={() => setIsClicked(false)}>Exit</button>
          <h2>Ask Your Question </h2>
          <h3>About the {productName}</h3>
          <form>
            <label>
              Your Question*:
              <input className='submit-question' type='text' maxLength='1000' required
              value={questionInput} onChange={(e) => setQuestionInput(e.target.value)}/>
            </label>
            <label>
              What is your nickname*:
              <input className='submit-name' type='text' maxLength='60' required
              value={nameInput} placeHolder='Example: jack543!'
              onChange={(e) => setNameInput(e.target.value)}/>
            </label>
            <label>
              Your email*:
              <input className='submit-email' type='email' maxLength='60' required
              value={emailInput} placeHolder='Example: jack@email.com'
              onChange={(e) => setEmailInput(e.target.value)}/>
            </label>
            <p>For authentication reasons, you will not be emailed</p>
              <input className='submit-questionButton' type='button' value='Submit Question'
              onClick={() => handleOnSubmit()}
              />
          </form>
        </div>
      </div>
    }
    </div>
  )
}

export default AddQuestion;