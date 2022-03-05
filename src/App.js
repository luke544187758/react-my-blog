/*
 * @Author: Gao Song
 * @Date: 2022-03-05 01:23:22
 * @LastEditTime: 2022-03-05 05:26:21
 * @LastEditors: Gao Song
 * @Description: 
 * @FilePath: /react-my-blog/src/App.js
 * Copyright © 2022 Gao Song. All rights reserved.
 */
import React, { memo } from 'react'

import { useRoutes } from "react-router-dom";

import './App.css'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import routes from './router'


const App = memo(() => {
  const elements = useRoutes(routes)
  return (
    <div>
      <AppHeader />
        {elements}
      <AppFooter/>
    </div>
  )
})

export default App