import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function StyleSelector(props) {
  if (props.styles.length > 0) {
    return (
      <div>
        <p>Style > <b>{props.styles[props.currentStyle].name}</b></p>
          {props.styles.map((item, index) =>
          <div className="style-selector">
            <img
              className={props.currentStyle === index ? 'selected style' : 'style'}
              key={index}
              index={index}
              src={item.photos[0].thumbnail_url}
              onClick={() => props.updateStyle(index)}
            ></img>
            <div className="overlay style">
              <img
                src="https://static.thenounproject.com/png/33609-200.png"
                className="overlay style"
                ></img>
            </div>
          </div>
          )}
      </div>
  )} else {
    return (
      <div>Loading style selector</div>
    )
  }
}

export default StyleSelector;