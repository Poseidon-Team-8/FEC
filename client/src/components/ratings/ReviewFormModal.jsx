import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import ReviewForm from './ReviewForm.jsx';

const Background = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: auto;
  margin-right: auto;
  width: 70vw;
  height: 80vh;
  opacity: 100%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 50px black;
  background-color: #fefefe;
  cursor: pointer;
  z-index: 21;
  display: flex;
  align-content: center;
`;

const ReviewFormModal = ({ productName, productId, meta, displayModal, setDisplayModal }) => {
  return (
    <>
      { displayModal ? (
        <Background>
          <Container>
            <ReviewForm productName={productName} productId={productId} meta={meta} setDisplayModal={ setDisplayModal }/>
          </Container>
        </Background>
      ) : null}
    </>
  );
}

export default ReviewFormModal;
