import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import ReviewFormRating from './ReviewFormRating.jsx';
const PhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  width: 80%;
`;

const ReviewForm = ({ setDisplayModal }) => {
  const [radio, setRadio] = useState("Yes");
  const [photos, setPhotos] = useState([]);

  const submitForm = (e) => {
    // make post request and clear inputs
    e.preventDefault();
    setDisplayModal(prev => !prev);
    console.log("form submitted");
  }

  const cancelSubmit = () => {
    setDisplayModal(prev => !prev);
  }

  return (
    <form onSubmit={ (e) => submitForm(e) }>
      <h1>Write Your Review</h1>
      <p>About the [Product Name Here]</p>

      <ReviewFormRating />
      <p>Do you recommend this product</p>
      <label>Yes</label>
      <input type="radio"
             checked={radio === "Yes"}
             value="Yes"
             onChange={ (e) => { setRadio(e.target.value) }}
              />
      <br/>
      <label>No</label>
      <input type="radio"
             checked={radio === "No"}
             id="product-rec-no"
             value="No"
             onChange={ (e) => { setRadio(e.target.value) }}
             />
      <br/>
      <label htmlFor="review-htmlForm-summary">Review Summary: </label>
      <input type="text"
             id="review-htmlForm-summary"
             placeholder="Example: Best purchase ever!"
             maxLength={ 60 } />
      <br/>
      <label htmlFor="review-htmlForm-body">Review Body: </label><br></br>
      <textarea type="text"
                id="review-htmlForm-body"
                placeholder="Why did you like the product or not?"
                maxLength={ 1000 } required />
      <br/>
      <label htmlFor="photo-files">Upload Your Photos: </label>
      <input type="file"
             id="photo-files"
             multiple
             onChange={ (e) => {setPhotos(Array.from(e.target.files)), console.log(Array.from(e.target.files))}} />
      <br/>
      <PhotoContainer>
        {
          photos ? photos.map( (photo, idx) => {
            let src = URL.createObjectURL(photo);
            return <img src={ src } style={{"height": "80px", "width": "80px"}}/>
          }) : null
        }
      </PhotoContainer>
      <label htmlFor="username">Username: </label>
      <input type="text"
             id="username"
             placeholder="Example: jackson11!"
             required />
      <br/>
      <label htmlFor="email">Email: </label>
      <input type="email"
             id="email"
             placeholder="Example: jackson11@email.com"
             required />
      <br/>
      <button type="submit">Submit Review</button>
      <button onClick={ () => cancelSubmit() }>Cancel</button>
    </form>
  );
}

export default ReviewForm;
