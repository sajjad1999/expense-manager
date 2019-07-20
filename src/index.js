import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/router'
import * as serviceWorker from './serviceWorker';
import {addExpense} from './actions/expenses'
import {getVisibleExpenses} from './selector/expenses'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import moment from 'moment'
import './style/index.css'

const store = configureStore()
store.dispatch(addExpense({description: 'water bill',amount: 4580,createdAt: 500, note: 'fd df df d df'}))
store.dispatch(addExpense({description: 'pay bill',amount: 460,createdAt: 360085555}))
store.dispatch(addExpense({description: 'buy coffee',amount: 250,createdAt: 1000}))
console.log(getVisibleExpenses(store.getState().expenses,store.getState().filters))



ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
