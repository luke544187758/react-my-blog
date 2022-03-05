/*
 * @Author: Gao Song
 * @Date: 2022-03-05 01:31:30
 * @LastEditTime: 2022-03-05 06:57:56
 * @LastEditors: Gao Song
 * @Description: 
 * @FilePath: /react-my-blog/src/components/svg-icon/index.jsx
 * Copyright © 2022 Gao Song. All rights reserved.
 */

import React, { memo } from 'react'

const SvgIcon = memo((props) => {
    const {path} = props
   return (
    //  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20" >
    //          <path d={path}/>
    //  </svg>
     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-white stroke-current" viewBox="0 0 24 24">
     <path  d={path} />
   </svg>
   )
 })
 
 export default SvgIcon
