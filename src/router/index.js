/*
 * @Author: Gao Song
 * @Date: 2022-03-05 05:22:20
 * @LastEditTime: 2022-03-05 05:24:20
 * @LastEditors: Gao Song
 * @Description: 
 * @FilePath: /react-my-blog/src/router/index.js
 * Copyright © 2022 Gao Song. All rights reserved.
 */

import About from "../pages/about"
import Category from "../pages/category"
import Home from "../pages/home"
import Tags from "../pages/tags"

const routes = [
    {
        path: '/index',
        element: <Home />
    },
    {
        path:'/category',
        element: <Category />
    },
    {
        path:'/tags',
        element: <Tags />
    },
    {
        path: '/about',
        element: <About/>
    }
]
export default routes