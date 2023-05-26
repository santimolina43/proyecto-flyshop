import { useContext } from 'react'
import { GeneralContext } from '../../context/GeneralContext';
import './Footer.scss'

export const Footer = () => {

    const {footer} = useContext(GeneralContext);

    return (
        <footer className={`footer-container ${footer && "footer-fijado"}`}>
            <div className="sectionFooter">
              <a href="https://www.instagram.com/">
                  <img className="footer__logo" src="./imgs/logo-instagram.png" alt="Error al cargar imagen"/>
              </a> 
              <a href="https://www.facebook.com/">
                  <img className="footer__logo" src="../imgs/logo-facebook.png" alt="Error al cargar imagen"/>
              </a> 
              <a href="https://www.twitter.com/">
                  <img className="footer__logo tw" src="../imgs/svg-twitter.png" alt="Error al cargar imagen"/>
              </a> 
              <a href="https://web.whatsapp.com/">
                  <img className="footer__logo" src="../imgs/svg-whatsapp.png" alt="Error al cargar imagen"/>
              </a> 
          </div>
        </footer>
    )
}