import React, { useState } from 'react';
import { Label, Input} from 'reactstrap';
import './App.css';
import {Link, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import {connect} from 'react-redux'

const ScreenConnectionBenevoles = (props) => {

    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')

    const [assoExists, setAssoExists] = useState(false)
    const [beneExists, setBeneExists] = useState(false)

    const [listErrorsSignin, setErrorsSignin] = useState([])

    var handleSubmitSignin = async () => {

        const data = await fetch('/users/sign-in', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
        })
    
        const body = await data.json()

        console.log(body)
    
        if(body.result === true && body.userAssociation!==null){
            props.addToken(body.userAssociation.token)
            setAssoExists(true)
        } else if(body.result === true && body.userBenevole!==null) {
            props.addToken(body.userBenevole.token)
            setBeneExists(true)
        } else {
            setErrorsSignin(body.error)
        }
    };

    if(assoExists){
        return <Redirect to='/screendashboardoeuvre' />
    }
    
    if(beneExists){
        return <Redirect to='/screendashboardbenevoles' />
    }

    var tabErrorsSignin = listErrorsSignin.map((error,i) => {
        return(<p style={{marginLeft:'10%', color:'#DC3545'}}>{error}</p>)
    })
    

    return (
        <div className="full-width bg-inscription">
            <Header/>
            <div className="full-width"> 
                <div style={{marginBottom:'6.64%'}}>
                    <h1 className='titre-h1-page'>Connection</h1>
                    <div className='formulaire-default'>
                        <Label className='formulaire-label' for="Prenom Benevole">Email</Label>
                        <Input onChange={(e) => setSignInEmail(e.target.value)} type="email" name="email" id="emailB" placeholder="Incrivez votre adresse email" bsSize="sm" />
                    </div>

                    <div className='formulaire-default'>
                        <Label className='formulaire-label' for="mdp">Mot de Passe</Label>
                        <Input onChange={(e) => setSignInPassword(e.target.value)} type="password" name="pas" id="firstnameB" placeholder="Inscrire un Mot de Passe" bsSize="sm" />
                    </div>

                    {tabErrorsSignin}

                    <Link onClick={() => handleSubmitSignin()} className='button-default-small' style={{marginLeft: '10%', marginTop:'40px !important'}}>SE CONNECTER</Link>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch){
    return {
        addToken: function(token){
            console.log(token);
        dispatch(
            { type: 'addToken', token: token },
            
        );
    }, 
    
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ScreenConnectionBenevoles);