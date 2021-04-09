import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { connect } from 'react-redux';

it.only('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(connect(<App />), div);
});
