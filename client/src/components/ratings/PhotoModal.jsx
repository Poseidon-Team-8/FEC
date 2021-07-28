import React, { useState, useContext } from 'react';

const PhotoModal = ({ displayModal, setDisplayModal, imgSrc }) => {
  return (
    <>
      { displayModal ? (
        <div className="photo-modal-background" onClick={ () => setDisplayModal(false) }>
          <div className="photo-modal-container">
            <img src={ imgSrc } className="modal-img"></img>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default PhotoModal;
