import React from 'react';
import ImageModal from './imageModal.jsx'


function Default(props) {
  let photos = props.styles[props.styleIndex].photos;
  return (
    <div id="ImageGallery" className="image-gallery">
      <div className="image-container">
      <img
        loading="lazy"
        className="main"
        src={photos[props.image[props.styleIndex]].url}
        onClick={() => props.toggleModal()}></img>

        <ImageModal
          modal={props.modal}
          toggleModal={props.toggleModal}
          zoom={props.zoom}
          toggleZoom={props.toggleZoom}>
            <img loading="lazy" className="modal-img" src={photos[props.image[props.styleIndex]].url}></img>
        </ImageModal>

        <div className="side-images">
          {photos.map((photo, index) =>
            <img
            loading="lazy"
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