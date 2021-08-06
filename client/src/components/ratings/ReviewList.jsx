import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import ReviewTile from './ReviewTile.jsx';
import ReviewFormModal from './ReviewFormModal.jsx';

const ReviewList = ({ reviews, meta, productId, productName }) => {
  if (reviews.length === 0) {
    return (
      <button>Write A Review +</button>
    );
  }
  const formatedReviews = reviews.map( (review, idx) => { return <ReviewTile key={ idx } review={ review }/> })
  const [displayModal, setDisplayModal] = useState(false);
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
        <ReviewFormModal productName={productName} productId={ productId } meta={ meta } displayModal={ displayModal } setDisplayModal={ setDisplayModal }/>
        <button onClick={ () => setDisplayModal(true) }>Write A Review +</button>
      </div>
    </>
  )
}

export default ReviewList;