import React from 'react';
import ReactDOM from 'react-dom';

const Search = ({searchFilter}) => {

  return (
    <div>
      <input placeHolder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        onChange={(e) => searchFilter(e)}
      />
    </div>
  )
}

export default Search;