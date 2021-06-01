import React from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import Benevoles from './components/Benevoles';
import CardBenevoles from './components/CardBenevoles';
import Header from './components/Header';

function HomeBenevoles() {
  return (

    <div className="App">
      <Container className="full-width">
      <Header/>
      <Home/>
        <Header/>
        <Benevoles/>
        <Row>
          <Col xs="12" style={{display: 'flex', justifyContent: 'center'}}>
            <h2 className="titre-h2">Les projets en recherche de compétences</h2>
          </Col>
        </Row>
          <CardBenevoles/>
          <Col xs="12" style={{display: 'flex', justifyContent: 'center'}}>
            <h3 className="titre-autre">Si vous souhaitez en savoir plus sur les projets en cours qui recherche des compétences, veuillez vous inscrire ci-dessous ou vous connecter</h3>
          </Col>
      </Container>
    </div>
  );
}

export default HomeBenevoles;