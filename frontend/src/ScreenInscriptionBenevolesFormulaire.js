import React, {useState} from 'react';
import { Label, Input, FormText } from 'reactstrap';
import './App.css';
import {Link, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import {connect} from 'react-redux'
import token from './reducers/token'
import Select from 'react-select';  

const ScreenInscriptionBenevolesFormulaire = (props) => {

    const selectCompetence = [
        {
            value: 'Menuisier',
            label: 'Menuisier'
        },
        {
            value: 'Infirmier(e)',
            label: 'Infirmier(e)'
        },
        {
            value: 'Médecin',
            label: 'Médecin'
        },
        {
            value: 'Marketing et conception de vidéos',
            label: 'Marketing et conception de vidéos'
        },
        {
            value: 'Mécanicien(e)',
            label: 'Mécanicien(e)'
        },

        {
            value: 'Vétérinaire',
            label: 'Vétérinaire'
        },

        {
            value: 'Biologie',
            label: 'Biologie'
        },
        {
            value: 'Maçon',
            label: 'Maçon'
        },

        {
            value: 'Oceanologie',
            label: 'Oceanologie'
        },

        {
            value: 'Photographie',
            label: 'Photographie'
        },
        {
            value: 'Professeur des écoles',
            label: 'Professeur des écoles'
        },
        {
            value: 'Musicien',
            label: 'Musicien'
        },
        {
            value: 'Traducteur(rice)',
            label: 'Traducteur(rice)'
        },
        {
            value: 'Plombier',
            label: 'Plombier'
        },
        
        {
            value: 'Cloud Computing',
            label: 'Cloud Computing',
        },
        {
            value: 'Web analytique',
            label: 'Web analytique',
        },
        {
            value: 'IA (Intelligence Artificielle)',
            label: 'IA (Intelligence Artificielle)',
        },
        {
            value: 'UX Design',
            label: 'UX Design',
        },
        {
            value: 'Développement commercial',
            label: 'Développement commercial',
        },
        {
            value: 'Informatique',
            label: 'Informatique',
        },
        {
            value: 'Web Design',
            label: 'Web Design',
        },
        {
            value: 'Oceanologie',
            label: 'Oceanologie'
        },
        {
            value: 'Photographie',
            label: 'Photographie'
        },
        {
            value: 'Vétérinaire',
            label: 'Vétérinaire'
        },
        {
            value: 'Biologie',
            label: 'Biologie'
        },
    ];

    const selectDispo = [
        {
            value: 'À distance',
            label: 'À distance',
        },
        {
            value: 'Locale',
            label: 'Locale',
        },
        {
            value: 'Les Deux',
            label: 'Les Deux',
        }
    ];

    const selectVisibilite = [
        {
            value: 'Public',
            label: 'Public (tout le monde peux voir votre profil, connecté ou pas)',
        },
        {
            value: 'Limité',
            label: `Limité (seules les associations connectées à l'application peuvent voir votre profil)`,
        },
        {
            value: 'Privé',
            label: 'Privé (personne ne peux voir votre profil sans un premier contact de votre part)',
        }
    ]

    const [signUpName, setSignUpName] = useState('')
    const [signUpFirstName, setSignUpFirstName] = useState('')
    const [signUpVille, setSignUpVille] = useState('')
    const [signUpSkill, setSignUpSkill] = useState([])
    const [signUpExpPro, setSignUpExpPro] = useState('')
    const [signUpDispo, setSignUpDispo] = useState(null)
    const [signUpVisibility, setSignUpVisibility] = useState(null)
    const [signUpCV, setSignUpCV] = useState(null)
    const [signUpDesc, setSignUpDesc] = useState('')
    const [signUpImage, setSignUpImage] = useState('')

    const [formulaireOK, setFormulaireOK] = useState(false)

    var handleSubmitSignupForm = async () => {
    
        const data = await fetch('/users/volunteer-sign-up-form', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body:`nameFromFront=${signUpName}&firstNameFromFront=${signUpFirstName}&villeFromFront=${signUpVille}&skillFromFront=${JSON.stringify(signUpSkill)}&expProFromFront=${signUpExpPro}&dispoFromFront=${signUpDispo.value}&visibiliteFromFront=${signUpVisibility.value}&descFromFront=${signUpDesc}&cvFromFront=${signUpCV}&token=${props.token}`
        })
    
        const body = await data.json()

        console.log(body.result)

        if (body.result === true) {
            setFormulaireOK(true)
        }

    }

    if (formulaireOK){
        return <Redirect to='/screendashboardbenevoles'/>
    }

    const handleChange =  (value) => {
        setSignUpSkill(value);
    }

    const handleChangeDispo =  (value) => {
        setSignUpDispo(value);
    }

    const handleChangeVisible =  (value) => {
        setSignUpVisibility(value);
    }



    return (
        <div className="full-width bg-inscription-formulaire">
            <Header/>
            <div className="full-width"> 
                
                <div>
                    <h1 className='titre-h1-page'>Inscription</h1>
                    <div className="full-width">
                        <div className='formulaire-default'>
                            <Label for="Nom Benevole" className='formulaire-label'>Nom</Label>
                            <Input onChange={(e) => setSignUpName(e.target.value)} type="lastname" name="lastname" id="lastnameB" placeholder="Grandjean" bsSize="sm" />
                        </div>

                        <div className='formulaire-default'>
                            <Label for="Prenom Benevole" className='formulaire-label'>Prénom</Label>
                            <Input onChange={(e) => setSignUpFirstName(e.target.value)} type="firstname" name="firstname" id="firstnameB" placeholder="Jacques" bsSize="sm" />
                        </div>
                        
                        <div className='formulaire-default'>
                            <Label for="ville" className='formulaire-label'>Ville</Label>
                            <Input onChange={(e) => setSignUpVille(e.target.value)} type="city" name="city" id="cityB" placeholder="Ville" bsSize="sm" />
                        </div>
                        
                        <div className='formulaire-default'>
                            <Label for="exampleSelectMulti" className='formulaire-label'>Sélectionnez vos compétences</Label>
                            <Select 
                                placeholder="Veuillez-choisir vos compétences" 
                                value={signUpSkill}
                                options={selectCompetence}
                                onChange={handleChange}  
                                isMulti
                            />
                        </div>

                        <div className='formulaire-default'>
                            <Label for="exampleText" className='formulaire-label facultatif'>Vos Expériences Professionnelles (facultatif)</Label>
                            <Input onChange={(e) => setSignUpExpPro(e.target.value)} type="textarea" name="text" id="experience-pro" placeholder="Veuillez-lister vos précédentes expériences en rapport avec vos compétences" bsSize="sm" />
                        </div>

                        <div className='formulaire-default'>
                            <Label for="exampleSelect" className='formulaire-label'>Vos Disponibilités</Label>
                            <Select 
                                placeholder="Veuillez-choisir votre mode de participation"
                                options={selectDispo}
                                onChange={handleChangeDispo}
                            />
                        </div>

                        <div className='formulaire-default'>
                            <Label for="exampleSelect" className='formulaire-label'>Votre Visibilité</Label>
                            <Select 
                                placeholder="Veuillez-choisir la visibilité de votre profil"
                                options={selectVisibilite}
                                onChange={handleChangeVisible}
                            />
                        </div>

                        <div className='formulaire-default'>
                            <Label for="exampleText" className='formulaire-label facultatif'>Votre Description (facultatif)</Label>
                            <Input onChange={(e) => setSignUpDesc(e.target.value)} type="textarea" name="text" id="experience-pro" placeholder="Veuillez-écrire quelques mots à propos de vous" bsSize="sm"/>
                        </div>

                        <div className='formulaire-default'>
                            <Label for="exampleFile" className='formulaire-label facultatif'>Télécharger votre CV (facultatif)</Label>
                            <Input onChange={(e) => setSignUpCV(e.target.files[0])} type="file" name="file" id="exampleFile" placeholder= "Veuillez-télécharger votre CV" />
                            <FormText color="muted">
                            Veuillez-télécharger votre CV
                            </FormText>
                        </div>

                        <div className='formulaire-default'>
                            <Label for="exampleText" className='formulaire-label facultatif'>Image de profil</Label>
                            <Input onChange={(e) => setSignUpImage(e.target.value)} type="file" placeholder="Veuillez " bsSize="sm"/>
                        </div>
                
                    </div>

                    <Link onClick={() => handleSubmitSignupForm()} className='button-default-small' style={{marginLeft: '10%', marginTop:'40px !important'}}>S'INSCRIRE</Link>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

function mapStateToProps(state){
    return {token: state.token}
}


export default connect(
    mapStateToProps,
)(ScreenInscriptionBenevolesFormulaire );
