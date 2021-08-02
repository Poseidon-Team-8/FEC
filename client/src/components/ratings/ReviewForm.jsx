import React, { useState, useEffect, useContext } from 'react';

const ReviewForm = () => {
  const [radio, setRadio] = useState("Yes");
  return (
    <form onSubmit={ () => console.log("form submitted") }>
      <h1>Write Your Review</h1>
      <p>About the [Product Name Here]</p>
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
      <label htmlFor="review-photo-upload">Upload Your Photos: </label>
      <input type="file"
             id="review-photo-upload"
             onChange={ (e) => console.log(e.target.files) } />
      <br/>
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
    </form>
  );
}

export default ReviewForm;
