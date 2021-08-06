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
            <label className='label-form'>
              Your Answer*:
              <input id='submit-ans' type='text' maxLength='1000' required
              value={answerInput} onChange={(e) => setAnswerInput(e.target.value)}/>
            </label>
            <label className='label-form'>
              What is your nickname*:
              <input id='submit-name' type='text' maxLength='60' required
              value={nameInput} placeholder='Example: jack543!'
              onChange={(e) => setNameInput(e.target.value)}/>
            </label>
            <label className='label-form'>
              Your email*:
              <input id='submit-email' type='email' maxLength='60' required
              value={emailInput} placeholder='Example: jack@email.com'
              onChange={(e) => setEmailInput(e.target.value)}/>
            </label>
            <p>For authentication reasons, you will not be emailed</p>
            <label id='img-upload'>
              Upload your photos:
              <input id='choose-file' type='file' multiple
                onChange={(e) => handleImageInput(e)} />
              <div id='img-container'>

              {
              imageInput.map( (image, idx) => {
                let src=URL.createObjectURL(image);
                return <img id='ans-img' src={src} key={idx}
                style={{"height": "80px", "width": "60px"}}/>
              })
              }
              </div>
            </label>
              <div id='submit-ans-container'>
                <input id='submit-answerButton' type='submit' value='Submit Answer'/>
              </div>
          </form>
        </div>
      </div>
    }
    </div>
  )
}

export default AddAnswer;