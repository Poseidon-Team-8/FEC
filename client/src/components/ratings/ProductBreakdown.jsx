import React, { useState, useContext } from 'react';

let ProductBreakdown = ({ characteristics }) => {

  console.log(characteristics);
  const { Comfort, Fit, Length, Quality } = characteristics;
  return (
    <div>
      Product Breakdown Goes Here!
    </div>
  )
}

export default ProductBreakdown;