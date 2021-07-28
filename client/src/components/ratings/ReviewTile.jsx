import React, { useState, useEffect, useContext } from 'react';
import StarRating from './StarRating.jsx';
import Helpful from './Helpful.jsx';
import ReviewBody from './ReviewBody.jsx';
import ReviewPhotos from './ReviewPhotos.jsx';
import PhotoModal from './PhotoModal.jsx';

const ReviewTile = ({ review }) => {
  const { review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos } = review;
  const formatedDate = new Date(date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const postDate = formatedDate.toLocaleDateString('en-US', options);
  const [displayModal, setDisplayModal] = useState(false);
  const  [modalImgSrc, setModalImgSrc] = useState(null);

  const toggleModal = (e) => {
    setModalImgSrc(e.target.currentSrc)
    setDisplayModal(!displayModal);
  }

  return (
    <div className="review-tile-container">
      <div className="tile-header">
        <div>
          <StarRating rating={ rating } />
        </div>
        <p>{ reviewer_name + ", " + postDate }</p>
      </div>
      <div>
        <b>{ summary }</b>
        <ReviewBody body={ body } />
        <ReviewPhotos photos={ photos } toggleModal={ toggleModal }/>
        <PhotoModal displayModal={ displayModal } setDisplayModal={ setDisplayModal } imgSrc={ modalImgSrc }/>
        { recommend ? <span className="product-rec"><img src="./icons/check.svg" className="checkmark"></img> <span> I recommend this product</span></span> : null }
        { response ? <div className="seller-response"><b>Response From Seller:</b> <p>{response}</p></div> : null}
        <Helpful yesCount={ helpfulness } reviewId={ review_id }/>
      </div>
    </div>
  )
}

export default ReviewTile;