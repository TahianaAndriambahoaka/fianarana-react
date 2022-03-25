import React from 'react'

export default function BlogList({blogs, title}) {
    // const blogs = props.blogs
    // const title = props.title
    console.log(blogs)
    
  return (
      <>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
        <h2>
            Title : {blog.title}
        </h2>
        <p>
            Written by : {blog.author}
        </p>
        <p>
            Content : {blog.body}
        </p>
    </div>
    ))}
      </>
  )
}
