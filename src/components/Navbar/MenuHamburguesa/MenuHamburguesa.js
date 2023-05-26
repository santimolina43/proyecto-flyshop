import { useContext } from 'react'
import { GeneralContext } from '../../../context/GeneralContext'
import './MenuHamburguesa.scss'


export const MenuHamburguesa = () => {

    const {collapseNav} = useContext(GeneralContext);

    return (
        <div className='navbar-logos-container'>
            <button onClick={collapseNav}>
                <img className="menu-hamburguesa" src="./imgs/menu-hamburguesa.png" alt="error"/>
            </button>
        </div>
    )
}