import React from 'react'
import "./sidebar.css";


const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <>
      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>

      <aside className={`aside ${sidebarOpen ? "open" : ""}`}>
        <a href="#home" className='nav_logo'>
          <img src="logo.svg" alt="Logo" className='logo' />
        </a>

        <nav className='nav'>
          <div className='nav_menu'>
            <ul className='nav_list'>
              <li className='nav_item'><a href="#home" className='nav_link'><i className='icon-home'></i></a></li>
              <li className='nav_item'><a href="#about" className='nav_link'><i className='icon-user-following'></i></a></li>
              <li className='nav_item'><a href="#resume" className='nav_link'><i className='icon-graduation'></i></a></li>
              <li className='nav_item'><a href="#portfolio" className='nav_link'><i className='icon-layers'></i></a></li>
              <li className='nav_item'><a href="#contact" className='nav_link'><i className='icon-bubble'></i></a></li>
            </ul>
          </div>
        </nav>

        <div className='nav_footer'>
          <span className='copyright'>&copy;2025-2026</span>
        </div>
      </aside>
    </>
  )
}

export default Sidebar;
