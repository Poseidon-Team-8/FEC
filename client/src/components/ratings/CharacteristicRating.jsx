import React, { useState, useEffect, useContext } from 'react';

const CharacteristicTexts = {
  Size: {
    left: 'Small',
    middle: 'Perfect',
    right: 'Large',
  },
  Width: {
    left: 'Narrow',
    middle: 'Perfect',
    right: 'Wide',
  },
  Comfort: {
    left: 'Poor',
    middle: 'Average',
    right: 'Perfect',
  },
  Quality: {
    left: 'Poor',
    middle: 'Average',
    right: 'Perfect',
  },
  Length: {
    left: 'Short',
    middle: 'Perfect',
    right: 'Long',
  },
  Fit: {
    left: 'Tight',
    middle: 'Perfect',
    right: 'Long',
  },
}

const CharacteristicRating = ({ characteristic }) => {
  return (
    <>
      <label style={{ "display": "flex", "flex-direction": "column", "align-items": "center"}}>
        <input type="radio" value="1"></input>
        Hello
      </label>
    </>
  );
}

export default CharacteristicRating