import React, {useState} from 'react'
import emailjs from 'emailjs-com'
import './FormulaireStyles.css'
/* Import de React, du useState pour altérer le résultat du formulaire et de la feuille de style */

/* Mini fonction pour afficher le message si le hook d'état "result" est à "vrai" */
const Result = () => {
    return(
        <h1>Votre message a bien été envoyé.</h1>
    )
}

const Formulaire = () => {
    /* Initialisation des hooks d'état */
    const [result, showResult] = useState(false);
    
    /* Méthode pour intéragir avec le site EmailJS pour recevoir les messages issus du formulaire */
    const sendEmail = (e) => {
    e.preventDefault();
        
    emailjs.sendForm('Gmail', 'template_3m56xep', e.target, 'd3hWUbK2Mvt65nsPt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true);
    };

    return (
        /* Formulaire de contact contenant :
        - Nom, Prénom, Adresse mail, Nom d'entreprise, Date/Heure
         de début/fin de location & message (optionnel) */
        <div className='formulaire'>
            <form onSubmit={sendEmail}>
                <label>Nom*</label>
                <input type='text' name="Nom" required></input>
                <label>Prénom*</label>
                <input type='text' name="Prenom" required></input>
                <label>Adresse mail*</label>
                <input type='email' name="AdresseMail" required></input>
                <label>Nom d'entreprise*</label>
                <input type='text' name="NomEntreprise" required></input>
                <label>Date et heure de début de location*</label>
                <input type='datetime-local' name="DateDebutLocation" required></input>
                <label>Date et heure de fin de location*</label>
                <input type='datetime-local' name="DateFinLocation" required></input>
                <label>Message</label>
                <textarea rows='6' name="message" placeholder='Votre message ...' />
                <button className='btn'>Soumettre</button>
                <div>{result ? <Result /> : null} </div>
            </form>

        </div>
    )
}

export default Formulaire