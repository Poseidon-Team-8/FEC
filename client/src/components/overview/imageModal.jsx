import React from 'react';

const ImageModal = (props) => {
  return (
    <>{props.modal &&
      <>
        <div className="photo-modal-background" onClick={props.toggle}></div>
        <div className="photo-modal-container">
          {props.children}
        </div>
      </>
    }</>);
}

export default ImageModal;