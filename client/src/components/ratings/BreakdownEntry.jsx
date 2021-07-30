import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

const Track = styled.div`
  width: 60%;
  height: 10px;
  background-color: #dee3e3;
  border-radius: 2px;
`;

const Thumb = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  background-color: #17b978;
  border-radius: 2px;
`;

const BreakdownEntry = ({ rating, numReviews, percentage}) =>(
    <div className="breakdown-entry-container">
      <div style={{ "marginRight": "0.5em" }}>
        <a href="javascript:" className="helpful-count">{ `${rating} stars` }</a>
      </div>
      <Track>
        <Thumb percentage={ percentage }/>
      </Track>
      <div style={{ "marginLeft": "0.5em"}}>
        <span>({ numReviews })</span>
      </div>
    </div>
);

export default BreakdownEntry;
