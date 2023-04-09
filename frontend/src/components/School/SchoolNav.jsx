import React from 'react'

import {Link} from 'react-router-dom'
import Nav from '../Navbar/Nav'
const SchoolNav = () => {
    const home = <Link to={'/'}>Home</Link>
  return (
   <Nav links={{home}}/>
  )
}

export default SchoolNav