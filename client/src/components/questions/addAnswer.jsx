import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const AddAnswer = ( {body, productName, questionId}) => {

  const [answerInput, setAnswerInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [imageInput, setImageInput] = useState([]);
  const [isClicked, setIsClicked] = useState(false);



  const handleImageInput = (e) => {

    if ( e.target.files.length > 5) {
      e.target.value = null;
      alert('You cannot upload more than 5 images!');
    } else {
      setImageInput([...e.target.files]);
    }
  }

  const handleOnSubmit = (e) => {

    e.preventDefault();
    let images = imageInput.map( image => {
      let url = URL.createObjectURL(image);
      return url.split('blob:')[1]
    });

    axios({
      method: 'post',
      url: '/addAnswer',
      data: {
        body: `${answerInput}`,
        name: `${nameInput}`,
        email: `${emailInput}`,
        photos: images
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

  return (
    <div>
      { !isClicked ? <button className='helpful-answer'
      onClick={() => setIsClicked(true)}>Add Answer</button> :
      <div className='modal-container' >
        <div className='modal-content'>
        <button onClick={() => setIsClicked(false)}>Exit</button>
          <h2>Submit Your Answer </h2>
          <h3>{body}: </h3>
          <p>{productName}</p>
          <form className='add-answer-form'
          onSubmit={(e) => handleOnSubmit(e)}>
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
                onChange={(e) => handleImageInput(e)} />
              {
              imageInput.map( (image, idx) => {
                let src=URL.createObjectURL(image);
                return <img src={src} key={idx}
                style={{"height": "80px", "width": "60px"}}/>
              })
              }
            </label>
              <input className='submit-answerButton' type='submit' value='Submit Answer'/>
          </form>
        </div>
      </div>
    }
    </div>
  )
}

export default AddAnswer;