import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import App from './App';

ReactDOM.render(
  <CounterWithCustomHook />,
  document.getElementById('root')
);


