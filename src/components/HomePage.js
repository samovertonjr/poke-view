import React, { Component } from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import Header from './Header';

import '../containers/App';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestPokemon();
  }

  filterPokemon = () => {
    return this.props.pokemon.filter((poke) => {
      return poke.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { onSearchChange, isPending } = this.props;
    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>{isPending ? <h1>Loading</h1> : <CardList pokemon={this.filterPokemon()} />}</Scroll>
      </div>
    );
  }
}

export default MainPage;
