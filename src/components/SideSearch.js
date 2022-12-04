import React from 'react'

function SideSearch() {
  return (
    <div className="widget blog-widget">
    <div className="widget-title mb-30">
      <h5 className="title">Search Objects</h5>
    </div>
    <form action="#" className="sidebar-search">
      <input type="text" placeholder="Search..." />
      <button>
        <i className="fas fa-search" />
      </button>
    </form>
  </div>
  )
}

export default SideSearch