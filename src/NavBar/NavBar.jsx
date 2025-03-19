import React from 'react';
import styles from './NavBar.css'

const NavBar = () => {

    return (
       <div className='NavBar'>
        <span>Logo</span>

       <ul>
        <li><link to="/tipo:Hombre">men's clothing </link></li>
        <li><a href="">women's clothing</a></li>
        <li><a href="">jewelery</a></li>
        <li><a href="">electronics</a></li>
        <li><a href="" className='btn'>Login</a></li>
       </ul>
       </div>
    )

}

export default NavBar;