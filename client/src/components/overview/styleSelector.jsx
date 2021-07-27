import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function StyleSelector(props) {
  if (props.styles.length > 0) {
    return (
      <div>
        <p><b>Style</b> > {props.styles.length === 0 ? 'Select Style' : props.styles[props.currentStyle].name}</p>
          {props.styles.map((item, index) =>
            <img
              className="style"
              key={index}
              index={index}
              src={item.photos[0].thumbnail_url}
              onClick={() => props.updateStyle(index)}>
            </img>
          )}
      </div>
  )} else {
    return (
      <div>Loading style selector</div>
    )
  }
}

export default StyleSelector;