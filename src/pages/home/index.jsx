/*
 * @Author: Gao Song
 * @Date: 2022-03-05 05:18:39
 * @LastEditTime: 2022-03-05 09:53:53
 * @LastEditors: Gao Song
 * @Description: 
 * @FilePath: /react-my-blog/src/pages/home/index.jsx
 * Copyright © 2022 Gao Song. All rights reserved.
 */

import React, { memo } from 'react'
import SvgIcon from '../../components/svg-icon';
import logo from '../../assets/img/headshot.jpeg'

const blogs = [

  {
    title: "你真的理解什么是财富自由吗?",
    content:"正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至根本从来就没有想过，只是打架都那么做而已...",
    url:"https://unsplash.it/100/100?image=1005",
    avatar:"https://unsplash.it/800/450?image=1005",
  },
  {
    title: "你真的理解什么是财富自由吗?",
    content:"正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至根本从来就没有想过，只是打架都那么做而已...",
    url:"https://unsplash.it/100/100?image=1005",
    avatar:"https://unsplash.it/800/450?image=1005",
  },
  {
    title: "你真的理解什么是财富自由吗?",
    content:"正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至根本从来就没有想过，只是打架都那么做而已...",
    url:"https://unsplash.it/100/100?image=1005",
    avatar:"https://unsplash.it/800/450?image=1005",
  },
  {
    title: "你真的理解什么是财富自由吗?",
    content:"正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至根本从来就没有想过，只是打架都那么做而已...",
    url:"https://unsplash.it/100/100?image=1005",
    avatar:"https://unsplash.it/800/450?image=1005",
  },
  {
    title: "你真的理解什么是财富自由吗?",
    content:"正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至根本从来就没有想过，只是打架都那么做而已...",
    url:"https://unsplash.it/100/100?image=1005",
    avatar:"https://unsplash.it/800/450?image=1005",
  },
  {
    title: "你真的理解什么是财富自由吗?",
    content:"正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至根本从来就没有想过，只是打架都那么做而已...",
    url:"https://unsplash.it/100/100?image=1005",
    avatar:"https://unsplash.it/800/450?image=1005",
  },
  {
    title: "你真的理解什么是财富自由吗?",
    content:"正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至根本从来就没有想过，只是打架都那么做而已...",
    url:"https://unsplash.it/100/100?image=1005",
    avatar:"https://unsplash.it/800/450?image=1005",
  },
  {
    title: "你真的理解什么是财富自由吗?",
    content:"正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至根本从来就没有想过，只是打架都那么做而已...",
    url:"https://unsplash.it/100/100?image=1005",
    avatar:"https://unsplash.it/800/450?image=1005",
  },
  {
    title: "你真的理解什么是财富自由吗?",
    content:"正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至根本从来就没有想过，只是打架都那么做而已...",
    url:"https://unsplash.it/100/100?image=1005",
    avatar:"https://unsplash.it/800/450?image=1005",
  },
  {
    title: "你真的理解什么是财富自由吗?",
    content:"正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至根本从来就没有想过，只是打架都那么做而已...",
    url:"https://unsplash.it/100/100?image=1005",
    avatar:"https://unsplash.it/800/450?image=1005",
  },
  {
    title: "你真的理解什么是财富自由吗?",
    content:"正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至根本从来就没有想过，只是打架都那么做而已...",
    url:"https://unsplash.it/100/100?image=1005",
    avatar:"https://unsplash.it/800/450?image=1005",
  },
]

