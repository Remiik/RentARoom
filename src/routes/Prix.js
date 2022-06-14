import React from 'react'

import Navbar from '../composants/Navbar'
import HeroImage from '../composants/HeroImage'
import PrixCartes from '../composants/Prix'
import Footer from '../composants/Footer'
/* Import de React, de la barre de navigation, de l'image au-dessus de la page, des conteneurs de cartes et du pied de page*/


const Prix = () => {
  return (
          /* Contenu de la page avec des
          components repris par HeroImage.js */
        <div>
            <Navbar />
            <HeroImage heading='Prix' text='Informations sur les tarifs.'/>
            <PrixCartes />
            <Footer />
        </div>
  )
}

export default Prix