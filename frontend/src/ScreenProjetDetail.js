import React, { useEffect, useState } from 'react';
import './App.css';
import {Link, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { connect } from 'react-redux'

const ScreenProjetDetail = () => {


    return (
        <div className="full-width bg-projet-detail-asso">
            <Header/>
            <div className="full-width"> 

                <div style={{display:'flex', alignItems:'center'}}>

                    <img className="image-projet-detail" src="/images/detailprojet.jpg" alt="a generic background" />

                    <div>
                        <h1 className="titre-h1-page">Concert pour les enfants</h1>
                        <p className='text-projet-detail'>Ce fabuleux projet débutera le 3/04/2021</p>
                        <p className='text-projet-detail'>Il se terminera le 31/08/2021</p>
                        {/* <p className='text-projet-detail'>Association description</p> */}
                    </div>
                </div>

                <div style={{marginTop:'40px'}}> 
                    <div className='card-projet-detail' style={{display: 'flex'}}>
                        <div>
                            <p className='titre-compétences'>Compétences requises</p>
                            <p> - Juridique</p>
                            <p> - Marketing et conception de vidéos</p>
                            <p> - Musicien</p>
                            <p> - Informatique</p>
                            <p> - Evènementiel</p>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:'50px'}}> 
                    <div className='card-projet-detail'>
                        <p className='text-dashboard'>Musicool voudrait organiser un concert à Paris au profit des enfants défavorisés. Nous n'avons pas encore mis en place de structure légale mais nous recherchons activement divers professionnels pour donner vie à ce projet!</p>  
                    </div>
                </div>
                {/* <div style={{marginTop:'50px'}}> 
                    <div className='card-projet-detail'>
                        <p className='text-dashboard'>Nunc accumsan, lectus nec ullamcorper dapibus, velit magna commodo diam, quis blandit metus enim ac tellus. Phasellus egestas dui at interdum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris semper vehicula porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>  
                    </div>
                </div> */}

                <div style={{marginTop:'60px', display:'flex', justifyContent:'center'}}>
                    <Link className='button-default' to='/screendashboardoeuvre'>Postuler</Link>
                </div>

                {/* <div style={{marginTop:'60px', display:'flex', justifyContent:'flex-end'}}>
                    <Link to='editproject'className='button-default-purple' style={{marginRight:'10%'}}>MODIFIER</Link>
                </div> */}

                <Footer/>
            </div>
        </div>
    );
}


export default (ScreenProjetDetail);