import React, { useState, useEffect, useContext } from 'react';

import Star from './Star.jsx';

const ReviewFormRating = () => {
  const ratingSelector = [];

  for (let i = 0; i < 5; i++) {
    ratingSelector.push(<Star />)
  }

  return (
    <div>
      { ratingSelector }
    </div>
  );
}

export default ReviewFormRating;