import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

// "homepage": "https://github.com/smahsru/protfolio",
//         "predeploy":"npm run build",
//     "deploy":"gh-pages -d build",
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/base'>
      <Routes>

    <Route element={<App  />} exact path='/'/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


