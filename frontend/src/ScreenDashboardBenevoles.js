import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const ScreenDashboardBenevoles = (props) => {
    return (
        <div className="full-width bg-profil">
            <Header/>
            <div className="full-width"> 
                
                <h1 className="titre-h1-page">TABLEAU DE BORD</h1>

                <div>
                    <Link to='/screenprojectbank' className="button-default" style={{marginLeft:'10%'}}>CHERCHER UNE CAUSE</Link>
                </div>

                <h2 className="titre-h2-page">MES PROJETS EN COURS</h2>

                <div style={{marginBottom:'40px'}}> 
                    <div className='card-dashboard' style={{display: 'flex'}}>
                        <div>
                            <img className="image-dashboard" src='/images/home-bene/projet1.png' alt="a generic background" />
                        </div>
                        <div className='dashboard-content'>
                            <p className='titre-card-type-2 no-mp'>Campagne Pour Sauver Les Baleines</p>
                            <p className='text-dashboard'>BlueWhale souhaite lancer une campagne digitale globale pendant l'été pour éveiller les consciences sur la situation des Baleines, plus que préoccupantes selon 350 scientifiques et défenseurs de la cause animale issus d’une quarantaine de pays. Notre budget est malheureusement très limité, et nous une personne bienveillante qui pourrait nous aider à développer une campagne de sensibilisation globale. Serez-vous notre Heros tant attendu du monde marin?</p>  
                        </div>
                        <div>
                            <Link className='button-default'>QUITTER LE PROJET</Link>
                        </div>
                    </div>
                </div>

            
                  
                
                <h2  className="titre-h2-page">MES CANDIDATURES</h2>

                <div style={{marginBottom:'40px'}}> 
                    <div className='card-dashboard' style={{display: 'flex'}}>
                        <div>
                            <img className="image-dashboard" src='/images/home-bene/projet3.png' alt="a generic background" />
                        </div>
                        <div className='dashboard-content'>
                            <p className='titre-card-type-2 no-mp' >Concert pour les enfants</p>
                            <p className='text-dashboard'>Musicool voudrait organiser un concert à Paris au profit des enfants défavorisés. Nous n'avons pas encore mis en place de structure légale mais nous recherchons activement divers professionnels pour donner vie à ce projet!</p>  
                        </div>
                        <div>
                            <Link className='button-default'>ANNULER MA CANDIDATURE</Link>
                        </div>
                    </div>
                </div>
                

                <h2 className="titre-h2-page">MON PROFIL</h2>

                <div>
                    <div className="card-dashboard"> 
                        <div>
                            <img className="image-dashboard-profil" src="/images/imgProfilDashboard.jpg" alt="a generic background" />
                        </div>
                        <div className='dashboard-content' style={{alignItems:'center'}}>
                            <p className='titre-card-type-2 no-mp'>Jacques Grandjean</p>
                        </div>
                        <div>
                            <Link to='/screenprofilbenevole' className='button-default-small'>MODIFIER MON PROFIL</Link>
                        </div>
                    </div>
                    <div className="card-dashboard"> 
                        <p className='text-dashboard-profil'>Fort d'un esprit entrepreneurial avec des compétences en web development, je souhaiterai aider des causes environnementales pendant mon temps libre. J'ai un profil très polyvalent et je pourrai surement faire avancer quelques projets!</p>  
                    </div>
                </div>

                <Footer/>
            </div>
        </div>
    );
}

export default ScreenDashboardBenevoles;