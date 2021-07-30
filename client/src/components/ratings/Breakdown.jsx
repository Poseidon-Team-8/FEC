import React, { useState, useEffect, useContext } from 'react';
import BreakdownEntry from './BreakdownEntry.jsx';

const Breakdown = ({ ratings, totalReviews }) => {

  let breakdownEntries = [];
  for (let i=1; i<=5; i++) {
    let rating = String(i);
    if (ratings[rating]) {
      breakdownEntries.push(<BreakdownEntry key={ i } rating={ i } numReviews={ ratings[rating] } percentage={ (ratings[rating]/totalReviews*100).toFixed(2) }/>);
    } else {
      breakdownEntries.push(<BreakdownEntry key={ i } rating={ i } numReviews={ 0 } percentage={ 0 }/>);
    }

  }

  return (
    <div className='breakdown-container'>
      { breakdownEntries }
    </div>
  );
}

export default Breakdown;