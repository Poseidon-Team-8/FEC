import React, { useState, useEffect, useContext } from 'react';
import BreakdownEntry from './BreakdownEntry.jsx';

const Breakdown = ({ ratings, totalReviews, sortSelections, setSortSelections }) => {

  let breakdownEntries = [];
  for (let i=1; i<=5; i++) {
    let rating = String(i);
    if (ratings[rating]) {
      let entry = <BreakdownEntry key={ i } rating={ i } numReviews={ ratings[rating] } percentage={ (ratings[rating]/totalReviews*100).toFixed(2) } sortSelections={ sortSelections } setSortSelections={ setSortSelections } />
      breakdownEntries.push(entry);
    } else {
      let entry = <BreakdownEntry key={ i } rating={ i } numReviews={ 0 } percentage={ 0 } sortSelections={ sortSelections } setSortSelections={ setSortSelections }/>
      breakdownEntries.push(entry);
    }

  }

  return (
    <div className='breakdown-container'>
      { breakdownEntries }
    </div>
  );
}

export default Breakdown;