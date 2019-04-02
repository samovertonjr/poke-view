import { apiCall } from '../api/api';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_POKEMON_PENDING,
  REQUEST_POKEMON_SUCCESS,
  REQUEST_POKEMON_FAILED
} from '../constants/constants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
});

export const requestPokemon = () => (dispatch) => {
  dispatch({ type: REQUEST_POKEMON_PENDING });
  return apiCall('https://poke-sam.herokuapp.com/pokemon')
    .then((data) => dispatch({ type: REQUEST_POKEMON_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_POKEMON_FAILED, payload: error }));
};
