import React, { useState, useContext } from 'react';

const ReviewPhotos = ({ photos, toggleModal }) => {
  return (
    <div className="review-photo-container">
      {
        photos.map( (photo) => {
          return <img src={ photo.url } className="review-photo" key={ photo.id } onClick={(e) => toggleModal(e)}></img>
        })
      }
    </div>
  );
}

export default ReviewPhotos;