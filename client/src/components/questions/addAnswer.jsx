import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const AddAnswer = ( {body, productName, questionId}) => {

  // const [productName, setProductName] = useState('');
  const [answerInput, setAnswerInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [imageInput, setImageInput] = useState([]);
  const [isClicked, setIsClicked] = useState(false);


  const handleOnSubmit = () => {
    e.preventDefault();
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
      setIsClicked(false);
    })
    .catch(error => {
      console.log('CLIENT SIDE ERROR', error)
    })
  }

// toggle button once I get response so I can clear fields firts
  return (
    <div>
      { !isClicked ? <button onClick={() => setIsClicked(true)}>Add Answer</button> :
      <div className='modal-container' >
        <div className='modal-content'>
        <button onClick={() => setIsClicked(false)}>Exit</button>
          <h2>Submit Your Answer </h2>
          <h3>{body}: </h3>
          <p>{productName}</p>
          <form>
            <label>
              Your Answer*:
              <input className='submit-answer' type='text' maxLength='1000' required
              value={answerInput} onChange={(e) => setAnswerInput(e.target.value)}/>
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
            <label>
              Upload your photos:
              <input type='file' multiple
              onChange={(e) => setImageInput(URL.createObjectURL(e.target.files[0]))} />
              <img src={imageInput} />
            </label>
              <input className='submit-answerButton' type='submit' value='Submit Answer'
              onClick={(e) => handleOnSubmit(e)}
              />
          </form>
        </div>
      </div>
    }
    </div>
  )
}

export default AddAnswer;