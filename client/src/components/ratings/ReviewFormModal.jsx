import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 20;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: auto;
  margin-right: auto;
  max-width: 80vw;
  max-height: 80vh;
  opacity: 100%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 50px black;
  background-color: #333;
  cursor: pointer;
  z-index: 21;
  display: inline-flex;
`;

const ReviewFormModal = ({ displayModal, setDisplayModal }) => {
  return (
    <>
      { displayModal ? (
        <Background onClick={ () => setDisplayModal(false) }>
          <Container>
            <h1>Test</h1>
          </Container>
        </Background>
      ) : null}
    </>
  );
}

export default ReviewFormModal;
