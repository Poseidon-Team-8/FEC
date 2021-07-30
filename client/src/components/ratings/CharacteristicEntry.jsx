import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const CharacteristicEntry = ({ characteristic, value }) => {
  const percentage = (value/5*100).toFixed(2);
  console.log(characteristic);
  console.log(percentage)

  const displayFit = (characteristic === 'Fit');
  const displayLength = (characteristic === 'Length');
  const displayComfort = (characteristic === 'Comfort');
  const displayQuality = (characteristic === 'Quality');

  console.log('displayFit: ', displayFit);

  const Container = styled.div`
    margin-top: 0.5em;
    width: 100%;
  `;

  const Track = styled.div`
    display: flex;
    align-content: center;
    width: auto;
    height: 10px;
    background-color: #dee3e3;
    border-radius: 2px;
    margin-left: 1em;
    margin-right: 1em;
    position: relative;
    align-items: center;
  `;

  const Arrow = styled.img`
    height: auto;
    width: auto;
    position: absolute;
    top: 0;
    left: ${props => props.percentage}%;
    transform: translate(-50%, -50%);
    margin-top: 0.4em;
  `;

  const FitScale = styled.div`
    display: ${props => props.visibility ? 'flex' : 'none'};
    flex-direction: row;
    justify-content: space-between;
    margin-left: 1em;
    margin-right: 1em;
  `;

  const LengthScale = styled.div`
    display: ${props => props.visibility ? 'flex' : 'none'};
    flex-direction: row;
    justify-content: space-between;
    margin-left: 1em;
    margin-right: 1em;
  `;

  const ComfortScale = styled.div`
    display: ${props => props.visibility ? 'flex' : 'none'};
    flex-direction: row;
    justify-content: space-between;
    margin-left: 1em;
    margin-right: 1em;
  `;

  const QualityScale = styled.div`
    display: ${props => props.visibility ? 'flex' : 'none'};
    flex-direction: row;
    justify-content: space-between;
    margin-left: 1em;
    margin-right: 1em;
  `;
  return (
    <>
      <Container>
        <p style={{ "marginLeft": "1em", "marginBottom": "0.2em" }}>{ characteristic }</p>
        <Track>
          <Arrow src="./icons/arrow.svg" percentage={ percentage }/>
        </Track>
        <FitScale visibility={ displayFit }>
          <p2>Small</p2>
          <p2>Perfect</p2>
          <p2>Large</p2>
        </FitScale>
        <LengthScale visibility={ displayLength }>
          <p2>Short</p2>
          <p2>Perfect</p2>
          <p2>Long</p2>
        </LengthScale>
        <ComfortScale visibility={ displayComfort }>
          <p2>Poor</p2>
          <p2>Average</p2>
          <p2>Great</p2>
        </ComfortScale>
        <QualityScale visibility={ displayQuality }>
          <p2>Poor</p2>
          <p2>Average</p2>
          <p2>Great</p2>
        </QualityScale>
      </Container>
    </>
  );
}

export default CharacteristicEntry;
