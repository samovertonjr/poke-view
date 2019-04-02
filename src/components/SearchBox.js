import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="ma3">
      <input
        aria-label="Search"
        className="pa3 ba br3 b--white bg-white"
        type="search"
        placeholder="Search 150 Pokemon"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
