import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar bg-dark d-flex flex-row justify-content-center">
        <Link to="/chat" className='link'><button className='btn btn-primary mx-2'>Chat</button></Link>
        <Link to="/data-picker" className='link'><button className='btn btn-primary mx-2'>Data Picker</button></Link>
        <Link to="/crud" className='link'><button className='btn btn-primary mx-2'>Crud</button></Link>
      </nav>
    </div>
  )
}

export default Nav;