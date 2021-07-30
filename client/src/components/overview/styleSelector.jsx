import React from 'react';

function StyleSelector(props) {
  if (props.styles.length > 0) {
    return (
      <div className="style-selector">
        <p className="style-name">Style > <b>{props.styles[props.currentStyle].name}</b></p>
          <div className="styles-grid">
            {props.styles.map((item, index) =>
              <img
                className={props.currentStyle === index ? 'selected-style style-thumbnail' : 'style-thumbnail'}
                key={index}
                index={index}
                src={item.photos[0].thumbnail_url}
                onClick={() => props.updateStyle(index)}
                ></img>
              //   <img
              // src="https://static.thenounproject.com/png/33609-200.png"
              // className="overlay"
              // ></img>
            )}
          </div>
          {props.children}

      </div>
  )} else {
    return (
      <div>Loading style selector</div>
    )
  }
}

export default StyleSelector;