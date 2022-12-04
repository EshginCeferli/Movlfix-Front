import React from 'react'

function Categories() {
  return (
    <div className="widget blog-widget">
    <div className="widget-title mb-5">
      <h5 className="title">Categories</h5>
    </div>
    <div className="sidebar-cat">
      <ul>
        <li>
          <a href="#">Movies</a> <span>12</span>
        </li>
        <li>
          <a href="#">Action Movies</a> <span>10</span>
        </li>
        <li>
          <a href="#">Streaming</a> <span>9</span>
        </li>
        <li>
          <a href="#">Download</a> <span>16</span>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Categories