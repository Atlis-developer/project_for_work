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
                {openMenu && <div className='header-menu'>
                    <div className='menu'>
                        <div >
                            <a href="#form" onClick={() => { setOpenMenu(!openMenu) }}>About me</a>
                            <a href="#form" onClick={() => { setOpenMenu(!openMenu) }}>Relationship</a>
                            <a href="#form" onClick={() => { setOpenMenu(!openMenu) }}>Users</a>
                            <a href="#form" onClick={() => { setOpenMenu(!openMenu) }}>Sign up</a>
                            <a href="#form" onClick={() => { setOpenMenu(!openMenu) }}>Terms and Conditions</a>
                        </div>
                        <div>
                            <a href="#form" onClick={() => { setOpenMenu(!openMenu) }}>How it works</a>
                            <a href="#form" onClick={() => { setOpenMenu(!openMenu) }}>Partnership</a>
                            <a href="#form" onClick={() => { setOpenMenu(!openMenu) }}>Help</a>
                            <a href="#form" onClick={() => { setOpenMenu(!openMenu) }}>Level testimonial</a>
                            <a href="#form" onClick={() => { setOpenMenu(!openMenu) }}>Contact us</a>
                        </div>
                        <div>
                            <a href="#form" onClick={() => { setOpenMenu(!openMenu) }}>Articles</a>
                            <a href="#form" onClick={() => { setOpenMenu(!openMenu) }}>Our news</a>
                            <a href="#form" onClick={() => { setOpenMenu(!openMenu) }}>Testimonials</a>
                            <a href="#form" onClick={() => { setOpenMenu(!openMenu) }}>Licenses</a>
                            <a href="#form" onClick={() => { setOpenMenu(!openMenu) }}>Privacy Policy</a>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}