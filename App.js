import React from 'react';
import AppContainer from './src/Route'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}

const defaultState = {
  listCart:{},
  totalMoney: 0,
  totalProduct: 0
};


const removeByKey = (object, deleteKey) => {
  return Object.keys(object)
    .filter(key => key !== deleteKey)
    .reduce((result, current) => {
      result[current] = object[current];
      return result;
    }, {});
};


const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        listCart: {...state.listCart, [action.item.idProduct]: action.item},
        totalMoney: state.totalMoney + action.item.price,
        totalProduct: state.totalProduct + 1
      };
    case "ADD":
      return {
        ...state,
        totalMoney: state.totalMoney + action.price,
        totalProduct : state.totalProduct + 1
      }
    case "SUB":
      return {
        ...state,
        totalMoney: state.totalMoney - action.price,
        totalProduct : state.totalProduct - 1
      }
    case 'DELETE':
      return {
        listCart: removeByKey(state.listCart, action.id),
        totalMoney: state.totalMoney - action.price,
        totalProduct: state.totalProduct - action.amount
      }
    default:
      break;
  }
  return state
}

const store = createStore(reducer);