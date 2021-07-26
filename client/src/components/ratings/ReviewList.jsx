import React, { useState, useContext } from 'react';
import ReviewTile from './ReviewTile.jsx';

let ReviewList = ({ reviews }) => {
  return (
    <div>
      {
        reviews.map( review => {
          return <ReviewTile review={ review }/>
        })
      }
    </div>

  )
}

export default ReviewList;