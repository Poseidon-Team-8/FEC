import React, { useState, useEffect, useContext } from 'react';

const RatingSortItem = ({ rating }) => {
  return (
    <div>
      <button>{ `${rating}` }</button>
    </div>
  );
}

export default RatingSortItem;