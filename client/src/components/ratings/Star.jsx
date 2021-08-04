import React, { useState, useEffect, useContext } from 'react';

const Star = ({ starState, idx, fillUpTo }) => {
  const [star, setStar] = useState(starState);
  const [clicked, setClicked] = useState(false);

  return (
    <img src={ star } onClick={ (e) => fillUpTo(idx) } onMouseEnter={ () => setStar("./icons/star.svg") } onMouseLeave={ () => clicked ? null : setStar("./icons/no-star.svg") }></img>
  );
}

export default Star;
