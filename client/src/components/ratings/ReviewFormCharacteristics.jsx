import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import CharacteristicRating from './CharacteristicRating.jsx';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 5%;
  margin-right: 5%;
`;

const CharacteristicTexts = {
  Size: {
    left: 'A Size Too Small',
    midLeft: '1/2 A Size Too Small',
    center: 'Perfect',
    midRight: '1/2 A Size Too Big',
    right: 'A Size Too Wide',
  },
  Width: {
    left: 'Too Narrow',
    midLeft: 'Slightly Narrow',
    center: 'Perfect',
    midRight: 'Slightly Wide',
    right: 'Too Wide',
  },
  Comfort: {
    left: 'Uncomfortable',
    midLeft: 'Slightly Uncomfortable',
    center: 'Ok',
    midRight: 'Comfortable',
    right: 'Perfect',
  },
  Quality: {
    left: 'Poor',
    midLeft: 'Below Average',
    center: 'What I Expected',
    midRight: 'Pretty Great',
    right: 'Perfect',
  },
  Length: {
    left: 'Runs Short',
    midLeft: 'Runs Slightly Short',
    center: 'Perfect',
    midRight: 'Runs Slightly Long',
    right: 'Runs Long',
  },
  Fit: {
    left: 'Runs Tight',
    midLeft: 'Runs Slightly Tight',
    center: 'Perfect',
    midRight: 'Runs Slightly Long',
    right: 'Runs Long',
  }
}

const ReviewFormCharacteristics = ({ characteristic, rating, setRating }) => {

  const onChange = (e) => {
    setRating(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <b><p>{ characteristic }</p></b>
      <ButtonContainer>
        {
          Object.values(CharacteristicTexts[characteristic]).map( (text, idx) => {
            return (
              <label key={Math.random()*20} style={{ "display": "flex", "flexDirection": "column", "alignItems": "center"}}>
                <input type="radio" value={ idx+1 } checked={ parseInt(rating) === (idx+1) } onChange={ (e) => onChange(e) }></input>
                <small>{ text }</small>
              </label>
            );
          })
        }
      </ButtonContainer>
    </>
  );
}

export default ReviewFormCharacteristics;