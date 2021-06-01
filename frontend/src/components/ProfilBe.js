import React, { useState } from 'react';
import {  Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, FormGroup, Input, InputGroup } from 'reactstrap';
import '../App.css';
 
const ProfilBe = (props) => {
 
 return (
  <Col xs="12" lg="6" xl="4">


     <div>

          <h1 className='titre-h2' style= {{ marginLeft: '150px', marginTop:'65px', marginBottom:'40px',  fontSize: '60px'}}>MON PROFIL</h1> 
         
          

            <Card>
               
               
                 <CardBody>
                  
                    <Row>
                      <Col xs="12" lg="6" xl="4">
                        <CardImg top width="100%" src="/picture-4.jpg/" alt="Card image cap" />
                        <CardTitle tag="h5">JEAN IPSUM</CardTitle>
                        <Button style={{marginLeft: '500px', marginTop:'30px', backgroundColor: '#803BCA', color: 'black',fontFamily: 'Roboto', fontSize:'12px',fontWeight:'700', marginBottom:'40px'}}>EDITER</Button>
                      </Col>
                    </Row>
                     <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet aliquet tincidunt. Nam nec nisl ac quam lacinia iaculis vel nec lectus. Proin tortor enim, tempus eu condimentum a, laoreet nec diam. Donec vehicula erat eu lectus vulputate, sit amet consequat dui tempor. Sed pharetra bidendum nulla et vulputate.</CardText>
                  
                 
                 </CardBody>
              
            </Card>

    </div>

    <div>

      <h2 style= {{fontFamily: 'Bebas Neue', marginLeft: '150px', marginTop:'65px', marginBottom:'40px', fontWeight:'cursive', fontSize: '40px'}}>MES COMPETENCES</h2>

      <Card>
        <CardBody>
         <CardSubtitle className= "mb-2 tect-muted">Ajouter une compétence</CardSubtitle>
          <FormGroup row>
      
            <Col sm={10}>

              <Input type="select" name="select" id="exampleSelect" placeholder="Veuillez ajouter une compétence">
               <option>Veuillez ajouter une compétence</option>
               <option>2</option>
               <option>3</option>
               <option>4</option>
               <option>5</option>
              </Input>

               <Button style={{marginLeft: '500px', marginTop:'30px', backgroundColor: '#803BCA', color: 'black',fontFamily: 'Roboto', fontSize:'12px',fontWeight:'700', marginBottom:'40px'}}>VALIDER</Button>
           
            </Col>
          </FormGroup>
               
        
      
         <FormGroup >
         <InputGroup>
        
           <Input placeholder="Plombier" min={0} max={100} type="number" step="1" />
           
            <i class="fas fa-handshake"></i>
        
         </InputGroup>  
         </FormGroup>
         <br />
         <FormGroup>
         <InputGroup>
        
         <Input placeholder="Menuisier" min={0} max={100} type="number" step="1" />
        
      </InputGroup>  
        <br />
        <InputGroup>
        
        <Input placeholder="Jardinier" min={0} max={100} type="number" step="1" />
        
      </InputGroup>  
        <br />
        <InputGroup>
        
        <Input placeholder="Cuisinier" min={0} max={100} type="number" step="1" />
        
      </InputGroup>  

          </FormGroup>    
       
      

          
         </CardBody>
      </Card>

    </div>

    <div>

       <h3 style= {{fontFamily: 'Bebas Neue', marginLeft: '150px', marginTop:'65px', marginBottom:'40px', fontWeight:'cursive', fontSize: '40px'}}>MES CONVICTIONS</h3>
       <Button style={{marginLeft: '500px', marginTop:'30px', backgroundColor: '#803BCA', color: 'black',fontFamily: 'Roboto', fontSize:'12px',fontWeight:'700', marginBottom:'40px'}}>EDITER</Button>
    
            <Card>
                 <CardBody>

                  <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet aliquet tincidunt. Nam nec nisl ac quam lacinia iaculis vel nec lectus. Proin tortor enim, tempus eu condimentum a, laoreet nec diam. Donec vehicula erat eu lectus vulputate, sit amet consequat dui tempor. Sed pharetra bidendum nulla et vulputate.</CardText>

                 </CardBody>
            </Card>

    </div>
          

  </Col> 

 


 
 
  );
}
 
export default ProfilBe;
 