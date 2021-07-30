import React, { useState, useContext } from 'react';

const ReviewListSort = ({ numReviews, getSortedReviews }) => {

  const onChange = () => {
    const sortBy = document.getElementById("sort-reviews").value;
    getSortedReviews(sortBy);
  }

  return (
    <div>
      <b>
        <span>{`${numReviews} reviews, sort by `}</span>
      </b>
      <select onChange={ () => onChange() } id="sort-reviews">
        <option selected>relevant</option>
        <option>newest</option>
        <option>helpful</option>
      </select>
    </div>
  );
}

export default ReviewListSort;
