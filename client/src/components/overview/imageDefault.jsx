import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Default(props) {
  if (props.styles.length === 0) {
    return <div>Loading Gallery</div>
  } else {
    let photos = props.styles[props.currentStyle].photos;
    return (
      <div>
        {Thumbnails(photos).map((item, index) =>
          <img
          className="thumbnail"
          src={item}
          key={index}
          id={index}
          ></img>)}
          <img className="main" src={photos[0].url}></img>
      </div>
    )
  }
}

function Thumbnails(photos) {
  let arr = []
  for (let photo of photos) {
    arr.push(photo.url)
  }
  return arr
}

export default Default;