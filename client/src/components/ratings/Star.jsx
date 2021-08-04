import React, { useState, useEffect, useContext } from 'react';

const Star = () => {
  const [star, setStar] = useState("./icons/no-star.svg");

  return (
    <img src={ star } onMouseEnter={ () => setStar("./icons/star.svg") } onMouseLeave={ () => setStar("./icons/no-star.svg") }></img>
  );
}

export default Star;
