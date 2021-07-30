import React from 'react';
import axios from 'axios';

import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      meta: undefined
    }
  }

  getReviews() {
    axios.get('/reviews', {
      headers: {
        id: 18029,
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

  getMetaData() {
    axios.get('/meta', {
      headers: {
        id: 18029
      }
    })
    .then( (res) => {
      this.setState({
        meta: res.data
      })
    })
    .catch( (err) => {
      console.log("Error Fetching Meta Data");
    })
  }

  componentDidMount() {
    this.getReviews();
    this.getMetaData();
  }

  render() {
    if (!this.state.reviews || !this.state.meta) return null;
    return (
      <>
        <div className="widget-container">
          <div className="left-col-container">
            <RatingBreakdown ratings={ this.state.meta.ratings} recommended={ this.state.meta.recommended}/>
            <ProductBreakdown characteristics={ this.state.meta.characteristics }/>
          </div>
          <div className="right-col-container">
            <ReviewList reviews={ this.state.reviews }/>
          </div>
        </div>
        <div style={{ "marginBottom": "5em"}}>

        </div>
      </>
    )
  }
}

export default Ratings;