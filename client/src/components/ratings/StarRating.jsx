import React, { useState, useContext } from 'react';

let StarRating = ({ rating }) => {
  let numFull = Math.floor(rating);
  let numFraction = rating - numFull;
  let numEmpty = 5 - (numFull + Math.ceil(numFraction));
  let stars = [];

  for (let i = 0; i < numFull; i++) {
    stars.push(<img src='./icons/star.svg' key={ Math.random(50) }></img>)
  }
  if (numFraction > 0) {
    const fraction = [
      (numFraction > 0.125 && numFraction <= 0.375) && './icons/star-one-quarter.svg',
      (numFraction > 0.375 && numFraction <= 0.625) && './icons/star-half.svg',
      (numFraction > 0.625 && numFraction <= 0.875) && './icons/star-three-quarter.svg',
       './icons/star.svg'
    ].find(Boolean);
    stars.push(<img src={fraction} key={ Math.random(50) }></img>)
  }

  if (numEmpty > 0) {
    for (let i = 0; i < numEmpty; i++) {
      stars.push(<img src='./icons/no-star.svg' key={ Math.random(50) }></img>)
    }
  }

  return (
    <div className="star-container">
      { stars }
    </div>
  );
}

export default StarRating;