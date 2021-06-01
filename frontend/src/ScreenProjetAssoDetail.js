import React, { useEffect, useState } from 'react';
import './App.css';
import {Link, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { connect } from 'react-redux'

const ScreenProjetAssoDetail = (props) => {
    console.log(props.value)

    let tableauCompetences = props.value.competence.map((skill, i)=>{
        return(
            <p className="texte-competences-liste">{skill.value}</p> 
        )
    })


    return (
        <div className="full-width bg-projet-detail-asso">
            <Header/>
            <div className="full-width"> 

                <div style={{display:'flex', alignItems:'center'}}>

                    <img className="image-projet-detail" src="/images/detailprojet.jpg" alt="a generic background" />

                    <div>
                        <h1 className="titre-h1-page">{props.value.title}</h1>
                        <p className='text-projet-detail'>Ce fabuleux projet débutera le {new Date(props.value.startDate).toLocaleDateString()}</p>
                        <p className='text-projet-detail'>Il se terminera le {new Date(props.value.endDate).toLocaleDateString()}</p>
                        {/* <p className='text-projet-detail'>Association description</p> */}
                    </div>
                </div>

                <div style={{marginTop:'40px'}}> 
                    <div className='card-projet-detail' style={{display: 'flex'}}>
                        <div>
                            <p className='titre-compétences'>Compétences requises</p>
                            {tableauCompetences}
                        </div>
                    </div>
                </div>
                <div style={{marginTop:'50px'}}> 
                    <div className='card-projet-detail'>
                        <p className='text-dashboard'>{props.value.desc}</p>  
                    </div>
                </div>
                {/* <div style={{marginTop:'50px'}}> 
                    <div className='card-projet-detail'>
                        <p className='text-dashboard'>Nunc accumsan, lectus nec ullamcorper dapibus, velit magna commodo diam, quis blandit metus enim ac tellus. Phasellus egestas dui at interdum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris semper vehicula porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>  
                    </div>
                </div> */}

                <div style={{marginTop:'60px', display:'flex', justifyContent:'center'}}>
                    <Link className='button-default' to='/screendashboardoeuvre'>OK</Link>
                </div>

                {/* <div style={{marginTop:'60px', display:'flex', justifyContent:'flex-end'}}>
                    <Link to='editproject'className='button-default-purple' style={{marginRight:'10%'}}>MODIFIER</Link>
                </div> */}

                <Footer/>
            </div>
        </div>
    );
}

function mapStateToProps(state){
    return {value: state.dataProject}
}

export default connect(
    mapStateToProps,
    null
)(ScreenProjetAssoDetail);