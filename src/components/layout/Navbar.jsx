import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar() {
  return (
    <nav className='navbar'>
      <FaGithub className='navbar-icon' />
      <Link to='/' className='navbar-link'>
        {title}
      </Link>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'GitHub Coders',
}

Navbar.PropTypes = {
  title: PropTypes.string,
}

export default Navbar