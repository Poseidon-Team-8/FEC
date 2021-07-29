import React, { useState, useEffect, useContext } from 'react';
import BreakdownEntry from './BreakdownEntry.jsx';

const Breakdown = ({ ratings, totalReviews }) => {
  return (
    <div className='breakdown-container'>
      {
        Object.values(ratings).map( (rating, idx) => {
          return <BreakdownEntry rating={ idx + 1} percentage={ (rating/totalReviews*100).toFixed(2) } />
        })
      }
    </div>
  );
}

export default Breakdown;