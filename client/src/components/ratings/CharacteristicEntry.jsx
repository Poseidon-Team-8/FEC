import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const CharacteristicEntry = ({ characteristic, value }) => {
  console.log('Characteristic:', characteristic);
  console.log('Value: ', value)

  const Track = styled.div`
    width: 60%;
    height: 10px;
    background-color: #222;
    border-radius: 5px;
  `;

  const Thumb = styled.div`
    width: ${props => props.percentage}%;
    height: 100%;
    background-color: #17b978;
    border-radius: 2px;
  `;

  return (
    <div className="characteristic-entry">
      <p>{ characteristic }</p>
      <Track>
        <Thumb />
      </Track>
    </div>
  );
}

export default CharacteristicEntry;
