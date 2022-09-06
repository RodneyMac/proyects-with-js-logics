import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar bg-dark d-flex flex-row justify-content-center">
        <Link to="/chat" className='link'><button className='btn btn-primary mx-2'>Chat</button></Link>
        <Link to="/logic-buttons" className='link'><button className='btn btn-primary mx-2'>Logic Buttons</button></Link>
        <Link to="/crud" className='link'><button className='btn btn-primary mx-2'>Crud</button></Link>
        {/* <div className="container-fluid bg-light">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          </div>
        </div> */}
      </nav>
    </div>
  )
}

export default Nav;