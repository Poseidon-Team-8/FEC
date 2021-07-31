import React, { useState, useEffect, useContext } from 'react';

import RatingSummary from './RatingSummary.jsx';
import Breakdown from './Breakdown.jsx';

const RatingBreakdown = ({ ratings, recommended }) => {

  let ratingSum = 0;
  let numVotes = 0;
  for (let key in ratings) {
    ratingSum += parseInt(key)*parseInt(ratings[key]);
    numVotes += parseInt(ratings[key]);
  }
  const ratingAvg = (ratingSum/numVotes).toFixed(1);
  const totalReviews = Object.values(recommended).reduce((a, b) => parseInt(a) + parseInt(b));
  const percentRecommended = ((parseInt(recommended.true)/totalReviews)*100).toFixed(1);

  return (
    <>
      <div className="rating-breakdown-container">
        <RatingSummary ratingAvg={ ratingAvg }/>
        <p style={{ "textAlign": "center"}}>{`${percentRecommended}% of reviews recommend this product`}</p>
        <Breakdown ratings={ ratings } totalReviews={ totalReviews } />
      </div>
    </>
  )
}

export default RatingBreakdown;