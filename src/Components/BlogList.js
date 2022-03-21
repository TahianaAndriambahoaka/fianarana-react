import React from 'react'

export default function BlogList(props) {
    const blogs = props.blogs
    console.log(blogs)
  return (
      <>
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
