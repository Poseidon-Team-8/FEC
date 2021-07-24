import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function StyleSelector(props) {
  return (
    <div>
      --- style selector start ---
      <p>Style Selector > {props.currentStyle === -1 ? 'Select Style' : props.styles[props.currentStyle].name}</p>
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
      --- style selector end ---
    </div>
  )
}

export default StyleSelector;