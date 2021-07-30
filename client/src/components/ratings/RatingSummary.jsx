import React, { useState, useEffect, useContext } from 'react';

import StarRating from './StarRating.jsx';

const RatingSummary = ({ ratingAvg }) => {
  return (
    <div className="rating-summary-container">
      <h1 className="rating-sum-avg">{ ratingAvg }</h1>
      <StarRating rating={ ratingAvg }/>
    </div>
  )
}

export default RatingSummary;
