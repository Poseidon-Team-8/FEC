import React from 'react';

function Default(props) {
  if (props.styles.length === 0) {
    return <div>Loading Gallery</div>
  } else {
    let photos = props.styles[props.currentStyle].photos;
    return (
      <div className="image-gallery">
        <div className="image-container">
          <img className="main" src={photos[props.image[props.currentStyle]].url}></img>
          <div className="side-images">
            {photos.map((photo, index) =>
              <img
              className={props.image[props.currentStyle]=== index ? "thumbnail selected-thumb": "thumbnail"}
              src={photo.url}
              key={index}
              onClick={() =>
                props.updateImage(props.currentStyle, index)}
                ></img>)}
          </div>
        </div>
        {props.children}
      </div>
    )
  }
}

export default Default;