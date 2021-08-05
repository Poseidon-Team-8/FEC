import React from 'react';

const noStar = "./icons/no-star.svg";
const filledStar = "./icons/star.svg";

const Star = ({ starState, idx, isHovering, setRating, setHoverRating, setIsHovering }) => {
  const onMouseEnter = () => {
    setHoverRating(idx);
    setIsHovering(true);
  }

  const onMouseLeave = () => {
    setHoverRating(0);
    setIsHovering(false);
  }

  return (
    <img src={ starState } onClick={() => setRating(idx)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}></img>
  );
}

export default Star;
