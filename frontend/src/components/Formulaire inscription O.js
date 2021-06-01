import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col} from 'reactstrap';
import '../App.css';

const FormulaireO = (props) => {
  return (
      <Col xs="12" lg="6" xl="4"> 
    <h1 style= {{fontFamily: 'Bebas Neue', marginLeft: '150px', marginTop:'65px', marginBottom:'40px', fontWeight:'cursive', fontSize: '60px'}}>INSCRIPTION </h1> 
    <Form>
        <FormGroup style={{marginLeft: '150px'}}>
        <Label for="Nom Benevole" style={{fontFamily: 'Roboto', fontWeight:'300', fontSize:'14px'}}>Nom</Label>
        <Input type="lastname" name="lastname" id="lastnameB" placeholder="Jacques" bsSize="sm" />
      </FormGroup>

      <FormGroup style={{marginLeft: '150px', marginTop:'30px'}}>
        <Label for="Prenom Benevole" style={{fontFamily: 'Roboto', fontWeight:'300', fontSize:'14px'}}>Prénom</Label>
        <Input type="firstname" name="firstname" id="firstnameB" placeholder="Grandjean" bsSize="sm" />
      </FormGroup>

      <FormGroup style={{marginLeft: '150px', marginTop:'30px'}}>
        <Label for="ville" style={{fontFamily: 'Roboto', fontWeight:'300', fontSize:'14px'}}>Nom Entité</Label>
        <Input type="city" name="city" id="cityB" placeholder="Oeuvre Caritative Jacques Grandjean" bsSize="sm" />
      </FormGroup>

      <FormGroup style={{marginLeft: '150px', marginTop:'30px'}}>
        <Label for="ville" style={{fontFamily: 'Roboto', fontWeight:'300', fontSize:'14px'}}>Code APE</Label>
        <Input type="city" name="city" id="cityB" placeholder="Veuillez renseigner votre code APE" bsSize="sm" />
      </FormGroup>
    
      <FormGroup style={{marginLeft: '150px', marginTop:'30px'}}>
        <Label for="ville" style={{fontFamily: 'Roboto', fontWeight:'300', fontSize:'14px'}}>Ville</Label>
        <Input type="city" name="city" id="cityB" placeholder="Lyon" bsSize="sm" />
      </FormGroup>

      <FormGroup style={{marginLeft: '150px', marginTop:'30px'}}>
        <Label for="exampleSelect" style={{ontFamily: 'Roboto', fontWeight:'300', fontSize:'14px'}}>Votre Visibilité</Label>
        <Input type="select" name="select" id="exampleSelect" placeholder="Veuillez-choisir la visibilité de votre profil" bsSize="sm">
          <option>Privé (personne ne peux voir votre profil sans un premier contact de votre part)</option>
          <option>Limité (seules les bénévoles connectés à l'application peuvent voir votre profil)</option>
          <option>Public (tout le monde peux voir votre profil, connecté ou pas)</option>
        </Input>
      </FormGroup>

        <FormGroup style={{marginLeft: '150px', marginTop:'30px'}}>
        <Label for="exampleText" style={{fontFamily: 'Roboto', fontWeight:'300', fontSize:'14px' }}>Votre Description (facultatif)</Label>
        <Input type="textarea" name="text" id="experience-pro" placeholder="Veuillez-écrire quelques mots à propos de vous et/ou de votre projet" bsSize="sm"/>
      </FormGroup>

      <Button style={{marginLeft: '150px', marginTop:'30px', backgroundColor: '#2a9d8f', color: 'white',fontFamily: 'Roboto', fontSize:'14px', marginBottom:'40px'}}>SAUVEGARDER</Button>
    </Form>
    </Col>
  );
}

export default FormulaireO;