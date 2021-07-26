import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Default(props) {
  if (props.styles.length === 0) {
    return <div>Loading Gallery</div>
  } else {
    let photos = props.styles[props.currentStyle].photos;
    return (
      // iterate through length of photos indices
      <img src={photos[0].url}></img>
    )
  }
}

export default Default;