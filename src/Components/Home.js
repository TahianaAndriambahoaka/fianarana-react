import React, { useState }from 'react'
import '../styles/home.css'
import BlogList from './BlogList';
export default function Home() {
    const[blogs , setBlogs] = useState([
        {title : 'My new webSite', body: 'lorem ipsum...', author: 'Cedric', id:1},
        {title : 'Welcome to my party!', body: 'lorem ipsum...', author: 'Yoshi', id:2},
        {title : 'Web dev top tips', body: 'lorem ipsum...', author: 'Luigi', id:3}
    ]);
  return (
      <>
        <div className='home'>
            <BlogList blogs = {blogs} />
        </div>
      </>
  )
}
