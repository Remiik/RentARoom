import React, { Component } from 'react'
import './HeroImageStyles.css'
/* Import de React, de component et de la feuille de style */

export class HeroImage extends Component {
    render() {
        return (
            /* contenu au-dessus de toutes les pages sauf la page d'accueil,
            contenant une image et du texte par-dessus.  */ 
            <div className='hero-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default HeroImage