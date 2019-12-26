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
  listCart:[],
  totalMoney: 0
}

const reducer = (state=defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        listCart: state.listCart.push(action.item),
        totalMoney: state.listCart.reduce((acumulator, current) => acumulator + current.price)
      };
    default:
      break;
  }
}

const store = createStore(reducer);