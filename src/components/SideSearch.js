import React from 'react'
import { useTranslation } from 'react-i18next'

function SideSearch() {

  const {t} = useTranslation();
  return (
    <div className="widget blog-widget">
    <div className="widget-title mb-30">
      <h5 className="title">{t(`search objects`)}</h5>
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