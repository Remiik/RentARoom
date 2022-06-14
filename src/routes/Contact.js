import React from 'react'

import Navbar from '../composants/Navbar'
import HeroImage from '../composants/HeroImage'
import Formulaire from '../composants/Formulaire'
import Footer from '../composants/Footer'
/* Import de React, de la barre de navigation, de l'image au-dessus de la page, du formulaire et du pied de page*/

const Contact = () => {
    return (
            /* Contenu de la page avec des
            components repris par HeroImage.js */
        <div>
            <Navbar />
            <HeroImage heading='Contact' text='Contacter RentARoom'/>
            <Formulaire />
            <Footer />
        </div>
    )
}

export default Contact
