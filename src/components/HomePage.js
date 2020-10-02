import React from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import Header from './Header';
import { useQuery } from 'react-query';
import { fetchios } from '../api';

import '../containers/App';

const MainPage = (props) => {
  const { status, error, data } = useQuery('pokemon', () =>
    fetchios(`https://poke-sam.herokuapp.com/pokemon`)
  );

  console.log(data);
  const { onSearchChange, isPending } = props;
  const filterPokemon = () => {
    return data.filter((poke) => {
      return poke.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  return (
    <div className="tc">
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        {isPending ? <h1>Loading</h1> : <CardList pokemon={[]} />}
      </Scroll>
    </div>
  );
};

export default MainPage;
