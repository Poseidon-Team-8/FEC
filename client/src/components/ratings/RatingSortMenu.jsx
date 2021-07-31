import React, { useState, useEffect, useContext } from 'react';
import RatingSortItem from './RatingSortItem.jsx';

const RatingSortMenu = ({ sortSelections, setSortSelections }) => {

  let ratingSortItems = [];
  sortSelections.forEach( (ratingSort) => {
    ratingSortItems.push( <RatingSortItem key={ ratingSort } rating={ ratingSort } sortSelections={ sortSelections } setSortSelections={ setSortSelections } /> )
  });

  return (
    <div className="rating-sort-menu">
      {
        ratingSortItems
      }
    </div>
  );
}

export default RatingSortMenu;