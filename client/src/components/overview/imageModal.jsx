import React from 'react';

const ImageModal = (props) => {
  return (
    <>{props.modal &&
      <>
        <div className="photo-modal-background" onClick={props.toggleModal}></div>
        <div
          className={props.zoom ? "photo-modal-container zoom" : "photo-modal-container"}
          onClick={props.toggleZoom}
        >
            {props.children}
        </div>
      </>
    }</>);
}

export default ImageModal;