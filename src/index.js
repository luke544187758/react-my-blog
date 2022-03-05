/*
 * @Author: Gao Song
 * @Date: 2022-03-05 01:23:22
 * @LastEditTime: 2022-03-05 01:55:27
 * @LastEditors: Gao Song
 * @Description: 
 * @FilePath: /react-my-blog/src/index.js
 * Copyright © 2022 Gao Song. All rights reserved.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/reset.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

