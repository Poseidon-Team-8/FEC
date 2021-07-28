import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  justify-content: center;
  align-items: center;
`
const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 10;
`

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  background: #000;
`

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
