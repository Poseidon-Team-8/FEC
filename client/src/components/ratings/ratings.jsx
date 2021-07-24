import React from 'react';
import axios from 'axios';

import ReviewList from './ReviewList.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  getReviews() {
    axios.get('/reviews', {
      headers: {
        id: this.props.productId,
        reqtype: 'general'
      }
    })
      .then( (res) => {
        this.setState({
          reviews: res.data.results
        });
      })
      .catch( (err) => {
        console.log("Error Fetching Reviews");
      })
  }

  componentDidMount() {
    this.getReviews();
  }

  render() {
    return (
      <div>

        <ReviewList reviews={ this.state.reviews }/>
      </div>
    )
  }
}

export default Ratings;