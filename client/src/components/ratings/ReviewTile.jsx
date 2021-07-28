import React, { useState, useContext } from 'react';
import StarRating from './StarRating.jsx';
import Helpful from './Helpful.jsx';
import Response from './Response.jsx'

const ReviewTile = ({ review }) => {
  const { review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos } = review;
  const formatedDate = new Date(date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const postDate = formatedDate.toLocaleDateString('en-US', options);

  return (
    <div className="review-tile-container">
      <div className="tile-header">
        <div>
          <StarRating rating={ rating } />
        </div>
        <p>{ reviewer_name + ", " + postDate }</p>
      </div>
      <div>
        <b>{ summary }</b>
        <p>{ body }</p>
        { recommend ? <p>I recommend this product</p> : null }
        { response ? <Response response={ response } /> : null}
        <Helpful yesCount={ helpfulness } reviewId={ review_id }/>
      </div>
    </div>
  )
}

export default ReviewTile;