import React, { useState, useEffect, useContext } from 'react';

const ReviewForm = () => {
  return (
    <>
      <form onSubmit={ () => console.log("form submitted") }>
        <h1>Write Your Review</h1>
        <p>About the [Product Name Here]</p>

        <p>Do you recommend this product></p>
        <input type="radio" id="product-rec-yes" value="Yes"></input><br></br>
        <input type="radio" id="product-rec-no" value="No"></input><br></br>
        <label htmlFor="review-htmlForm-summary">Review Summary: </label>
        <input type="text" id="review-htmlForm-summary" placeholder="Example: Best purchase ever!"></input><br></br>
        <label htmlFor="review-htmlForm-body">Review Body: </label>
        <textarea type="text" id="review-htmlForm-body" placeholder="Why did you like the product or not?" required></textarea><br></br>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" placeholder="Example: jackson11!" required></input><br></br>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" placeholder="Example: jackson11@email.com" required></input>
        <button type="submit">Submit Review</button>
      </form>
    </>
  );
}

export default ReviewForm;
