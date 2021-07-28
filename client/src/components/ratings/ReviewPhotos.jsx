import React, { useState, useContext } from 'react';

const ReviewPhotos = ({ photos }) => {
  return (
    <div className="review-photo-container">
      {
        photos.map( (photo) => {
          return <img src={ photo.url } className="review-photo" key={ photo.id }></img>
        })
      }
    </div>
  );
}

export default ReviewPhotos;