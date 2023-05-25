import React from 'react'
import {Link} from 'react-router-dom'
import './Appbar.css'

const Appbar = () => {
  return (
    <>
    <div className="appbar">
<div><img src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png" alt="logo" /></div>
<div className="links">
<Link to="/" className='link'>Home</Link>
<Link to="/add" className='link'>Add</Link>
<Link to="/about" className='link'>About</Link>
<Link to="/services" className='link'>Services</Link>
<Link to="/portfolio" className='link'>Portfolio</Link>
<Link to="/team" className='link'>Team</Link>
<Link to="/skill" className='link'>Skill</Link>
<Link to="/clients" className='link'>Clients</Link>
<Link to="/pricing" className='link'>Pricing</Link>
<Link to="/blog" className='link'>Blog</Link>
<Link to="/Contact" className='link'>Contact</Link>
    
</div>

    </div>
    </>
  )
}

export default Appbar