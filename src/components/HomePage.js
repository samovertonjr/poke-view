import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchios } from '../api';

import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import Header from './Header';

const HomePage = () => {
  const [searchText, setSearchText] = useState('');
  const { status, error, data } = useQuery('pokemon', () =>
    fetchios(`https://poke-sam.herokuapp.com/pokemon`)
  );

  function filterPokemon() {
    return data.filter((poke) => {
      return poke.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }

  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'error') {
    return <p>Error :(</p>;
  }

  return (
    <div className="tc">
      <Header />
      <SearchBox searchChange={handleSearchChange} />
      <Scroll>
        <CardList pokemon={filterPokemon()} />
      </Scroll>
    </div>
  );
};

export default HomePage;
