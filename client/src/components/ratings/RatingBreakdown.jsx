import React, { useState, useEffect, useContext } from 'react';

import RatingSummary from './RatingSummary.jsx';

let RatingBreakdown = ({ ratings, recommended }) => {

  const ratingSum = Object.values(ratings).reduce((a, b) => parseInt(a) + parseInt(b));
  const ratingAvg = (ratingSum/6).toFixed(1);

  return (
    <div className="rating-breakdown-container">
      <RatingSummary ratingAvg={ ratingAvg }/>
      Rating Breakdown Goes Here!
    </div>
  )
}

export default RatingBreakdown;