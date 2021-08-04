import React, { useState, useEffect, useContext } from 'react';

import Star from './Star.jsx';

const ReviewFormRating = () => {
  const noStar = "./icons/no-star.svg";
  const star = "./icons/star.svg";

  const [ratingSelector, setRatingSelector] = useState([]);

  let ratingState = [];
  const fillUpTo = (idx) => {
    ratingState = [];
    for (let i = 0; i < 5; i++) {
      if (i < idx) {
        ratingState.push(<Star starState={ star } key={ i } fillUpTo={ fillUpTo } />)
      } else {
        ratingState.push(<Star starState={ noStar } key={ i } fillUpTo={ fillUpTo }/>)
      }
    }
    setRatingSelector(ratingState);
  }

  useEffect(() => {
    fillUpTo(0);
  }, [])

  return (
    <div>
      {
        ratingSelector
      }
    </div>
  );
}

export default ReviewFormRating;