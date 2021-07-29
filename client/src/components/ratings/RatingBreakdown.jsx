import React, { useState, useEffect, useContext } from 'react';

import RatingSummary from './RatingSummary.jsx';

const RatingBreakdown = ({ ratings, recommended }) => {

  const ratingSum = Object.values(ratings).reduce((a, b) => parseInt(a) + parseInt(b));
  const ratingAvg = (ratingSum/6).toFixed(1);
  console.log(recommended)

  const totalReviews = Object.values(recommended).reduce((a, b) => parseInt(a) + parseInt(b));
  const percentRecommended = ((parseInt(recommended.true)/totalReviews)*100).toFixed(1);


  return (
    <div className="rating-breakdown-container">
      <RatingSummary ratingAvg={ ratingAvg }/>
      <p>{`${percentRecommended}% of reviews recommend this product`}</p>
    </div>
  )
}

export default RatingBreakdown;