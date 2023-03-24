
import { CartWidget } from '../CartWidget/CartWidget';
import logo from './logo.png'; // esto es para imagenes estaticas como el logo

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} className="header__logo" alt="logo"/> 
                {/* <img src='./imgs/logo.png' className="header__logo" alt="logo"/> esto seria para imagenes  
                                                                                     dinamicas como las imagenes 
                                                                                     de los productos */}

                <nav className="navbar"> 
                    <p className="navbar__link">Enlace 1</p>
                    <p className="navbar__link">Enlace 2</p>
                    <p className="navbar__link">Enlace 3</p>
                </nav>
                <CartWidget/>
            </div>
        </header>
    )
} // comando para que React JS compile mis archivos sass automaticamente: npm install sass