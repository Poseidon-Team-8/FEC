import React from 'react';
import ImageModal from './imageModal.jsx'


function Default(props) {
  if (!props.styles.length) {
    return null
  }
  let photos = props.styles[props.styleIndex].photos;
  return (
    <div id="ImageGallery" className="image-gallery">
      <div className="image-container">
      <img
        className="main"
        src={photos[props.image[props.styleIndex]].url}
        onClick={() => props.toggleModal()}></img>

        <ImageModal
          modal={props.modal}
          toggleModal={props.toggleModal}
          zoom={props.zoom}
          toggleZoom={props.toggleZoom}>
            <img className="modal-img" src={photos[props.image[props.styleIndex]].url}></img>
        </ImageModal>

        <div className="side-images">
          {photos.map((photo, index) =>
            <img
            className={props.image[props.styleIndex]=== index ? "thumbnail selected-thumb": "thumbnail"}
            src={photo.url}
            key={index}
            onClick={() =>
              props.updateImage(props.styleIndex, index)}
              ></img>)}
        </div>
      </div>
      {props.children}
    </div>
  )
}

export default Default;