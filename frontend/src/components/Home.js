import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody, CardTitle, Container, Col, Row, CardHeader } from 'reactstrap';
import '../App.css';
import generic1 from '../images/generic-1.png';

const cardHome = (props) => {
    return (
     
      <Container>
        
    <div className="opacity-20-dark">
        <img className='image-header ratio-ok' src={"/images/associations.jpg"} style={{height: "auto", width: "50%"}}/>
        <img className='image-header ratio-ok' src={"/images/benevoles.jpg"} style={{height: "auto", width: "50%"}}/>
      <div className='titre-image-home-bene'>
        <h1 className="titre-h1">Bénévoles</h1>
      </div>
      <div className='titre-image-home-asso'>
        <h1 className="titre-h1">Oeuvres Caritatives</h1>
      </div>
    </div>

      <div>
        <h3 className="titre-h3" style={{display: 'flex', justifyContent: 'center', marginTop: 100}}>Les Actualités</h3>
      </div>
      
        
          <Row style={{marginTop: 100}}>
          <Col xs="12" lg="6" xl="4">
        <Card>
          <CardImg top width="100%" src={generic1} alt="Card image cap" />
          <CardBody>
            <CardTitle className="titre-h3" style={{display: 'flex', justifyContent: 'center'}}>Environnement</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
          </CardBody>
        </Card>
        </Col>

        <Col xs="12" lg="6" xl="4">
        <Card>
          <CardImg top width="100%" src={generic1} alt="Card image cap" />
          <CardBody>
            <CardTitle className="titre-h3" style={{display: 'flex', justifyContent: 'center'}}>Pauvreté</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
          </CardBody>
        </Card>
        </Col>

        <Col xs="12" lg="6" xl="4">
        <Card>
          <CardImg top width="100%" src={generic1} alt="Card image cap" />
          <CardBody>
            <CardTitle className="titre-h3" style={{display: 'flex', justifyContent: 'center'}}>Solidarité</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
          </CardBody>
        </Card>
        </Col>
        </Row>
        <div>

      <Card style={{width: "50%", marginTop: 150}}>
        <CardHeader className="titre-h3">En action</CardHeader>
        <CardBody>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
        </CardBody>
      </Card>
      </div>

      <div>
      <Row style={{marginTop: 150}}>
          <Col xs="12" lg="6" xl="4">
        <Card>
          <CardBody>
            <CardTitle className="titre-h3" style={{display: 'flex', justifyContent: 'center'}}>Lorem Ipsum</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
          </CardBody>
        </Card>
        </Col>

        <Col xs="12" lg="6" xl="4">
        <Card>
          <CardBody>
            <CardTitle className="titre-h3" style={{display: 'flex', justifyContent: 'center'}}>Lorem Ipsum</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
          </CardBody>
        </Card>
        </Col>

        <Col xs="12" lg="6" xl="4">
        <Card>
          <CardBody>
            <CardTitle className="titre-h3" style={{display: 'flex', justifyContent: 'center'}}>Lorem Ipsum</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
          </CardBody>
        </Card>
        </Col>
        </Row>
        </div>
      </Container>
      
      
    );
  };


  export default cardHome;

