import React, { useState, useContext } from 'react';
import axios from 'axios';

const Helpful = ({ yesCount, reviewId }) => {

  const [clicked, setClicked] = useState(false);
  const [yesCounter, setYesCounter] = useState(yesCount);
  const [noCounter, setNoCounter] = useState(0);

  const updateYesCounter = () => {
    if (!clicked) {
      axios.put('/review-helpful', {
        headers: {
          reviewId: reviewId
        }
      })
      .then( (res) => {
        setYesCounter(yesCounter + 1);
        setClicked(true);
      })
      .catch( (err) => {
        console.log('Error updating helfulness');
      })
    }
  }


  const updateNoCounter = () => {
    if (!clicked) {
      setNoCounter(noCounter + 1);
      setClicked(true);
    }
  }

  return (
    <div>
      <p style={{ "display": "inline" }}>Was this review helpful? </p>
      <a href='javascript:;' className='helpful-count' onClick={ () => updateYesCounter() }>Yes ({ yesCounter }) </a>
      <p style={{ "display": "inline" }}>| </p>
      <a href='javascript:;' className='helpful-count' onClick={ () => updateNoCounter() }>No ({ noCounter })</a>
    </div>
  );
}

export default Helpful;