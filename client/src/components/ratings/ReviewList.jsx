import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import ReviewTile from './ReviewTile.jsx';

const ReviewList = ({ reviews }) => {
  const formatedReviews = reviews.map( (review, idx) => { return <ReviewTile key={ idx } review={ review }/> })
  console.log(formatedReviews);

  const [numReviewsRendered, setNumReviewsRendered] = useState(2);

  const addReviews = () => {
    setNumReviewsRendered(prev => prev + 2);
  }
  return (
    <>
      <div className="review-list-container">
        { formatedReviews.slice(0, numReviewsRendered) }
      </div>
      <div className="button-container">
        {
          (numReviewsRendered < formatedReviews.length) ? <button onClick={ () => addReviews() }>More Reviews</button> : null
        }
        <button>Write A Review +</button>
      </div>
    </>
  )
}

export default ReviewList;