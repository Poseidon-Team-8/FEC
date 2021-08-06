import React, { useState, useContext } from 'react';
import styled from 'styled-components';

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

const Scale = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1em;
  margin-right: 1em;
`;

const CharacteristicScale = ({ characteristic }) => {

  const {left, middle, right} = CharacteristicTexts[characteristic];

  if (!left || !middle || !right) return null;

  return (
         <Scale>
          <small>{left}</small>
          <small>{middle}</small>
          <small>{right}</small>
        </Scale>
  );
}

export default CharacteristicScale;
