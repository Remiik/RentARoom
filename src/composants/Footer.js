import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'
/* Import de React, de la feuille de style et des icônes disponibles dans la bibliothèque de React */

const Footer = () => {
    return (
        /* Le pied de page est composé de deux parties :
        - La partie gauche pour la localisation, l'adresse mail & le n° de téléphone
        - La partie droite pour le court résumé de l'entreprise et les réseaux sociaux */
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style= {{color: '#fff', marginRight: '2rem'}} />
                        <div>
                            <p><a href='https://www.google.com/search?q=RentARoom&stick=H4sIAAAAAAAAAONgU1I1qLAwNjM3SjFKMk01SU0yTLG0MqgwNTBITUsyMkk2NUo0TUoyWcTKGZSaV-IYlJ-fCwC3MXBANQAAAA&hl=fr&mat=CfsCw4xE1UFXElcBT5f1BsYme7mnMOsChb_Oks49U0RER2T4xpy_hX-2xV-IEkD10Blf-gFfkxD5F-XEEX20xZQl8FnS83Q3c26cUwdaluBBfCZYmXdt6ZdStZmYiMH4fVE&authuser=2' target='_blank' rel="noreferrer">26 Av. Tony Garnier 3ème étage</a></p>
                            <h4><a href='https://www.google.com/search?q=RentARoom&stick=H4sIAAAAAAAAAONgU1I1qLAwNjM3SjFKMk01SU0yTLG0MqgwNTBITUsyMkk2NUo0TUoyWcTKGZSaV-IYlJ-fCwC3MXBANQAAAA&hl=fr&mat=CfsCw4xE1UFXElcBT5f1BsYme7mnMOsChb_Oks49U0RER2T4xpy_hX-2xV-IEkD10Blf-gFfkxD5F-XEEX20xZQl8FnS83Q3c26cUwdaluBBfCZYmXdt6ZdStZmYiMH4fVE&authuser=2' target='_blank' rel="noreferrer">Lyon, France</a></h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style= {{color: '#fff', marginRight: '2rem'}}/>0789012345</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style= {{color: '#fff', marginRight: '2rem'}}/>contact.rentaroom@gmail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>L'équipe RentARoom en 3 lignes</h4>
                    <p>Nous sommes une équipe de 3 étudiants dynamiques en quête de nouveaux projets dans le domaine de la location de biens sur Lyon.</p>
                <div className='social'>
                    <a href='https://fr-fr.facebook.com/' target='_blank' rel="noreferrer"><FaFacebook size={30} style= {{color: '#283592', marginRight: '1rem'}}/></a>
                    <a href='https://twitter.com/' target='_blank' rel="noreferrer"><FaTwitter size={30} style= {{color: '283592', marginRight: '1rem'}}/></a>
                    <a href='https://www.linkedin.com/' target='_blank' rel="noreferrer"><FaLinkedin size={30} style= {{color: '283592', marginRight: '1rem'}}/></a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer