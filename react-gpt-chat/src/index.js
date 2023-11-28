import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './common/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
      </Routes>
      {/* <App />, */}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);