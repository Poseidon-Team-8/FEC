import React, { useState, useEffect, useContext } from 'react';
import RatingSortItem from './RatingSortItem.jsx';

const RatingSortMenu = ({ sortSelections, setSortSelections }) => {

  let ratingSortButtons = [];
  sortSelections.forEach( (ratingSort) => {
    ratingSortButtons.push( <RatingSortItem rating={ ratingSort } /> )
  });

  console.log(sortSelections)

  return (
    <div className="rating-sort-menu">
      {
        ratingSortButtons
      }
    </div>
  );
}

export default RatingSortMenu;