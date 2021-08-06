import React, { useState, useContext } from 'react';


const ReviewBody = ({ body }) => {
  const [showPreview, setShowPreview] = useState(true);
  const altView = (body.length > 250);

  if (altView) {
    const preview = body.slice(0, 250);
    if (showPreview) {
      return (
        <>
          <p>{ preview }...</p>
          <a className="extend-text" onClick={ () => setShowPreview(false)}>Show more</a>
        </>
      );
    } else {
      return (
        <div style={{"overflow-wrap": "anywwhere"}}>
          <p>{ body }</p>
          <a className="extend-text" onClick={ () => setShowPreview(true)}>Show less</a>
        </div>
      )
    }
  } else {
    return (
      <p>{ body }</p>
    );
  }
}

export default ReviewBody;