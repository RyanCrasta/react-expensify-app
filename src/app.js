//import './utils.js';
/*
import subtract,{square, add} from './utils.js';

console.log('app.js is running!!!!!!!!!!');

console.log(square(4));

console.log(add(3,10));

console.log(subtract(300,23));
// subtract is default export in utils.js
// default export meh naming not important
// named export meh naming important
*/

/*
import isSenior,{isAdult, canDrink} from './person.js';

console.log(isAdult(30));

console.log(canDrink(2));

console.log(isSenior(9));
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter.js';
import 'react-dates/lib/css/_datepicker.css';

import './firebase/firebase';
 


import configureStore from './store/configureStore.js'
import {startSetExpenses} from './actions/expenses.js'
//import {setTextFilter} from './actions/filters.js'
import getVisibleExpenses from './selectors/expenses.js'

const store = configureStore();

//console.log(store.getState());

//store.dispatch(setTextFilter('gas'));
//store.dispatch(sortByAmount());


const appRoot = document.getElementById('app');

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>      

);
ReactDOM.render(<p>Loading...</p>, appRoot);

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, appRoot);

})



/*
========tp===============
class OldSyntax{
    constructor(){
        this.getGreeting = this.getGreeting.bind(this);
        this.name = 'ryan';
    }

    getGreeting(){
        return `hiii my name is ${this.name}`
    }
}

const old = new OldSyntax();
const greet = old.getGreeting;
console.log(greet());


// ------------

class NewSyntax {
    name = 'astle';
    // arrow fn use this binding of their parent
    getGreeting = () => {
        return `hiii my name is ${this.name}`
    }
}

const newSyn = new NewSyntax();
const greet1 = newSyn.getGreeting;

console.log(greet1());
*/