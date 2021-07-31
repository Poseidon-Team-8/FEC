import React, { useState, useEffect, useContext } from 'react';

const RatingSortItem = ({ rating, sortSelections, setSortSelections }) => {

  const removeSort = () => {
    sortSelections.delete(rating)
    setSortSelections(new Set([...sortSelections]))
    console.log(sortSelections)
  }

  return (
    <button className='rating-sort-button' onClick={ () => removeSort() }>{ `${rating} stars` }</button>
  );
}

export default RatingSortItem;