import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const AddAnswer = ( {id, productId}) => {

  axios({
    method: 'get',
    url: '/productName',
    headers: {
      id:  `${productId}`
    }
  })

  return (
    <div>
      <p>placeholder</p>
    </div>

  )
}

export default AddAnswer;