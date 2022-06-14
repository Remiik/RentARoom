import React from 'react'

import Navbar from '../composants/Navbar'
import Video from '../composants/Video'
import Footer from '../composants/Footer'
/* Import de React, de la barre de navigation, de la vidéo centrale et du pied de page*/

const Home = () => {
    return (
            /* Contenu de la page */
        <div>
            <Navbar />
            <Video />
            <Footer />
        </div>
    )
}

export default Home