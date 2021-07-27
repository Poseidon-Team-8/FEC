import React from 'react';
import axios from 'axios';

import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

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
        id: 17069,
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
      <div className="widget-container">
        <div className="left-col-container">
          <RatingBreakdown />
          <ProductBreakdown />
        </div>
        <div className="right-col-container">
          <ReviewList reviews={ this.state.reviews }/>
        </div>
      </div>
    )
  }
}

export default Ratings;