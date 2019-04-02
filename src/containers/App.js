import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestPokemon } from '../actions/actions';

import HomePage from '../components/HomePage';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchPokemon.searchField,
    pokemon: state.requestPokemon.pokemon,
    isPending: state.requestPokemon.isPending
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestPokemon: () => dispatch(requestPokemon())
  };
};

class App extends Component {
  render() {
    return <HomePage {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
