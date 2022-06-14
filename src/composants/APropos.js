import React from 'react'
import {Link} from 'react-router-dom'
import './AProposStyles.css'

import Photo1 from '../assets/Photo1.jpg'
import Photo2 from '../assets/Photo2.jpg'
/* Import de React, de la feuille de style et des photos */

const APropos = () => {
    return (
        /* La section à propos dispose de deux parties :
        - La partie gauche pour le texte
        - La partie droite pour les photos d'exposition */
        <div className='APropos'>
            <div className='left'>
                <h1>A propos</h1>
                <p>Fondée en 2022, RentARoom s'expertise dans la location
                    de locaux profesionnels dans le secteur de Lyon. 
                    <br />
                    <br />
                    Équipés de 8 salles de 35m2 chacune et de 10 à
                        15 places selon la formule, nos locaux ont été
                        concus pour que vous passiez de bons moments durant
                        votre temps de travail.
                    <br />
                    <br />
                    Pour en savoir plus sur le contenu de nos salles,
                        cliquer sur le bouton ci-dessous :
                </p>
                <Link to='/Prix'><button className='btn'>Voir le contenu des salles</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Photo1} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Photo2} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default APropos