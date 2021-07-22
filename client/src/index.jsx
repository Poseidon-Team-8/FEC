import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  getProducts() {
    axios.get('/asdf')
      .then( (res) => {
        console.log(res.data);
      });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <h1>Hello from client</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));