import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import ReviewList from './ReviewList.jsx';
import ReviewListSort from './ReviewListSort.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

const Ratings = ({ productId, name, meta }) => {

  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);

  const getReviews = (sort, count) => {
    axios.get('/reviews', {
      headers: {
        id: productId,
        reqtype: 'general',
        sort: `${sort}`,
        count: count
      }
    })
    .then( (res) => {
      setReviews(res.data.results);
    })
    .catch( (err) => {
      console.log("Error Fetching Reviews");
    })
  }

  useEffect(() => {
    let totalReviews = Object.values(meta.recommended).reduce((a, b) => parseInt(a) + parseInt(b));
    getReviews('relevant', totalReviews);
  }, [])

  if (!reviews) return null;
  return (
    <>
      <div className="widget-container">
        <div className="left-col-container">
          <RatingBreakdown ratings={ meta.ratings} recommended={ meta.recommended} reviews={ reviews } filteredReviews={ filteredReviews } setFilteredReviews={ setFilteredReviews } />
          <ProductBreakdown characteristics={ meta.characteristics }/>
        </div>
        <div className="right-col-container">
          <ReviewListSort numReviews={ filteredReviews.length ? filteredReviews.length : reviews.length } totalNumReviews={ reviews.length } getSortedReviews={ getReviews }/>
          <ReviewList productName={name} productId={ productId } meta={ meta } reviews={ filteredReviews.length ? filteredReviews : reviews }/>
        </div>
      </div>
      <div style={{ "marginBottom": "5em"}}>

      </div>
    </>
  )
}

export default Ratings;