import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import App from './App';

configure({
  // https://youtu.be/gXy1H3yZtSA?t=1823 
  // Good practice for default batching
  reactionScheduler: (fn) => {
    setTimeout(fn, 1)
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
