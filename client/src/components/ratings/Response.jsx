import React, { useState, useContext } from 'react';

const Response = ({ response }) => {
  return (
    <div className="response-container">
      <p>Response from seller:</p>
      <p>{ response }</p>
    </div>

  );
}

export default Response;