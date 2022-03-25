import React, { useState, useEffect } from 'react'
import '../styles/home.css'
import BlogList from './BlogList';
import useFetch from './useFetch';
export default function Home() {
  const {data: blogs, error, isPending} = useFetch('http://loalhost:8000/blogs');
  return (
    <>
      <div className='home'>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
      </div>
    </>
  )
}
