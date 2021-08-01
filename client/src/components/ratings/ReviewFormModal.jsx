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
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid black;
  width: 80%;
  height: 60%;
  box-shadow: 0 0 50px black
`;

const ReviewFormModal = ({ displayModal, setDisplayModal }) => {
  return (
    <>
      { displayModal ? (
        <Background>
          <Container>
            <ReviewForm />
          </Container>
        </Background>
      ) : null}
    </>
  );
}

export default ReviewFormModal;
