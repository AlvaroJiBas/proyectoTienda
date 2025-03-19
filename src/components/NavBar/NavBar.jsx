import React from 'react';
import styles from './NavBar.css'
import { Link } from 'react-router-dom';
const NavBar = () => {

    return (
       <div className='NavBar'>
        <span>Logo</span>

       <ul>
        <li><Link to="/tipo:1">men's clothing </Link></li>
        <li><Link to="/tipo:2">women's clothing </Link></li>
        <li><Link to="/tipo:3">jewelery </Link></li>
        <li><Link to="/tipo:4">electronics </Link></li>
        <li><a href="" className='btn'>Login</a></li>
       </ul>
       </div>
    )

}

export default NavBar;