import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const AddAnswer = ( {body, productId, questionId}) => {

  const [productName, setProductName] = useState('');
  const [answerInput, setAnswerInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

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

  handleOnSubmit = () => {
    axios({
      method: 'post',
      url: '/addAnswer',
      data: {

      }
    })
  }
  //write onChange functions for each input field



  //build function which invokes set'something' for useState for each input field
  //then fire off post request

  return (

    //will need to add onChange functions for each input field
    //write a ternary to display button or modal with form
    <div>
      <h2>Submit Your Answer </h2>
      <h3>{body}: </h3>
      <p>{productName}</p>
      <form>
        <label>
          Your Answer:
          <input className='submit-answer' type='text' maxLength='1000' required
          onChange={(e) => setAnswerInput(e.target.value)}/>
        </label>
        <label>
          What is your nickname:
          <input className='submit-name' type='text' maxLength='60' required
          onChange={(e) => setNameInput(e.target.value)}/>
        </label>
        <label>
          Your email:
          <input className='submit-email' type='email' maxLength='60' required
          onChange={(e) => setEmailInput(e.target.value)}/>
        </label>
          <input className='submit-answerButton' type='button' value='Submit Answer'/>


      </form>
    </div>

  )
}

export default AddAnswer;