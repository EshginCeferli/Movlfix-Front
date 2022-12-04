import React from 'react'

import BlogDetailComp from '../../components/BlogDetailComp'
import Categories from '../../components/Categories'
import Recent from '../../components/Recent'
import SideSearch from '../../components/SideSearch'
import Tag from '../../components/Tag'

function BlogDetail() {
  return (
    <section
    className="blog-area blog-bg"
    style={{ backgroundImage: "url(/images/bg/blog_bg.jpg)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
         <BlogDetailComp/>
        </div>
        <div className="col-lg-4">
          <aside className="blog-sidebar">
            <SideSearch/>
            <Categories/>
            <Recent/>
            <Tag/>
            
          </aside>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BlogDetail