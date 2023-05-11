
import { CartWidget } from '../CartWidget/CartWidget';
import { EnlacesNav } from './EnlacesNav/EnlacesNav';
import logo from './logo-trucha.png'; 
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import './Navbar.scss'

export const Navbar = () => {
    const {user, logout} = useContext(LoginContext)

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} className="header__logo" alt="logo"/> 
                <EnlacesNav />
                <CartWidget/>
            </div>

            <div className='user'>
                <h6>Bienvenido: {user.email}</h6>
                <button onClick={logout} className='btn btn-danger'>Logout</button>
            </div>
        </header>
    )
} 