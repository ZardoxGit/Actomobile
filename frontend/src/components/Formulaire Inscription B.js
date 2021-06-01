import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col} from 'reactstrap';
import '../App.css';

const FormulaireB = (props) => {
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
        <Label for="ville" style={{fontFamily: 'Roboto', fontWeight:'300', fontSize:'14px'}}>Ville</Label>
        <Input type="city" name="city" id="cityB" placeholder="Ville" bsSize="sm" />
      </FormGroup>
    
      <FormGroup style={{marginLeft: '150px', marginTop:'30px'}}>
        <Label for="exampleSelectMulti" style={{ontFamily: 'Roboto', fontWeight:'300', fontSize:'14px'}}>Sélectionnez vos compétences</Label>
        <Input type="select" name="selectMulti" id="examplSelectMulti" multiple placeholder="Veuillez-choisir vos compétences" bsSize="sm">
          <option>Compétence 1</option>
          <option>Compétence 2</option>
          <option>Compétence 3</option>
          <option>Compétence 4</option>
          <option>Compétence 5</option>
        </Input>
      </FormGroup>

      <FormGroup style={{marginLeft: '150px', marginTop:'30px'}}>
        <Label for="exampleText" style={{ontFamily: 'Roboto', fontWeight:'300', fontSize:'14px'}}>Vos Expériences Professionnelles (facultatif)</Label>
        <Input type="textarea" name="text" id="experience-pro" placeholder="Veuillez-lister vos précédentes expériences en rapport avec vos compétences" bsSize="sm" />
      </FormGroup>

      <FormGroup style={{marginLeft: '150px', marginTop:'30px'}}>
        <Label for="exampleSelect" style={{fontFamily: 'Roboto', fontWeight:'300', fontSize:'14px'}}>Vos Disponibilités</Label>
        <Input type="select" name="select" id="exampleSelect" placeholder="Veuillez-choisir votre mode de participation" bsSize="sm">
          <option>À distance</option>
          <option>Locale</option>
          <option>Les Deux</option>
        </Input>
      </FormGroup>

      <FormGroup style={{marginLeft: '150px', marginTop:'30px'}}>
        <Label for="exampleSelect" style={{ontFamily: 'Roboto', fontWeight:'300', fontSize:'14px'}}>Votre Visibilité</Label>
        <Input type="select" name="select" id="exampleSelect" placeholder="Veuillez-choisir la visibilité de votre profil" bsSize="sm">
          <option>Privé (personne ne peux voir votre profil sans un premier contact de votre part)</option>
          <option>Limité (seules les associations connectées à l'application peuvent voir votre profil)</option>
          <option>Public (tout le monde peux voir votre profil, connecté ou pas)</option>
        </Input>
      </FormGroup>

        <FormGroup style={{marginLeft: '150px', marginTop:'30px'}}>
        <Label for="exampleText" style={{fontFamily: 'Roboto', fontWeight:'300', fontSize:'14px' }}>Votre Description (facultatif)</Label>
        <Input type="textarea" name="text" id="experience-pro" placeholder="Veuillez-écrire quelques mots à propos de vous" bsSize="sm"/>
      </FormGroup>

      <FormGroup style={{marginLeft: '150px', marginTop:'30px'}}>
        <Label for="exampleFile" style={{fontFamily: 'Roboto', fontWeight:'300', fontSize:'14px' }}>Télécharger votre CV (facultatif)</Label>
        <Input type="file" name="file" id="exampleFile" placeholder= "Veuillez-télécharger votre CV" />
        <FormText color="muted">
        Veuillez-télécharger votre CV
        </FormText>
      </FormGroup>
      <Button style={{marginLeft: '150px', marginTop:'30px', backgroundColor: '#2a9d8f', color: 'black',fontFamily: 'Roboto', fontSize:'13px', marginBottom:'40px'}}>SAUVEGARDER</Button>
    </Form>
    </Col>
  );
}

export default FormulaireB;