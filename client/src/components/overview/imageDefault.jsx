import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Default(props) {
  if (props.styles.length === 0) {
    return <div>Loading Gallery</div>
  } else {
    let photos = props.styles[props.currentStyle].photos;
    return (
      <div className="side-images">
        <div className="side-images-child">
          {photos.map((photo, index) =>
            <img
              className="thumbnail"
              src={photo.url}
              key={index}
              id={index}
            ></img>)}
        </div>
          <img className="main side-images-child" src={photos[0].url}></img>
      </div>
    )
  }
}

export default Default;