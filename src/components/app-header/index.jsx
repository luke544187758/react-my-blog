/*
 * @Author: Gao Song
 * @Date: 2022-03-05 01:30:56
 * @LastEditTime: 2022-03-05 09:58:30
 * @LastEditors: Gao Song
 * @Description: 
 * @FilePath: /react-my-blog/src/components/app-header/index.jsx
 * Copyright © 2022 Gao Song. All rights reserved.
 */

import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'

import {headerLinks} from '../../common/local-data'
import SvgIcon from '../svg-icon'
import './index.css'

const AppHeader = memo(() => {

  const showSelectItem = (item,index) =>{
      return (
        <NavLink to={item.link} className='flex items-center px-4'>
            <SvgIcon path={item.path}/>
                &nbsp;{item.title}  
        </NavLink>
      )
  }

  return (
    <nav className='flex items-center px-5 py-3 h-20 bg-gray-900 justify-around'>
        <div className="text-gray-200 flex items-center space-x-16">
          <h2 className='text-teal-400 font-semibold text-3xl'>Blog</h2>
            <div className='select-list'>
                {
                  headerLinks.map((item,index)=>{
                    return (
                      <div key={item.title} className='select-item'>
                        {showSelectItem(item,index)}
                      </div>
                    )
                  })
                }
            </div>
            
        </div>
        <div className="relative text-white">
              <input type="text" className="rounded ml-8 text-sm bg-gray-900 border border-gray-600 placeholder-gray-400 w-72 px-3 py-2" 
                      placeholder='搜索文章'/>  
                      <div className="absolute top-0 right-0 flex items-center h-full">
                          <div className="border border-gray-600 rounded text-xs text-gray-400 px-2 mr-3"> / </div>
                      </div>
        </div>
        
      </nav>
  )
})

export default AppHeader