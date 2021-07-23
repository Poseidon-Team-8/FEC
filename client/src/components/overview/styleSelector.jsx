import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class StyleSelector extends React.Component {

  constructor(props) {
    super(props);
  }

  // receiving this.props.styles, so map it out and render images

  render() {
    return (
      <div>
        --- style selector start ---
        <ul>
        {this.props.styles.map((item, index) => <li><img key={index} index={index} src={item.photos[0].thumbnail_url}></img></li>)}
        </ul>
        --- style selector end ---
      </div>
    )
  }
}

export default StyleSelector;