import React from 'react';
import ReactDOM from 'react-dom';

const Search = ({searchFilter}) => {
//need to start filter process once there is 3 or more characters
// if no match, show a default "oops, nothing here"
  return (
    <div>
      <input className='search-bar'
        placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        onChange={(e) => searchFilter(e)}
      />
    </div>
  )
}

export default Search;