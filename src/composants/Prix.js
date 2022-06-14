import React from 'react'
import {Link} from 'react-router-dom'
import './PrixStyles.css'
/* Import de React, Link et la feuille de styles */

const Prix = () => {
    return (
            /* La section des prix permet d'afficher tout
            ce qui concerne les tarifs, le contenu de la prestation
            , ... */
        <div className='pricing'>
            <span className='bar'></span>
            <h1>Formules classiques</h1>
            <span className='bar'></span>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Formule à l'heure -</h3>
                    <span className='bar'></span>
                    <p className='eur'>40 € / heure</p>
                    <p>- 1 à 3 heures -</p>
                    <p>- Orienté nord -</p>
                    <Link to ='/contact' className='btn'>Réserver</Link>
                </div>
                <div className='card'>
                    <h3>- Formule demi-journée -</h3>
                    <span className='bar'></span>
                    <p className='eur'>110 €</p>
                    <p>- 4 heures -</p>
                    <p>- Orienté est/ouest -</p>
                    <Link to ='/contact' className='btn'>Réserver</Link>
                </div>
                <div className='card'>
                    <h3>- Formule journée -</h3>
                    <span className='bar'></span>
                    <p className='eur'>200 €</p>
                    <p>- 8 heures -</p>
                    <p>- Orienté sud -</p>
                    <Link to ='/contact' className='btn'>Réserver</Link>
                </div>
            </div>
            <span className='bar'></span>
            <h1>Contenu des salles</h1>
            <span className='bar'></span>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Matériel intégré -</h3>
                    <span className='bar'></span>
                    <p>- Climatisation -</p>
                    <p>- Tableau -</p>
                    <p>- Câbles -</p>
                    <p>- Wi-fi -</p>
                    <p>- Fontaine d'eau -</p>
                    <p>- Éléments de bureau (papier, agrafeuse, trombones, ...) -</p>
                    <p>- Panier de bienvenue pour les nouveaux clients -</p>
                    <Link to ='/contact' className='btn'>Réserver</Link>
                </div>
                <div className='card'>
                    <h3>- Matériel complémentaire payant -</h3>
                    <span className='bar'></span>
                    <p>- Ordinateur portable de prêt : 5€/heure -</p>
                    <p>- Photocopieuse : 1€ par feuille couleur -</p>
                    <Link to ='/contact' className='btn'>Réserver</Link>
                </div>
                <div className='card'>
                    <h3>- Nourriture -</h3>
                    <span className='bar'></span>
                    <p>- Plateau repas : 15€/personne -</p>
                    <p>- Café : 1€/personne -</p>
                    <p>- Corbeille de fruit : 5€ la corbeille -</p>
                    <Link to ='/contact' className='btn'>Réserver</Link>
                </div>
            </div>
        </div>
    )
}

export default Prix