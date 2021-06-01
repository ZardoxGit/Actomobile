import React from 'react';
import { Label, Input } from 'reactstrap';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faTimes } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const ScreenProfilBenevole = (props) => {
    return (
        <div className="full-width bg-profil">
            <Header/>
            <div className="full-width"> 
                
                <h1 className="titre-h1-page">Mon profil</h1>

                <div>
                    <div className="card-dashboard"> 
                        <div>
                            <img className="image-dashboard-profil" src="/images/profil/imgProfil.png" alt="a generic background" />
                        </div>
                        <div className='dashboard-content' style={{alignItems:'center'}}>
                            <p className='titre-card-type-2 no-mp'>Jean Ipsum</p>
                        </div>
                        <div>
                            <Link className='button-default-small-purple'>ÉDITER</Link>
                        </div>
                    </div>
                    <div className="card-dashboard"> 
                        <p className='text-dashboard-profil'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>  
                    </div>
                </div>

                <div>
                    <h2 className="titre-h2-page rmv-mb">Mes Compétences</h2>

                    <div className='formulaire-default-profil'>
                        <Label for="exampleSelectMulti" className='formulaire-label'>Sélectionnez vos compétences</Label>
                        <Input type="select" name="selectMulti" id="examplSelectMulti" multiple placeholder="Veuillez-choisir vos compétences" bsSize="sm">
                        <option>Compétence 1</option>
                        <option>Compétence 2</option>
                        <option>Compétence 3</option>
                        <option>Compétence 4</option>
                        <option>Compétence 5</option>
                        </Input>
                    </div>
                    <Link className='button-default-small-purple' style={{margin:'20px 0 0 10%'}}>Valider</Link>

                </div>

                <div style={{display:'flex'}}>
                    <div className='liste-de-competence-profil'>
                        <p className='text-competence-profil'><FontAwesomeIcon icon={faHandsHelping} style={{color: '#262626', marginRight: '25px', marginBottom:'0px', fontSize:'22px'}} />Plombier<FontAwesomeIcon icon={faTimes} style={{color: '#262626', float:'right', marginTop:'4px', fontSize:'22px'}} /></p>
                    </div>
                </div>

                <h2 className="titre-h2-page rmv-mb">MES CONVICTIONS</h2>
                <Link className='button-default-small-purple' style={{marginLeft:''}}>EDITER</Link>
                <div className="card-dashboard">
                    <p className='text-dashboard-profil'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>  
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default ScreenProfilBenevole;