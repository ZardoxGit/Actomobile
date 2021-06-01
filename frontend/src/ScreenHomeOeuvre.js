import React, { useEffect, useState } from 'react';
import {
    Row, Col
} from 'reactstrap';
import {Link} from 'react-router-dom';
import Charite from './components/Charite';
import CardCharite from './components/CardCharite';
import Header from './components/Header';
import Footer from './components/Footer';

function ScreenHomeBenevoles() {

    const [skillList, setSkillList] = useState([])
    const [isLimited, setIsLimited] = useState(true)

    useEffect(() => {
        const findSkills = async() => {
            const data = await fetch(`/preview-benevoles-bank/${isLimited}`);
            const body = await data.json()

            console.log(body.benevoleList)

            setSkillList(body.benevoleList) 
        }
    
        findSkills()    
    },[isLimited])

    let skillBankList = skillList.map((user, i) => {
        return (
            <CardCharite nom={user.nom} prenom={user.prenom} desc={user.desc} skills={user.competences} />
        )
    })

    return (

        <div className="App">
            <div className="full-width">
                <Header/>
                <Charite/>
                <div style={{marginTop:'50px', marginRight: '10%', marginLeft:'10%'}}> 
                        <p className='normal-text-home-oeuvre'>L’un de vos projets a dû mal à démarrer ou avancer par manque de moyens? Que vous soyez une entité caritative ou un activiste, Actomobile vous aide à trouver les compétences qu’ils vous manquent pour faire avancer vos projets gratuitement.
                        </p>
                </div>
                <Row>
                    <Col xs="12" style={{display: 'flex', justifyContent: 'center'}}>
                    <h2 className="titre-h2-bis">Ces personnes proposent leurs compétences</h2>
                    </Col>
                </Row>
                <div className='bg-home-asso'>
                <Row className="card-competence">
                    {skillBankList}
                </Row>
                </div>
                    {/*<Col xs="12" style={{display: 'flex', justifyContent: 'center'}}>
                        <Link onClick={() => setIsLimited(false)} className="button-default">VOIR PLUS</Link>
                    </Col> */}
                <Row>
                    <Col xs="12" style={{display: 'flex', justifyContent: 'center'}}>
                    <h3 className="titre-autre">Si vous souhaitez en savoir plus sur les personnes qui proposent leurs compétences, veuillez vous inscrire ci-dessous ou vous connecter</h3>
                    </Col>
                    <Col xs="12" style={{display: 'flex', justifyContent: 'center'}}>
                        <Link to='/screeninscriptionbenevoles' className="button-default">INSCRIPTION</Link>
                        <Link to='/screenconnectionbenevoles' className="button-default-purple">CONNECTION</Link>
                    </Col>
                </Row>
                <Footer/>
            </div>
        </div>
    );
}

export default ScreenHomeBenevoles;