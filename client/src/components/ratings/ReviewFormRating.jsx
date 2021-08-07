import React, { useState, useEffect, useContext } from 'react';

import Star from './Star.jsx';

const ReviewFormRating = ({ rating, setRating }) => {
  const noStar = "./icons/no-star.svg";
  const star = "./icons/star.svg";
  const [hoverRating, setHoverRating] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const ratingSelector = [];

  const createStar = (src, idx) => {
    return <Star key={Math.random()*20} starState={ src } rating={rating} idx={ idx } isHovering={isHovering} setRating={ setRating } setHoverRating={ setHoverRating } setIsHovering={ setIsHovering } />
  }

  for (let i = 1; i < 6; i++) {
    const ratingToShow = isHovering ? hoverRating : rating;

    if (i <= ratingToShow) {
      ratingSelector.push(createStar(star, i))
    } else {
      ratingSelector.push(createStar(noStar, i))
    }
  }

  return (
    <div>
      {
        ratingSelector
      }
    </div>
  );
}

export default ReviewFormRating;