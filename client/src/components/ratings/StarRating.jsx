import React, { useState, useContext } from 'react';

let StarRating = ({ rating }) => {
  let numFull = Math.floor(rating);
  let numFraction = rating - numFull;
  let numEmpty = 5 - (numFull + Math.ceil(numFraction));
  let stars = [];

  for (let i = 0; i < numFull; i++) {
    stars.push(<img src='./icons/star.svg'></img>)
  }
  if (numFraction > 0) {
    let fraction = (numFraction > 0 && numFraction <= 0.25) ? './icons/star-one-quarter.svg' :
                   (numFraction > 0.25 && numFraction <= 0.5) ? './icons/star-half.svg' :
                   (numFraction > 0.5 && numFraction <= 0.75) ? './icons/star-three-quarter.svg' :
                    './icons/star.svg'

    stars.push(<img src={fraction}></img>)
  }

  if (numEmpty > 0) {
    for (let i = 0; i < numEmpty; i++) {
      stars.push(<img src='./icons/no-star.svg'></img>)
    }
  }

  return (
    <div className="star-container">
      { stars }
    </div>
  );
}

export default StarRating;