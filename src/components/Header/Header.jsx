import React, { useState } from 'react';
import './Header.sass';
import Logo from '../../images/Logo.svg'
import Burger from '../../images/Menu.svg'

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className='header'>
            <div className='header-laptop'>
                <div className='header-logo'>
                    <img src={Logo} alt='logo' />
                </div>
                <div className='header-nav'>
                    <a href="#form">About me</a>
                    <a href="#form">Relationships</a>
                    <a href="#form">Requirements</a>
                    <a href="#form">Users</a>
                    <a href="#form">Sign Up</a>
                </div>
            </div>
            <div className='header-mobile'>
                <div className='header-logo'>
                    <img src={Logo} alt='logo' className='logo' />
                    <img src={Burger} alt='burger' onClick={() => { setOpenMenu(!openMenu) }} className='burger' />
                </div>
                {openMenu && <div className='header-menu' onClick={() => { setOpenMenu(!openMenu) }}>
                    <div className='menu' >
                        <div >
                            <a href="#form">About me</a>
                            <a href="#form">Relationship</a>
                            <a href="#form">Users</a>
                            <a href="#form" >Sign up</a>
                            <a href="#form" >Terms and Conditions</a>
                        </div>
                        <div>
                            <a href="#form" >How it works</a>
                            <a href="#form" >Partnership</a>
                            <a href="#form" >Help</a>
                            <a href="#form" >Level testimonial</a>
                            <a href="#form" >Contact us</a>
                        </div>
                        <div>
                            <a href="#form" >Articles</a>
                            <a href="#form" >Our news</a>
                            <a href="#form" >Testimonials</a>
                            <a href="#form" >Licenses</a>
                            <a href="#form" >Privacy Policy</a>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}