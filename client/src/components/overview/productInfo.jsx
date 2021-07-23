import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StyleSelector from './styleSelector.jsx';

class ProductInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        --- product info start ---
        <h2>{this.props.info.title}</h2>
        <p>{this.props.info.category}</p>
        <p>{this.props.info.price}</p>
        <StyleSelector styles={this.props.styles}/>
        <p>{this.props.info.overview}</p>
        --- product info end ---
      </div>
    );
  }
}

export default ProductInfo;