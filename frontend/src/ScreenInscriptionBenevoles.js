import React,{useState}   from 'react';
import { Label, Input } from 'reactstrap';
import './App.css';
import {Link, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Select from 'react-select';
import {connect} from 'react-redux'

const ScreenInscriptionBenevoles = (props) => {

    const dataSelect = [
      {
        value: 1,
        label: 'Bénévoles'
      },
      {
        value: 2,
        label: 'Oeuvre caritatives',
      }
    ];
    
    const [signUpEmail, setSignUpEmail] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')
    const [signUpType, setSignUpType] = useState()

    const [assoExists, setAssoExists] = useState(false)
    const [benevoleExists, setBenevoleExists] = useState(false)
    

    const [listErrorsSignup, setErrorsSignup] = useState([])

    var handleSubmitSignup = async () => {
    
        const data = await fetch('/users/sign-up', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}&typeFromFront=${signUpType.value}`
        })
    
        const body = await data.json()

        if(body.result === true && body.type === "Oeuvres caritatives"){
          props.addToken(body.token)
          setAssoExists(true)    
        } else {  
          setErrorsSignup(body.error)
        }
        
        if (body.result === true && body.type === "Bénévoles") {
          props.addToken(body.token)
          setBenevoleExists(true)
        } else {  
          setErrorsSignup(body.error)
        }
    }

    const handleChange =  (value) => {
      setSignUpType(value);
    }

    if(benevoleExists){
      return <Redirect to='/screeninscriptionbenevolesformulaire' />
    }  

    if(assoExists){
      return <Redirect to='/screeninscriptionoeuvreformulaire' />
    }    
    
      var tabErrorsSignup = listErrorsSignup.map((error,i) => {
        return(<p>{error}</p>)
      })

    return (
        <div className="full-width bg-inscription">
            <Header/>
            <div className="full-width"> 
                
                <div>
                    <h1 className='titre-h1-page'>S'INSCRIRE</h1>
                    <div className='formulaire-default'>
                        <Label className='formulaire-label' for="Prenom Benevole">Email</Label>
                        <Input onChange={(e) => setSignUpEmail(e.target.value)} placeholder="Incrivez votre adresse email" bsSize="sm" />
                    </div>

                    <div className='formulaire-default'>
                        <Label className='formulaire-label' for="mdp">Mot de Passe</Label>
                        <Input onChange={(e) => setSignUpPassword(e.target.value)} type="password" placeholder="Inscrire un Mot de Passe" bsSize="sm" />
                    </div>

                    <div className='formulaire-default'>
                        <Label for="type" className='formulaire-label'>Type de profil</Label>
                        <Select 
                          placeholder="Choississez votre type de profil"
                          value={signUpType}
                          options={dataSelect}
                          onChange={handleChange}  
                        />
                
                        {tabErrorsSignup}
                    
                    </div>


                    <Link onClick={() => handleSubmitSignup()}  className='button-default-small' style={{marginLeft: '10%', marginTop:'40px !important'}}>S'INSCRIRE</Link>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch){
  return {
    addToken: function(token){
      dispatch({type: 'addToken', token: token})
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ScreenInscriptionBenevoles);