import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ButtonMailto from './components/ButtonMailto';
import { connect } from 'react-redux';


const ScreenDashboardOeuvre = (props) => {

    const [assoName, setAssoName] = useState('');
    const [projets, setProjets] = useState([]);

    // console.log(props.token);

    useEffect(() => {
        const assoDatas = async () => {
            const request = await fetch(`/dashboard-oeuvre?token=${props.token}`);
            const response = await request.json();
            setProjets(response.projets);
            setAssoName(response.nomEntite)
        };
        assoDatas()
    }, [])

    return (
        <div className="full-width bg-dashboard-asso">
            <Header />
            <div className="full-width">

                <h1 className="titre-h1-page">BIENVENUE {assoName.toUpperCase()} !</h1>

                <div style={{ marginBottom: '50px' }}>
                    <Link to='/screencreationprojet' className="button-default-purple" style={{ marginLeft: '10%' }}>CRÉER UN PROJET</Link>
        
                    <Link to='/screenskillbank' className="button-default" style={{ marginLeft: '30%' }}>CHERCHER DIRECTEMENT DES COMPÉTENCES</Link>
                </div>
                {/*<div style={{ marginBottom: '50px' }}>
                    <Link to='/' className="button-default-purple" style={{ marginLeft: '10%' }}>MESSAGERIE</Link>
    </div>*/}

                <h2 className="titre-h2-page">MES PROJETS</h2>

                
                    {
                        projets.map((projet, i) => {
                            return (
                                <div className='card-dashboard' style={{ display: 'flex', marginBottom:'30px' }}>
                                    <div>
                                        <img className="image-dashboard" src='/images/detailprojet.jpg' style={{width:'240px', height:'auto'}} alt="a generic background" />
                                    </div>
                                    <div className='dashboard-content'>
                                        <p className='titre-card-type-2 no-mp' >{projet.title}</p>
                                        <p className='text-dashboard'>{projet.desc}</p>
                                    </div>
                                    <div>
                                        <Link onClick={()=> props.projectDetails(projet)} to='/screengestionprojet' className='button-default'>GERER LE PROJET</Link>
                                    </div>
                                </div>
                            )
                        })
                    }

                

                {/* <div style={{ marginBottom: '40px' }}>
                    <div className='card-dashboard' style={{ display: 'flex' }}>
                        <div>
                            <img className="image-dashboard" src='/images/home-bene/projet2.png' alt="a generic background" />
                        </div>
                        <div className='dashboard-content'>
                            <p className='titre-card-type-2 no-mp' >Titre Projet 1</p>
                            <p className='text-dashboard'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
                        </div>
                        <div>
                            <Link to='/screenprojetassodetail' className='button-default'>GÉRER LE PROJET</Link>
                        </div>
                    </div>
                </div> */}

                {/* <h2 className="titre-h2-page">MES PROJETS FINIS </h2>

                <div style={{marginBottom:'40px'}}> 
                    <div className='card-dashboard' style={{display: 'flex'}}>
                        <div>
                            <img className="image-dashboard" src='/images/home-bene/projet3.png' alt="a generic background" />
                        </div>
                        <div className='dashboard-content'>
                            <p className='titre-card-type-2 no-mp' >Titre Projet 1</p>
                            <p className='text-dashboard'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>  
                        </div>
                        <div>
                            <Link className='button-default'>GÉRER LE PROJET</Link>
                        </div>
                    </div>
                </div>         */}

                <h2 className="titre-h2-page">MES CANDIDATS</h2>

                <div style={{ marginBottom: '40px' }}>
                    <div className='card-dashboard' style={{ display: 'flex' }}>
                        <div>
                            <img className="image-dashboard-asso" src="/images/mikael.jpg" alt="a generic background" />
                        </div>
                        <div className='dashboard-content-asso'>
                            <p className='titre-card-type-2 no-mp' >Mikael Bihouise</p>
                            <p className='text-dashboard'>Je suis un web designer de métier en reconversion vers le developpement web et mobile. Les causes environnementales me touchent particulièrement donc n'hésitez pas à me contacter si vous avez besoin d'aide avec votre site ou application!</p>
                        </div>
                        <div>
                            <Link mailto='lucile@gmail.com' className='button-default-small'>CONTACTER</Link>
                            <Link className='button-default-small'>VALIDER LA CANDIDATURE</Link>
                            <Link className='button-default-small-red'>REFUSER LA CANDIDATURE</Link>
                        </div>
                    </div>
                </div>

                <div style={{ marginBottom: '40px' }}>
                    <div className='card-dashboard' style={{ display: 'flex' }}>
                        <div>
                            <img className="image-dashboard-asso" src="/images/Lucile.jpg" alt="a generic background" />
                        </div>
                        <div className='dashboard-content-asso'>
                            <p className='titre-card-type-2 no-mp' >Lucile Bourgoin</p>
                            <p className='text-dashboard'>Expatriée avec un anglais courant et des compétences commerciales, je souhaiterai participer à des actions environnementale. Je suis particulièrement intéressée par la cause climatique et animale</p>
                        </div>
                        <div>
                            <Link mailto='lucile@gmail.com' className='button-default-small'>CONTACTER</Link>
                            <Link className='button-default-small'>VALIDER LA CANDIDATURE</Link>
                            <Link className='button-default-small-red'>REFUSER LA CANDIDATURE</Link>
                        </div>
                    </div>
                </div>

                <h2 className="titre-h2-page">Mes bénévoles</h2>

                <div style={{ display: 'flex', marginBottom: '40px' }}>
                    <div className="card-dashboard-asso">
                        <div>
                            <img className="image-dashboard-profil" src="/images/steph.jpg" alt="a generic background" />
                        </div>
                        <div className='dashboard-content' style={{ alignItems: 'center' }}>
                            <p className='titre-card-type-2 no-mp'>Stéphanie Beauchemin</p>
                        </div>
                        <div>
                            <img className="image-dashboard-profil" src="/images/imgProfilDashboard.jpg" alt="a generic background" />
                        </div>
                        <div className='dashboard-content' style={{ alignItems: 'center' }}>
                            <p className='titre-card-type-2 no-mp'>Jacques GrandJean</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', marginBottom: '40px' }}>
                    <div className="card-dashboard-asso">
                        <div>
                            <img className="image-dashboard-profil" src="/images/benevole1.jpg" alt="a generic background" />
                        </div>
                        <div className='dashboard-content' style={{ alignItems: 'center' }}>
                            <p className='titre-card-type-2 no-mp'>Hélène Dubois</p>
                        </div>
                        <div>
                            <img className="image-dashboard-profil" src="/images/benevole2.jpg" alt="a generic background" />
                        </div>
                        <div className='dashboard-content' style={{ alignItems: 'center' }}>
                            <p className='titre-card-type-2 no-mp'>Marie Leguyet</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', marginBottom: '40px' }}>
                    <div className="card-dashboard-asso">
                        <div>
                            <img className="image-dashboard-profil" src="/images/profil/imgProfil.png" alt="a generic background" />
                        </div>
                        <div className='dashboard-content' style={{ alignItems: 'center' }}>
                            <p className='titre-card-type-2 no-mp'>Jean Evry</p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return { token: state.token }
};

function mapDispatchToProps(dispatch){
    return {
        projectDetails: function(project){
            return dispatch({type: 'addValue', value: project})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenDashboardOeuvre);