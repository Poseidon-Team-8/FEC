import React, { useState, useContext } from 'react';

const ReviewListSort = ({ numReviews }) => {


  return (
    <div>
      <b>
        <span>{`${numReviews} reviews, sorted by `}</span>
      </b>
      <select id="sort-reviews">
        <option selected>relevance</option>
        <option>newest</option>
        <option>helpfulness</option>
      </select>
    </div>
  );
}

export default ReviewListSort;
