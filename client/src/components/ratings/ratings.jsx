import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import ReviewList from './ReviewList.jsx';
import ReviewListSort from './ReviewListSort.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

const Ratings = ({ productId }) => {

  const [reviews, setReviews] = useState([]);
  const [meta, setMeta] = useState(undefined);

  const getReviews = (sort) => {
    axios.get('/reviews', {
      headers: {
        id: 18029,
        reqtype: 'general',
        sort: `${sort}`
      }
    })
    .then( (res) => {
      setReviews(res.data.results);
    })
    .catch( (err) => {
      console.log("Error Fetching Reviews");
    })
  }

  const getMetaData = () => {
    axios.get('/meta', {
      headers: {
        id: 18029
      }
    })
    .then( (res) => {
      setMeta(res.data);
    })
    .catch( (err) => {
      console.log("Error Fetching Meta Data");
    })
  }

  useEffect(() => {
    getReviews('relevant');
    getMetaData();
  }, [])

  if (!reviews || !meta) return null;
  return (
    <>
      <div className="widget-container">
        <div className="left-col-container">
          <RatingBreakdown ratings={ meta.ratings} recommended={ meta.recommended}/>
          <ProductBreakdown characteristics={ meta.characteristics }/>
        </div>
        <div className="right-col-container">
          <ReviewListSort numReviews={ reviews.length } getSortedReviews={ getReviews }/>
          <ReviewList reviews={ reviews }/>
        </div>
      </div>
      <div style={{ "marginBottom": "5em"}}>

      </div>
    </>
  )
}

export default Ratings;