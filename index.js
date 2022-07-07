import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './redux/store'
import { fetchPosts } from './redux/action'
import App from './App'

//Dispatch the fetchPosts() before our root component renders
store.dispatch(fetchPosts())
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
