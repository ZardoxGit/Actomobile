import React, {useState} from 'react';
import { Label, Input, Button} from 'reactstrap';
import './App.css';
import {Link, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import {connect} from 'react-redux'
import token from './reducers/token'
import Select from 'react-select';  

const ScreenInscriptionOeuvre = (props) => {

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
    const [signUpEntiteName, setSignUpEntiteName] = useState('')
    const [signUpApe, setSignUpApe] = useState('')
    const [signUpVille, setSignUpVille] = useState('')
    const [signUpVisibility, setSignUpVisibility] = useState('')
    const [signUpDesc, setSignUpDesc] = useState('')
    const [validatedInscription, setValidatedInscription] = useState(false)


    const handleSubmitSignupForm = async () => {

        console.log('click')
    
        const data = await fetch('/users/charity-sign-up-form', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body:`nameFromFront=${signUpName}&firstNameFromFront=${signUpFirstName}&entiteFromFront=${signUpEntiteName}&apeFromFront=${signUpApe}&villeFromFront=${signUpVille}&descFromFront=${signUpDesc}&visibiliteFromFront=${signUpVisibility.value}&token=${props.token}`
        })
    
        const body = await data.json()

        console.log(body);

        if(body.result === true){
            setValidatedInscription(true)

    } };

    if(validatedInscription){
        return <Redirect to='/screendashboardoeuvre'/>
    }

    const handleChangeVisible =  (value) => {
        setSignUpVisibility(value);
    }


    return (
        <div className="full-width bg-inscription-formulaire-asso">
            <Header/>
            <div className="full-width"> 
                
                <div>
                    <h1 className='titre-h1-page'>Inscription</h1>
                    <div className="full-width">
                        <div className='formulaire-default'>
                            <Label for="Nom Benevole" className='formulaire-label'>Prénom</Label>
                            <Input onChange={(e) => setSignUpFirstName(e.target.value)} type="lastname" name="lastname" id="lastnameB" placeholder="Jacques" bsSize="sm" />
                        </div>

                        <div className='formulaire-default'>
                            <Label for="Prenom Benevole" className='formulaire-label'>Nom</Label>
                            <Input onChange={(e) => setSignUpName(e.target.value)} type="firstname" name="firstname" id="firstnameB" placeholder="Grandjean" bsSize="sm" />
                        </div>
                        
                        <div className='formulaire-default'>
                            <Label for="entite" className='formulaire-label'>Nom entité</Label>
                            <Input onChange={(e) => setSignUpEntiteName(e.target.value)} type="entite" name="entite" id="entiteA" placeholder="Association B" bsSize="sm" />
                        </div>

                        <div className='formulaire-default'>
                            <Label for="ape" className='formulaire-label facultatif'>Code APE</Label>
                            <Input onChange={(e) => setSignUpApe(e.target.value)} type="ape" name="ape" id="ape" placeholder="Veuillez renseigner votre code APE" bsSize="sm" />
                        </div>

                        <div className='formulaire-default'>
                            <Label for="ville" className='formulaire-label'>Ville</Label>
                            <Input onChange={(e) => setSignUpVille(e.target.value)} type="ville" name="ville" id="ville" placeholder="Paris" bsSize="sm" />
                        </div>

                        <div className='formulaire-default'>
                            <Label for="exampleText" className='formulaire-label facultatif'>Votre Description (facultatif)</Label>
                            <Input onChange={(e) => setSignUpDesc(e.target.value)} type="textarea" name="text" id="experience-pro" placeholder="Veuillez-écrire quelques mots à propos de vous" bsSize="sm"/>
                        </div>

                        <div className='formulaire-default'>
                            <Label for="exampleSelect" className='formulaire-label'>La Visibilité De Votre Projet</Label>
                            <Select 
                                placeholder="Veuillez-choisir la visibilité de votre profil"
                                options={selectVisibilite}
                                onChange={handleChangeVisible}
                            />
                        </div>
                
                    </div>

                    <Link  onClick={() => handleSubmitSignupForm()} className='button-default-small' style={{marginLeft: '10%', marginTop:'40px !important'}}>S'INSCRIRE</Link>
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
)(ScreenInscriptionOeuvre);