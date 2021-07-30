import React from 'react';

const ImageModal = (props) => {
  return (
    <>{props.show &&
      <>
        <div className="image-modal-background" onClick={props.onClick}></div>
        <div className="image-modal-container" onClick={props.onClick}>
          {props.children}
        </div>
      </>
    }</>);
}

export default ImageModal;