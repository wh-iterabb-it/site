import { createStore as reduxCreateStore } from 'redux';
import * as actionTypes from './actions';
import {generate} from './utils';

const initialState = {
  length: 8,
  options: {
    symbols: true,
    lowercase: true,
    uppercase: true,
    numbers: true,
    noamb: true,
    nosimilar: true
  },
  password: 'password'
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GENERATE_PASSWORD:
      const newPassword = generate(state.length, state.options);
      return {
        ...state,
        password: newPassword
      }
    case actionTypes.SET_LENGTH_VALUES:
    return {
      ...state,
      length: action.payload
    }
    default:
      return state;
  }
}

const createStore = () => reduxCreateStore(reducer, initialState);

export default createStore;
