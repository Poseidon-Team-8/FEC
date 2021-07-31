import React, { useState, useEffect, useContext } from 'react';

import RatingSummary from './RatingSummary.jsx';
import RatingSortMenu from './RatingSortMenu.jsx';
import Breakdown from './Breakdown.jsx';

const RatingBreakdown = ({ ratings, recommended, reviews, filteredReviews, setFilteredReviews }) => {

  let ratingSum = 0;
  let numVotes = 0;
  for (let key in ratings) {
    ratingSum += parseInt(key)*parseInt(ratings[key]);
    numVotes += parseInt(ratings[key]);
  }
  const ratingAvg = (ratingSum/numVotes).toFixed(1);
  const totalReviews = Object.values(recommended).reduce((a, b) => parseInt(a) + parseInt(b));
  const percentRecommended = ((parseInt(recommended.true)/totalReviews)*100).toFixed(1);
  const [sortSelections, setSortSelections] = useState(new Set());

  useEffect(() => {
    //update state of reviews based on what is in sortSelections
    if (sortSelections.size) {
      setFilteredReviews(reviews.filter( review => sortSelections.has(review.rating)));
    } else {
      setFilteredReviews([]);
    }
  }, [sortSelections, reviews])

  return (
    <>
      <div className="rating-breakdown-container">
        <RatingSummary ratingAvg={ ratingAvg }/>
        <p style={{ "textAlign": "center"}}>{`${percentRecommended}% of reviews recommend this product`}</p>
        <RatingSortMenu sortSelections={ sortSelections } setSortSelections={ setSortSelections }/>
        <Breakdown ratings={ ratings } totalReviews={ totalReviews } sortSelections={ sortSelections } setSortSelections={ setSortSelections } />
      </div>
    </>
  )
}

export default RatingBreakdown;