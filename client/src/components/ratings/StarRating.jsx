import React, { useState, useContext } from 'react';

let StarRating = ({ rating }) => {
  let numFull = Math.floor(rating);
  let numFraction = rating - numFull;
  let numEmpty = 5 - (numFull + Math.ceil(numFraction));
  let stars = [];

  for (let i = 0; i < numFull; i++) {
    stars.push(<img src='./icons/star.svg'></img>)
  }

  if (!numFraction) {
    for (let i = 0; i < numEmpty; i++) {
      stars.push(<img src='./icons/no-star.svg'></img>)
    }
  }
  return (
    stars
  );
}

export default StarRating;