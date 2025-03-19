import React from 'react';
import styles from './NavBar.css'

const NavBar = () => {

    return (
       <div className='NavBar'>
        <span>Logo</span>

       <ul>
        <li>Category</li>
        <li><a href="">Lastest product</a></li>
        <li><a href="">contact</a></li>
        <li><a href="" className='btn'>Login</a></li>
       </ul>
       </div>
    )

}

export default NavBar;