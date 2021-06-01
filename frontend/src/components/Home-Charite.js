import React from 'react';
import CardCharite from './CardCharite';
import { Container, Button, Row, Col,
} from 'reactstrap';
import Charite from './Charite';

function HomeCharite() {
  return (

    <div className="App">
      <Container className="full-width">
        <Charite/>
        <Row>
          <Col xs="12" style={{display: 'flex', justifyContent: 'center'}}>
            <h2 className="titre-h2-bis">Ces personnes proposent leurs compétences</h2>
          </Col>
        </Row>
          <CardCharite/>
          <Col xs="12" style={{display: 'flex', justifyContent: 'center'}}>
            <Button style={{backgroundColor:'#803BCA'}}>VOIR PLUS</Button>
          </Col>
          <Row>
          <Col xs="12" style={{display: 'flex', justifyContent: 'center'}}>
            <h3 className="titre-autre">Si vous souhaitez en savoir plus sur les personnes qui proposent leurs compétences, veuillez vous inscrire ci-dessous ou vous connecter</h3>
            </Col>
            <Col xs="12" style={{display: 'flex', justifyContent: 'center'}}>
            <Button style={{backgroundColor:'#2a9d8f', color:'black', marginRight:'20px', marginBottom:'100px' }}>INSCRIPTION</Button>
            <Button style={{backgroundColor:'#803BCA', marginLeft:'20px', marginBottom:'100px', fontFamily: 'Roboto'}}>CONNECTION</Button>
          </Col>
          </Row>
      </Container>
    </div>
  );
}

export default HomeCharite;