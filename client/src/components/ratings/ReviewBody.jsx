import React, { useState, useContext } from 'react';


const ReviewBody = ({ body }) => {
  const [preview, setPreview] = useState(true);
  const [fullText, setFullText] = useState(false);
  const altView = (body.length > 250);
  return (
    <>
    {
      altView ?
      (
        null
      ) :
      (
        <p>{ body }</p>
      )
    }
    </>
  );
}

export default ReviewBody;