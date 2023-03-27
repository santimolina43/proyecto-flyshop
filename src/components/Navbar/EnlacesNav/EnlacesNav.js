import { Link } from "react-router-dom";

export const EnlacesNav = () => {

    return (
            <nav className="navbar"> 
                <Link to='/' className="navbar__link">Inicio</Link>
                <Link to='/productos/señuelos' className="navbar__link" >Señuelos</Link>
                <Link to='/productos/equipos' className="navbar__link" >Equipos</Link>          
                <Link to='/productos/accesorios' className="navbar__link" >Accesorios</Link>
            </nav>
    )
}