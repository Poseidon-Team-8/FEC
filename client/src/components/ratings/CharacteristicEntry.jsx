import React, { useState, useContext } from 'react';
import styled from 'styled-components';

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
  display: ${props => props.visibility === 'true' ? 'flex' : 'none'};
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1em;
  margin-right: 1em;
`;

const LengthScale = styled.div`
  display: ${props => props.visibility === 'true' ? 'flex' : 'none'};
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1em;
  margin-right: 1em;
`;

const ComfortScale = styled.div`
  display: ${props => props.visibility === 'true' ? 'flex' : 'none'};
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1em;
  margin-right: 1em;
`;

const QualityScale = styled.div`
  display: ${props => props.visibility === 'true' ? 'flex' : 'none'};
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1em;
  margin-right: 1em;
`;

const CharacteristicEntry = ({ characteristic, value }) => {
  const percentage = (value/5*100).toFixed(2);
  const displayFit = (characteristic === 'Fit' || characteristic === 'Size');
  const displayLength = (characteristic === 'Length' || characteristic === 'Width');
  const displayComfort = (characteristic === 'Comfort');
  const displayQuality = (characteristic === 'Quality');

  return (
    <>
      <Container>
        <p style={{ "marginLeft": "1em", "marginBottom": "0.2em" }}>{ characteristic }</p>
        <Track>
          <Arrow src="./icons/arrow.svg" percentage={ percentage }/>
        </Track>
        <FitScale visibility={ String(displayFit) }>
          <small>Small</small>
          <small>Perfect</small>
          <small>Large</small>
        </FitScale>
        <LengthScale visibility={ String(displayLength) }>
          <small>Short</small>
          <small>Perfect</small>
          <small>Long</small>
        </LengthScale>
        <ComfortScale visibility={ String(displayComfort) }>
          <small>Poor</small>
          <small>Average</small>
          <small>Great</small>
        </ComfortScale>
        <QualityScale visibility={ String(displayQuality) }>
          <small>Poor</small>
          <small>Average</small>
          <small>Great</small>
        </QualityScale>
      </Container>
    </>
  );
}

export default CharacteristicEntry;
