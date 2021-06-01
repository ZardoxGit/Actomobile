import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Container, Row, CustomInput} from 'reactstrap';
import '../App.css';

const CreationProjet = (props) => {
  return (
    <Container className="full-width">
    <Row>
      <Col xs="12" style={{display: 'flex', marginLeft: '150px'}}>
        <h2 className="titre-h2-bis">CRÉER UN PROJET</h2>
      </Col>
    </Row>
    <Form>
        <FormGroup style={{marginLeft: '150px', width:'640px', marginBottom:'40px'}}>
        <Label for="Nom Benevole" style={{fontFamily: 'Roboto', fontWeight:'300', fontSize:'14px'}}>Titre</Label>
        <Input type="lastname" name="lastname" id="lastnameB" placeholder="Le nom de votre projet génial" bsSize="sm" />
      </FormGroup>

      <Row form>
      <Col xs="12" lg="6" xl="4"> 
          <FormGroup style={{width:'260px', marginLeft:'150px', marginBottom:'40px'}}>
            <Label for="DateDeDebut">Date de début</Label>
            <Input type="date" name="date-de-debut" id="date-de-debut" placeholder="JJ/MM/AAAA" />
          </FormGroup>
        </Col>
        <Col xs="12" lg="6" xl="4">
          <FormGroup style={{width:'260px', marginLeft:'-100px', marginBottom:'40px'}}>
            <Label for="DateDeFin">Date de fin</Label>
            <Input type="date" name="date-de-fin" id="date-de-fin" placeholder="JJ/MM/AAAA" />
          </FormGroup>
        </Col>
      </Row>
    
      <FormGroup style={{marginLeft: '150px', width:'640px', marginBottom:'40px'}}>
        <Label for="ville" style={{fontFamily: 'Roboto', fontWeight:'300', fontSize:'14px'}}>Ville</Label>
        <Input type="city" name="city" id="cityB" placeholder="Ville" bsSize="sm" />
      </FormGroup>
    
      <FormGroup style={{marginLeft: '150px', width:'640px', marginBottom:'40px'}}>
        <Label for="exampleText" style={{fontFamily: 'Roboto', fontWeight:'300', fontSize:'14px' }}> Description du projet</Label>
        <Input type="textarea" name="text" id="experience-pro" placeholder="Veuillez-écrire quelques mots à propos de vous" bsSize="sm"/>
      </FormGroup>

      <FormGroup style={{marginLeft: '150px', width:'640px', marginBottom:'40px'}}>
        <Label for="exampleCustomFileBrowser">Image du projet</Label>
        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Veuillez télécharger une image pour votre projet" />
      </FormGroup>

      <FormGroup style={{marginLeft: '150px', width:'640px', marginBottom:'40px'}}>
        <Label for="exampleSelectMulti" style={{fontFamily: 'Roboto', fontWeight:'300', fontSize:'14px', width:'640px'}}>Compétences requises</Label>
        <Input type="select" name="selectMulti" id="examplSelectMulti" multiple placeholder="Veuillez-choisir vos compétences" bsSize="sm">
          <option>Compétence 1</option>
          <option>Compétence 2</option>
          <option>Compétence 3</option>
          <option>Compétence 4</option>
          <option>Compétence 5</option>
        </Input>
      </FormGroup>

      <Button style={{marginLeft: '150px', backgroundColor: '#2a9d8f', color: 'black',fontFamily: 'Roboto', fontSize:'13px', marginBottom:'40px'}}>SAUVEGARDER</Button>
    </Form>
  </Container>
  );
}

export default CreationProjet;