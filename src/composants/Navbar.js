import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'
/* Import de React, du useState, du Link, des icônes pour le cas écran de téléphone et de la feuille de style */

const Navbar = () => {
    /* Initialisation du hook pour savoir quel bouton afficher (hamburger ou croix) */
    const[click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    /* Si on scroll une fois en bas de la page, la barre de navigation obtient un fond noir semi-trransparent */
    const [color, setColor] = useState(false)
        const changeColor = () => {
            if(window.scrollY >= 100) {
                setColor(true)
            } else {
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)

    return (
            /* La barre de navigation contient des liens vers la page :
             - D'accueil, des prix, des informations sur l'entreprise
             et le formulaire de contact. */
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to ='/'><h1>RentARoom</h1></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/Prix">Prix</Link>
                </li>                
                <li>
                    <Link to="/APropos">A propos de nous</Link>
                </li>                
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : (<FaBars size={20} style={{color: '#fff'}} />)}   
            </div>
        </div>
    )
}

export default Navbar