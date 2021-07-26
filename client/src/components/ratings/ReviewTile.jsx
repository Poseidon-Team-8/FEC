import React, { useState, useContext } from 'react';
import StarRating from './StarRating.jsx';

class ReviewTile extends React.Component {
  constructor({props}) {
    super(props);
    this.state = {

    }
  }

  render() {
    let review = this.props.review;
    let date = new Date(review.date);
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    let postDate = date.toLocaleDateString('en-US', options);


    return (
      <div className="review-tile-container">
        <div className="tile-header">
          <div>
            <StarRating rating={ review.rating } />
          </div>
          <p>{ review.reviewer_name + ", " + postDate }</p>
        </div>
        <div>
          <b>{ review.summary }</b>
          <p>{ review.body }</p>
          { review.recommend ? <p>I recommend this product</p> : null }
        </div>
      </div>
    )
  }
}

export default ReviewTile;