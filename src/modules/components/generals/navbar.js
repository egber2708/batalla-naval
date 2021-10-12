import React from 'react'
import {Link} from "react-router-dom";

export const Navbar = ({history}) => {


    return (
      <div className='navbar-container'>
        <h1 className='navbar-icon'>BATTLEFIELD</h1>

        <div className='navbar-link-container'>
          <Link to='/records'> Records</Link>
          <Link to='/rules'>Rules</Link>
          <Link to='/'>Settings</Link>
        </div>
      </div>
    );
}
