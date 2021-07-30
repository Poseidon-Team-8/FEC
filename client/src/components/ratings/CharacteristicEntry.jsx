import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const CharacteristicEntry = ({ characteristic, value }) => {
  const percentage = (value/5*100).toFixed(2);
  console.log(characteristic);
  console.log(percentage)

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

  const LabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  return (
    <Container>
      <p style={{ "marginLeft": "1em" }}>{ characteristic }</p>
      <Track>
        <Arrow src="./icons/arrow.svg" percentage={ percentage }/>
      </Track>
    </Container>
  );
}

export default CharacteristicEntry;