const Home = memo(() => {
  console.log(blogs);
  return (
    <div className='py-8 flex justify-center items-start'>
        <div className='sm:container px-20'>
            <div className='grid grid-cols-8 gap-5'>
                {/* 左边 */}
                <div className='col-span-6 border boder-gray-300 rounded-md shadow-md'>
                    {/* top */}
                    <div className='flex justify-between'>
                        <h2 className='mx-4 my-3 text-xl text-teal-500 font-semibold'>博客</h2>
                        <div className='flex mx-4 my-3 items-center'>共&nbsp;
                        <h2 className='text-orange-600 text-2xl font-medium'>14</h2>
                        &nbsp;篇</div>
                    </div>
                    {/* center*/}
                    {
                        blogs.map((item,index)=>{
                          return (
                            <div key={index} className='flex flex-col px-10 py-6 justify-center border-t border-gray-200'>
                              <div className='grid grid-cols-11 gap-4'>
                                <div className='col-span-8'>
                                    <h3 className='text-lg font-semibold'>{item.title}</h3>
                                    <p className='text-sm text-gray-500 mt-4 indent-7 leading-6 text-left mr-2'>{item.content}</p>
                                    <div className='grid grid-cols-12 mt-4'>
                                        <div className='col-span-8'>
                                              <div className='flex items-center'>
                                                    <div className='flex items-center mr-4'>
                                                        <img src={item.avatar} alt="avatar" className="rounded-2xl w-8 h-8" />
                                                        <div className="content"><a href="/#" className="ml-2 text-xs font-normal text-blue-400">卢克西</a></div>
                                                    </div>
                                                    <div className='flex items-center mr-4 text-xs text-gray-400'>
                                                      <SvgIcon path="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                          &nbsp;2021-06-30
                                                    </div>
                                                    <div className='flex items-center mr-4 text-xs text-gray-400'>
                                                      <SvgIcon path="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                                          &nbsp;2046
                                                    </div>
                                              </div>
                                        </div>
                                        <div className='col-span-4 flex items-center justify-end mr-2'>
                                          <a href="/#" className='text-teal-500 h-7 text-xs py-1 px-1 border border-teal-500 rounded'>认知升级</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-3 flex justify-end'>
                                    <img src={item.url} alt="log" className="rounded-md w-48 h-28" />
                                </div>
                            </div>
                        </div>
                          )
                        })
                    }

                    {/* bottom */}
                    <div className='flex justify-between px-4 py-3 border-t border-gray-200'>
                        <a href="/#" className='text-teal-500 h-7 text-xs py-1 px-2 border border-teal-500 rounded'>上一页</a>
                        <a href="/#" className='text-teal-500 h-7 text-xs py-1 px-2 border border-teal-500 rounded'>下一页</a>
                    </div>
                </div>
                
                {/* 右边 */}
                <div className='col-span-2 py-8 px-4'>
                    {/* 分类 */}
                    <div className='border rounded border-gray-200 shadow-md'>
                        <div className='flex justify-between px-3 py-3 bg-gray-100 border-teal-500 border-b-2'>
                            <h2 className='text-xs text-gray-700'>分类</h2>
                            <a href="/#" className='text-xs flex items-center text-blue-400 font-tiny'>more
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mt-px fill-current" viewBox="0 0 20 20">
                                  <path d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
                                  <path d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
                              </svg>
                            </a>
                        </div>
                        <div className='border rounded border-gray-200 mx-4 my-4'>
                            <div className='flex justify-between px-4 py-2 border-b border-gray-200'>
                                <h2 className='text-md'>学习日志</h2>
                                <div className='border border-teal-500 text-sm font-semibold rounded text-teal-500 w-10 text-center'>12</div>
                            </div>
                            <div className='flex justify-between px-4 py-2 border-b border-gray-200'>
                                <h2 className='text-md'>思考与感悟</h2>
                                <div className='border border-teal-500 text-sm font-semibold rounded text-teal-500 w-10 text-center'>12</div>
                            </div>
                            <div className='flex justify-between px-4 py-2 border-b border-gray-200'>
                                <h2 className='text-md'>清单</h2>
                                <div className='border border-teal-500 text-sm font-semibold rounded text-teal-500 w-10 text-center'>12</div>
                            </div>
                            <div className='flex justify-between px-4 py-2 border-b border-gray-200'>
                                <h2 className='text-md'>Golang</h2>
                                <div className='border border-teal-500 text-sm font-semibold rounded text-teal-500 w-10 text-center'>12</div>
                            </div>
                            <div className='flex justify-between px-4 py-2 border-b border-gray-200'>
                                <h2 className='text-md'>创业</h2>
                                <div className='border border-teal-500 text-sm font-semibold rounded text-teal-500 w-10 text-center'>12</div>
                            </div>
                            <div className='flex justify-between px-4 py-2 border-b border-gray-200'>
                                <h2 className='text-md'>认知与升级</h2>
                                <div className='border border-teal-500 text-sm font-semibold rounded text-teal-500 w-10 text-center'>12</div>
                            </div>
                        </div>
                    </div>
                    {/* 标签 */}
                    <div className='mt-8 border rounded border-gray-200 shadow-md'>
                        <div className='flex justify-between px-3 py-3 bg-gray-100 border-teal-500 border-b-2'>
                            <h2 className='text-xs text-gray-700'>标签</h2>
                            <a href="/#" className='text-xs flex items-center text-blue-400 font-tiny'>more
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mt-px fill-current" viewBox="0 0 20 20">
                                  <path d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
                                  <path d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
                              </svg>
                            </a>
                          </div>
                          <div className='px-4 py-4 flex flex-wrap content-center'>
                              <a href="/#" className='border flex border-teal-500 rounded-md text-sm font-medium px-2 m-1 text-center text-teal-500'>方法论<div className='ml-3'>22</div></a>
                              <a href="/#" className='border flex border-teal-500 rounded-md text-sm font-medium px-2 m-1 text-center text-teal-500'>认知升级<div className='ml-3'>22</div></a>
                              <a href="/#" className='border flex border-teal-500 rounded-md text-sm font-medium px-2 m-1 text-center text-teal-500'>数据结构与算法<div className='ml-3'>22</div></a>
                              <a href="/#" className='border flex border-teal-500 rounded-md text-sm font-medium px-2 m-1 text-center text-teal-500'>分布式存储<div className='ml-3'>22</div></a>
                              <a href="/#" className='border flex border-teal-500 rounded-md text-sm font-medium px-2 m-1 text-center text-teal-500'>方法论<div className='ml-3'>22</div></a>
                              <a href="/#" className='border flex border-teal-500 rounded-md text-sm font-medium px-2 m-1 text-center text-teal-500'>方法论<div className='ml-3'>22</div></a>
                              <a href="/#" className='border flex border-teal-500 rounded-md text-sm font-medium px-2 m-1 text-center text-teal-500'>方法论<div className='ml-3'>22</div></a>
                          </div>
                    </div>
                    {/* 最新推荐 */}
                    <div className='mt-8 border rounded border-gray-200 shadow-md'>
                        <div className='flex justify-between px-3 py-3 bg-gray-100 border-teal-500 border-b-2'>
                            <h2 className='text-xs text-gray-700'>最新推荐</h2>
                        </div>
                        <div className='border rounded border-gray-200 mx-4 my-4'>
                            <div className='flex justify-between px-4 py-2 border-b border-gray-200'>
                                <h2 className='text-sm'>用户故事</h2>
                            </div>
                            <div className='flex justify-between px-4 py-2 border-b border-gray-200'>
                                <h2 className='text-sm'>思考与感悟</h2>
                            </div>
                            <div className='flex justify-between px-4 py-2 border-b border-gray-200'>
                                <h2 className='text-sm'>清单</h2>
                            </div>
                            <div className='flex justify-between px-4 py-2 border-b border-gray-200'>
                                <h2 className='text-sm'>Golang</h2>
                            </div>
                            <div className='flex justify-between px-4 py-2 border-b border-gray-200'>
                                <h2 className='text-sm'>创业</h2>
                            </div>
                            <div className='flex justify-between px-4 py-2 border-b border-gray-200'>
                                <h2 className='text-sm'>认知与升级</h2>
                            </div>
                        </div>
                    </div>
                    {/* 扫码关注 */}
                    <div className='mt-10 border-t border-gray-200'></div>
                      <div className='flex justify-center m-8'>
                        <img src={logo} alt="logo" className='w-40 h-40 rounded'/>
                      </div>
                    <div className='border-t border-gray-200'></div>
                </div>
            </div>
        </div>
    </div>
  )
})

export default Home