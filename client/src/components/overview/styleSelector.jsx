import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function StyleSelector(props) {
  if (props.styles.length > 0) {
    return (
      <div>
        <p>Style Selector > {props.styles.length === 0 ? 'Select Style' : props.styles[props.currentStyle].name}</p>
        <ul>
          {props.styles.map((item, index) =>
            <li>
              <img
                key={index}
                index={index}
                src={item.photos[0].thumbnail_url}
                onClick={() => props.updateStyle(index)}>
              </img>
            </li>)}
        </ul>
      </div>
  )} else {
    return (
      <div>Loading style selector</div>
    )
  }
}

export default StyleSelector;