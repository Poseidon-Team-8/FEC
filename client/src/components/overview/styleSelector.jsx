import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class StyleSelector extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        --- style selector start ---
        {/* <p>Style Selector > {this.props.currentStyle ? -1 'Select Style' : this.props.styles[currentStyle].name}</p> */}
        <ul>
        {this.props.styles.map((item, index) => <li><img key={index} index={index} src={item.photos[0].thumbnail_url}
        // onClick={() => {this.setState({index, name: this.props.styles[index].name })}} ***selecting a style should update currentStyle in overview***
        ></img></li>)}
        </ul>
        --- style selector end ---
      </div>
    )
  }
}

export default StyleSelector;