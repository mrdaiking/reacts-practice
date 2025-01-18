import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
// import logo from './logo.svg'
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
