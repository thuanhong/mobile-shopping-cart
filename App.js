import React from 'react';
import AppContainer from './src/Route'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {removeByKey} from './src/utils/SubFunction'

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
  totalProduct: 0,
  history: [
    {
        "id": "ORD5",
        "date": "10/11/2019 09:45",
        "status": "Pending",
        "total": "503"
    },
    {
        "id": "ORD4",
        "date": "10/11/2019 15:21",
        "status": "Pending",
        "total": "352"
    },
    {
        "id": "ORD3",
        "date": "08/10/2019 12:17",
        "status": "Delivered",
        "total": "436"
    },
    {
        "id": "ORD2",
        "date": "20/09/2019 09:30",
        "status": "Delivered",
        "total": "1054"
    },
    {
        "id": "ORD1",
        "date": "19/09/2019 10:04",
        "status": "Delivered",
        "total": "532"
    }
  ]
};


const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
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
        ...state,
        listCart: removeByKey(state.listCart, action.id),
        totalMoney: state.totalMoney - action.price,
        totalProduct: state.totalProduct - action.amount
      }
    case 'CHECKOUT':
      return {
        history: [
          {
            "id": `ORD${state.history.length + 1}`,
            "date": action.date,
            "status": 'Pending',
            "total": action.total
          }
        ].concat(state.history),
        listCart:{},
        totalMoney: 0,
        totalProduct: 0,
      }
    default:
      break;
  }
  return state
}

const store = createStore(reducer);