
import { CartWidget } from '../CartWidget/CartWidget';
import { EnlacesNav } from './EnlacesNav/EnlacesNav';
import logo from './logo-trucha.png'; 

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} className="header__logo" alt="logo"/> 
                <EnlacesNav />
                <CartWidget/>
            </div>
        </header>
    )
} 