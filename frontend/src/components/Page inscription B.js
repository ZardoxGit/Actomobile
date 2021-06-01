import React from 'react';
import { Button, FormGroup, Label, Input, Col } from 'reactstrap';
import '../App.css';

const PageInscriptionB = (props) => {
  return (
    <Col xs="12" lg="6" xl="4"> 
    <div>
        <h1 style= {{fontFamily: 'Bebas Neue', marginLeft: '150px', marginTop:'65px', marginBottom:'40px', fontWeight:'cursive', fontSize: '60px'}}> S'INSCRIRE</h1>
        <FormGroup style={{marginLeft: '150px', marginTop:'30px'}}>
        <Label for="Prenom Benevole" style={{fontFamily: 'Roboto', fontWeight:'300', fontSize:'14px'}}>Email</Label>
        <Input type="email" name="email" id="emailB" placeholder="Incrivez votre adresse email" bsSize="sm" />
      </FormGroup>

      <FormGroup style={{marginLeft: '150px', marginTop:'30px'}}>
        <Label for="Prenom Benevole" style={{fontFamily: 'Roboto', fontWeight:'300', fontSize:'14px'}}>Mot de Passe</Label>
        <Input type="password" name="pas" id="firstnameB" placeholder="Inscrire un Mot de Passe" bsSize="sm" />
      </FormGroup>

      <FormGroup style={{marginLeft: '150px', marginTop:'30px'}}>
        <Label for="Prenom Benevole" style={{fontFamily: 'Roboto', fontWeight:'300', fontSize:'14px'}}>Mot de Passe</Label>
        <Input type="password" name="pas" id="firstnameB" placeholder="Répéter le Mot de Passe" bsSize="sm" />
      </FormGroup>

      <Button style={{marginLeft: '150px', marginTop:'30px', backgroundColor: '#2a9d8f', color: 'white',fontFamily: 'Roboto', fontSize:'13px', marginBottom:'40px'}}>S'INSCRIRE</Button>
    </div>
    </Col>
  );
}

export default PageInscriptionB;