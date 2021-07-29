import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

const Track = styled.div`
  width: 100%;
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

const BreakdownEntry = ({ rating, percentage}) => {
  console.log('rating: ', rating);
  console.log('percentage:', percentage);
  return (
    <div className="breakdown-entry-container">
      <Track>
        <Thumb percentage={ percentage }/>
      </Track>
    </div>
  );
}

export default BreakdownEntry;
