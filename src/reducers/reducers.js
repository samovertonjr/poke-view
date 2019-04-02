import {
  CHANGE_SEARCHFIELD,
  REQUEST_POKEMON_PENDING,
  REQUEST_POKEMON_SUCCESS,
  REQUEST_POKEMON_FAILED
} from '../constants/constants';

const initialStateSearch = {
  searchField: ''
};

export const searchPokemon = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD: {
      return { ...state, searchField: action.payload };
    }
    default:
      return state;
  }
};

const initialStatePokemon = {
  pokemon: [],
  isPending: false
};

export const requestPokemon = (state = initialStatePokemon, action = {}) => {
  switch (action.type) {
    case REQUEST_POKEMON_PENDING: {
      return { ...state, isPending: true };
    }
    case REQUEST_POKEMON_SUCCESS: {
      return { ...state, pokemon: action.payload, isPending: false };
    }

    case REQUEST_POKEMON_FAILED: {
      return { ...state, error: action.payload };
    }

    default:
      return state;
  }
};
