/*
 * @Author: Gao Song
 * @Date: 2022-03-05 01:52:42
 * @LastEditTime: 2022-03-05 05:17:35
 * @LastEditors: Gao Song
 * @Description: 
 * @FilePath: /react-my-blog/src/components/app-footer/index.jsx
 * Copyright © 2022 Gao Song. All rights reserved.
 */

import React, { memo } from 'react'
import logo from '../../assets/img/headshot.jpeg'

const AppFooter = memo(() => {
  return (
      <div className='flex px-5 py-3 bg-gray-900 justify-center items-center'>
        <div className="sm:container">
        <div className='grid grid-cols-10 grid-rows-1 gap-1 divide-x divide-gray-700'>
          <div className='col-span-2 h-40 flex flex-col justify-start items-center'>
            <img src={logo} alt="logo" className='w-32 h-32 rounded mt-4'/>
          </div>
          <div className='col-span-2 h-40 flex flex-col justify-start items-center px-4'>
              <h4 className='text-slate-300 font text-lg mt-4 mb-2'>最新博客</h4>  
              <a href="/#" className="text-gray-400 hover: hover:text-slate-200 text-sm">用户故事 (User story)</a>
              <a href="/#" className="text-gray-400 hover:text-slate-200 text-sm">用户故事 (User story)</a>
              <a href="/#" className="text-gray-400 hover:text-slate-200 text-sm">用户故事 (User story)</a>
          </div>
          <div className='col-span-2 h-40 flex flex-col justify-start items-center px-4'>
            <h4 className='text-slate-300 font text-lg mt-4 mb-2'>联系我</h4>
            <div>
              <p className='text-gray-400 text-sm'>Email: luke544187758@163.com</p>
              <p className='text-gray-400 text-sm'>QQ: 544187758</p>
            </div>
          </div>
          <div className='flex col-span-4 h-40 flex-col justify-start items-center px-4'>
            <h4 className='text-slate-300 font text-lg mt-4 mb-2'>联系我</h4>
            <p className='text-gray-400 text-sm indent-2'>这是我的个人博客、会分享关于编程、写作、思考相关的任何内容，希望可以给来到zheer的人有所帮助...</p>
          </div>
        </div> 
        <div className='flex col-span-10 w-100 h-20 justify-center mt-2 items-start border-t border-gray-700'>
            <p className='text-gray-400 text-sm mt-4'>Copyright © 2020 - 2022 Luke Designed by Luke</p>
          </div>   
        </div>       
      </div>
  )
})

export default AppFooter
