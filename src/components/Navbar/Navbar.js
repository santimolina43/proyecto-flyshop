
import { CartWidget } from '../CartWidget/CartWidget';
import { EnlacesNav } from './EnlacesNav/EnlacesNav';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import './Navbar.scss'
import { MenuHamburguesa } from './MenuHamburguesa/MenuHamburguesa';
import { GeneralContext } from '../../context/GeneralContext';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { FaUserAlt } from 'react-icons/fa';

export const Navbar = () => {
    const {user, logout} = useContext(LoginContext)
    const {navCollapse} = useContext(GeneralContext)
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <div className="header__container">
                <img src='./imgs/logo-trucha.png' className="header__logo" alt="logo"/> 
                <EnlacesNav />
                <MenuHamburguesa />
            </div>
            {
                navCollapse &&  <div className='collapse-navbar'>
                                    <EnlacesNav />
                                </div>
            }
            <div className='user'>
                <CartWidget/>
                <Button onClick={() => setOpen(!open)} className="btn-user" aria-controls="user-options" aria-expanded={open}>
                    <FaUserAlt/>
                </Button>
            </div>
            <Collapse in={open}>
                <div id="user-options">
                    <div className='user-options'>
                        <h6>Bienvenido: {user.email}</h6>
                        <p onClick={logout}>Logout</p>
                    </div>
                </div>
            </Collapse>
        </header>
    )
} 