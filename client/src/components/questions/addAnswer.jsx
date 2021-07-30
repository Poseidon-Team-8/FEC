import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const AddAnswer = ( {body, productId}) => {

  const [productName, setProductName] = useState('');

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

  //build function which invoke set'something' for useState for each input field
  //then fire off post request

  return (

    //will need to add onChange functions for each input field
    <div>
      <h2>Submit Your Answer </h2>
      <h3>{body}: </h3>
      <p>{productName}</p>
      <form>
        <label>
          Your Answer:
          <input className='submit-answer' type='text' maxLength='1000' required/>
        </label>
        <label>
          What is your nickname:
          <input className='submit-name' type='text' maxLength='60' required/>
        </label>
        <label>
          Your email:
          <input className='submit-email' type='email' maxLength='60' required/>
        </label>
          <input className='submit-answerButton' type='button' value='Submit Answer'/>


      </form>
    </div>

  )
}

export default AddAnswer;