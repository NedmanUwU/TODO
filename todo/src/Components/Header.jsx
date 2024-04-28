import React from 'react'

export const Header = () => {
  return (
    <div className="header">
      <h1>Welcome to My Website</h1>
      <nav className="nav-links">
        <Link to="/page1" className="nav-link">Page 1</Link>
        <Link to="/page2" className="nav-link">Page 2</Link>
      </nav>
    </div>
  )
}
export default Header;