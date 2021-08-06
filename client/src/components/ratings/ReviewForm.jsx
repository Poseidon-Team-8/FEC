import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import ReviewFormRating from './ReviewFormRating.jsx';
import ReviewFormCharacteristics from './ReviewFormCharacteristics.jsx';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around;
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  width: 80%;
`;

const ratingExplanation = {
  1: "Poor",
  2: "Fair",
  3: "Average",
  4: "Good",
  5: "Great"
}

const ReviewForm = ({ meta, setDisplayModal }) => {
  const [rating, setRating] = useState(0);
  const [productRec, setProductRec] = useState("Yes");
  const [bodyText, setBodyText] = useState("");
  const [photos, setPhotos] = useState([]);

  const [sizeRating, setSizeRating] = useState(0);
  const [widthRating, setWidthRating] = useState(0);
  const [comfortRating, setComfortRating] = useState(0);
  const [qualityRating, setQualityRating] = useState(0);
  const [lengthRating, setLengthRating] = useState(0);
  const [fitRating, setFitRating] = useState(0);

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
    <FormContainer>

      <form onSubmit={ (e) => submitForm(e) } className="review-form">
        <h1>Write Your Review</h1>
        <h4>About the [Product Name Here]</h4>

        <b><p>Select Rating</p></b>
        <ReviewFormRating rating={rating} setRating={setRating} />
        { <small>{ ratingExplanation[rating] }</small> }

        <b><p>Do you recommend this product?</p></b>
        <label>Yes</label>
        <input type="radio"
              checked={productRec === "Yes"}
              value="Yes"
              onChange={ (e) => { setProductRec(e.target.value) }}
                />
        <label>No</label>
        <input type="radio"
              checked={productRec === "No"}
              id="product-rec-no"
              value="No"
              onChange={ (e) => { setProductRec(e.target.value) }}
              />
        <br/>
        {
          Object.keys(meta.characteristics).map( characteristic => {
            return (
              <div>
                {
                  (characteristic === "Size") ? <ReviewFormCharacteristics characteristic={ characteristic } rating={sizeRating} setRating={setSizeRating}/> :
                  (characteristic === "Width") ? <ReviewFormCharacteristics characteristic={ characteristic } rating={widthRating} setRating={setWidthRating}/> :
                  (characteristic === "Comfort") ? <ReviewFormCharacteristics characteristic={ characteristic } rating={comfortRating} setRating={setComfortRating}/> :
                  (characteristic === "Quality") ? <ReviewFormCharacteristics characteristic={ characteristic } rating={qualityRating} setRating={setQualityRating}/> :
                  (characteristic === "Length") ? <ReviewFormCharacteristics characteristic={ characteristic } rating={lengthRating} setRating={setLengthRating}/> :
                  (characteristic === "Fit") ? <ReviewFormCharacteristics characteristic={ characteristic } rating={fitRating} setRating={setFitRating}/> : null
                }
              </div>
            )
          })
        }
        <label htmlFor="review-htmlForm-summary"><b>Review Summary:  </b></label>
        <input type="text"
              id="review-htmlForm-summary"
              placeholder="Example: Best purchase ever!"
              maxLength={ 60 } />
        <br/>
        <label htmlFor="review-htmlForm-body"><b>Review Body: </b></label><br></br>
        <input type="text"
                  id="review-htmlForm-body"
                  placeholder="Why did you like the product or not?"
                  onChange={ (e) => { setBodyText(e.target.value)} }
                  maxLength={ 1000 } required />
        <br/>
        {
          (50 - bodyText.length) <= 0 ? <small>Minimum Reached</small> : <small>Minimum Required Characters Left: { 50 - bodyText.length }</small>
        }
        <br/>
        <label htmlFor="photo-files"><b>Upload Your Photos: </b></label>
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
        <label htmlFor="username"><b>Username: </b></label>
        <input type="text"
              id="username"
              placeholder="Example: jackson11!"
              maxLength={ 60 }
              required />
        <br/>
        <small>For privacy reasons, do not use your full name or email address</small>
        <br/>
        <label htmlFor="email"><b>Email: </b></label>
        <input type="email"
              id="email"
              placeholder="Example: jackson11@email.com"
              required />
        <br/>
        <small>For authentication reasons, you will not be emailed</small>
        <br/>
        <button type="submit">Submit Review</button>
        <button onClick={ () => cancelSubmit() }>Cancel</button>
      </form>
    </FormContainer>
  );
}

export default ReviewForm;
