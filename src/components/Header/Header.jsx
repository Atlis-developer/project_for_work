import React from 'react';
import './Header.sass';
import Logo from '../../images/Logo.svg'

export const Header = () =>{
    return(
        <div className='header'>
            <div className='header-logo'>
                <img src={Logo} alt='logo'/>
            </div>
            <div className='header-nav'>
                <a href="">About me</a>
                <a href="">Relationships</a>
                <a href="">Requirements</a>
                <a href="">Users</a>
                <a href="">Sign Up</a>
            </div>

        </div>
    )
}