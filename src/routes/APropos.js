import React from 'react'

import Navbar from '../composants/Navbar'
import HeroImage from '../composants/HeroImage'
import AProposSection from '../composants/APropos'
import Footer from '../composants/Footer'
/* Import de React, de la barre de navigation, de la section "à propos" et du pied de page*/

const APropos = () => {
    return (
            /* Contenu de la page avec des
            components repris par HeroImage.js */
        <div>
            <Navbar />
            <HeroImage heading='A propos de nous' text='Les essentiels à savoir sur notre équipe.'/>
            <AProposSection />
            <Footer />
        </div>
    )
}

export default APropos