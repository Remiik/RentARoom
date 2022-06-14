import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'

import VideoFond from '../assets/VideoFond.mp4'
/* Import de React, Link, la feuille de styles et la vidéo */


const Video = () => {
    return (
        /* Vidéo servant de contenu de page d'accueil
        contenant du texte et deux boutons redirigeant
        vers d'autres pages du site. */
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={VideoFond} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>RentARoom.</h1>
                <p>Location d'espaces profesionnels sur Lyon.</p>
                <div>
                    <Link to ='/Prix' className='btn'>Nos tarifs</Link>
                    <Link to ='/APropos' className='btn btn-light'>Nous connaitre</Link>
                </div>
            </div>
        </div>
    )
}

export default Video