import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const AddAnswer = ( {body, productId, questionId}) => {

  const [productName, setProductName] = useState('');
  const [answerInput, setAnswerInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [isClicked, setIsClicked] = useState(false);

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

  const handleOnSubmit = () => {
    console.log('Sent')
    axios({
      method: 'post',
      url: '/addAnswer',
      data: {
        body: `${answerInput}`,
        name: `${nameInput}`,
        email: `${emailInput}`
      },
      headers: {
        id: `${questionId}`
      }
    })
    .then(result => {
      setAnswerInput('');
      setNameInput('');
      setEmailInput('');
      console.log('Success!');
    })
    .catch(error => {
      console.log('CLIENT SIDE ERROR', error)
    })
  }
  useEffect(() => {
    getProductInfo();
  }, []);

  return (
    <div>
      <h2>Submit Your Answer </h2>
      <h3>{body}: </h3>
      <p>{productName}</p>
      <form>
        <label>
          Your Answer:
          <input className='submit-answer' type='text' maxLength='1000' required
          value={answerInput} onChange={(e) => setAnswerInput(e.target.value)}/>
        </label>
        <label>
          What is your nickname:
          <input className='submit-name' type='text' maxLength='60' required
          value={nameInput} placeHolder='Example: jack543!'
          onChange={(e) => setNameInput(e.target.value)}/>
        </label>
        <label>
          Your email:
          <input className='submit-email' type='email' maxLength='60' required
          value={emailInput} placeHolder='Example: jack@email.com'
          onChange={(e) => setEmailInput(e.target.value)}/>
        </label>
          <input className='submit-answerButton' type='button' value='Submit Answer'
          onClick={() => handleOnSubmit()}
          />
      </form>
    </div>
  )
}

export default AddAnswer;