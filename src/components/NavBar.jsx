import React from 'react'

import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <nav>
      <ul className='flex gap-5 justify-center bg-zinc-900 text-white p-3 text-xl'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/new'}>Add player</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar