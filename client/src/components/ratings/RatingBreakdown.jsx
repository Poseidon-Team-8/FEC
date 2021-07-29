import React, { useState, useEffect, useContext } from 'react';

import RatingSummary from './RatingSummary.jsx';
import Breakdown from './Breakdown.jsx';

const RatingBreakdown = ({ ratings, recommended }) => {

  const ratingSum = Object.values(ratings).reduce((a, b) => parseInt(a) + parseInt(b));
  const ratingAvg = (ratingSum/6).toFixed(1);
  const totalReviews = Object.values(recommended).reduce((a, b) => parseInt(a) + parseInt(b));
  const percentRecommended = ((parseInt(recommended.true)/totalReviews)*100).toFixed(1);


  return (
    <>
      <div className="rating-breakdown-container">
        <RatingSummary ratingAvg={ ratingAvg }/>
        <p>{`${percentRecommended}% of reviews recommend this product`}</p>
        <Breakdown ratings={ ratings } totalReviews={ totalReviews } />
      </div>
    </>
  )
}

export default RatingBreakdown;