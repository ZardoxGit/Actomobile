import React, {useState, useEffect} from 'react';
import {
  Row, Col
} from 'reactstrap';
import {Link} from 'react-router-dom';
import Benevoles from './components/Benevoles';
import CardBenevoles from './components/CardBenevoles';
import Header from './components/Header';
import Footer from './components/Footer';

function ScreenHomeBenevoles() {

  const [projectList, setProjectList] = useState([])

    useEffect(() => {
        const findProjects = async() => {
            const data = await fetch(`/preview-project-bank-bene`);
            const body = await data.json()

            setProjectList(body.projectList) 
        }
    
        findProjects()    
    },[])

    let projectBankList = projectList.map((project, i) => {
        return (
            <CardBenevoles title={project.title} desc={project.desc} skills={project.competence} />
        )
    }) 

  return (

    <div>
      <div className="full-width">
        <Header/>
        <Benevoles/>
        <div style={{marginTop:'50px', marginRight: '10%', marginLeft:'10%'}}> 
          <p className='normal-text-home-oeuvre'>T’as des convictions et t’en a marre d’être limité  à la signature de pétitions et aux dons d’argent pour les soutenir? Tu te dis que le monde va mal et que t’aimerait bien contribuer concrêtement à sa relêve ? Tu t’ennuies pendant le confinement ou t’as un peu de temps le soir et/ou le weekend? Offre tes talents gratuitement à divers projets caritatifs actifs où naissant dans le besoin! </p>  
        </div>
        <Row>
          <Col xs="12" style={{display: 'flex', justifyContent: 'center'}}>
            <h2 className="titre-h2">Les projets en recherche de compétences</h2>
          </Col>
        </Row>

        <Row className="card-project">
          {projectBankList}
        </Row>

          <Col xs="12" style={{display: 'flex', justifyContent: 'center'}}>
            <h3 className="titre-autre">Si vous souhaitez en savoir plus sur les projets en cours qui recherche des compétences, veuillez vous inscrire ci-dessous ou vous connecter</h3>
          </Col>
      </div>

      <div style={{display:'flex', justifyContent:'center'}}>
        <Link to='/screeninscriptionbenevoles' className="button-default">INSCRIPTION</Link>
        <Link to='/screenconnectionbenevoles' className="button-default-purple">CONNECTION</Link>
      </div>

      <Footer/>
    </div>
  );
}

export default ScreenHomeBenevoles;