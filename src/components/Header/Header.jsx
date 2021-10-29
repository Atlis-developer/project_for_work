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
                <a href="#form">About me</a>
                <a href="#form">Relationships</a>
                <a href="#form">Requirements</a>
                <a href="#form">Users</a>
                <a href="#form">Sign Up</a>
            </div>

        </div>
    )
}