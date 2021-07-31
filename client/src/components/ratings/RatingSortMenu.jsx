import React, { useState, useEffect, useContext } from 'react';
import RatingSortItem from './RatingSortItem.jsx';

const RatingSortMenu = ({ sortSelections, setSortSelections }) => {

  let ratingSortItems = [];
  sortSelections.forEach( (ratingSort) => {
    ratingSortItems.push( <RatingSortItem key={ ratingSort } rating={ ratingSort } sortSelections={ sortSelections } setSortSelections={ setSortSelections } /> )
  });

  console.log(sortSelections)

  return (
    <div className="rating-sort-menu">
      { ratingSortItems }
      { sortSelections.size !== 0 ? <button onClick={ () => setSortSelections(new Set()) }>Remove All Filters</button> : null}
    </div>
  );
}

export default RatingSortMenu;