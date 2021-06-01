import React from 'react';
import { Button, Col, Row, 
} from 'reactstrap';
import '../App.css';
import generic1 from '../images/generic-1.png';


const TableaudeBordB = (props) => {
  return (
    <Col Col xs="6"> 
    <h1 className="titre-h2" style={{marginLeft: '150px', marginTop:'65px', marginBottom:'40px'}}>TABLEAU DE BORD</h1>
    <div>
    <Button style={{marginLeft: '160px', marginTop:'30px', backgroundColor: '#2a9d8f', color: 'black',fontFamily: 'Roboto', fontSize:'12px',fontWeight:'700', marginBottom:'40px'}}>CHERCHER UNE CAUSE</Button>
    </div>
        <h1 className="titre-h2" style={{marginLeft: '160px', marginTop:'65px', marginBottom:'40px', fontSize:'35px'}}>MES PROJETS EN COURS</h1>
    <div>
        
        <Row className="card-project">
            <div>
                <div className="card-type-2" > 
                    <div style={{display: 'flex'}}>
                        <div>
                            <img className="card-image" src={generic1} alt="a generic background image" />
                        </div>
                        <div>
                            <p className='titre-card-type-2' >Titre Projet 1</p>
                            <p>Description du projet</p>  
                        </div>
                        <Button style={{marginTop:'50px', marginBottom:'200px',marginRight: '15px', marginLeft: '30px', backgroundColor: '#2a9d8f', color: 'white',fontFamily: 'Roboto', fontSize:'10px', marginBottom:'40px'}}>QUITTER LE PROJET</Button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card-type-2" > 
                    <div style={{display: 'flex'}}>
                        <div>
                            <img className="card-image" src={generic1} alt="a generic background image" />
                        </div>
                        <div>
                            <p className='titre-card-type-2' >Titre Projet 1</p>
                            <p>Description du projet</p>  
                        </div>
                        <Button style={{marginTop:'50px', marginBottom:'200px',marginRight: '15px', marginLeft: '30px', backgroundColor: '#2a9d8f', color: 'white',fontFamily: 'Roboto', fontSize:'10px', marginBottom:'40px'}}>QUITTER LE PROJET</Button>
                    </div>
                </div>
            </div>

            </Row>
            
    </div>
    
    <h1 className="titre-h2" style={{marginLeft: '160px', marginTop:'65px', marginBottom:'40px', fontSize:'35px'}}>MES CANDIDATURES</h1>
    <Row className="card-project">
            <div>
                <div className="card-type-3" > 
                    <div style={{display: 'flex'}}>
                        <div>
                            <img className="card-image" src={generic1} alt="a generic background image" />
                        </div>
                        <div>
                            <p className='titre-card-type-2' >Titre Projet 1</p>
                            <p>Description du projet</p>  
                        </div>
                        <Button style={{marginTop:'50px', marginBottom:'200px',marginRight: '15px', marginLeft: '30px', backgroundColor: '#2a9d8f', color: 'white',fontFamily: 'Roboto', fontSize:'10px', marginBottom:'40px'}}>ANNULER LA CANDIDATURE</Button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card-type-2" > 
                    <div style={{display: 'flex'}}>
                        <div>
                            <img className="card-image" src={generic1} alt="a generic background image" />
                        </div>
                        <div>
                            <p className='titre-card-type-2' >Titre Projet 1</p>
                            <p>Description du projet</p>  
                        </div>
                        <Button style={{marginTop:'50px', marginBottom:'200px',marginRight: '15px', marginLeft: '30px', backgroundColor: '#2a9d8f', color: 'white',fontFamily: 'Roboto', fontSize:'10px', marginBottom:'40px'}}>ANNULER LA CANDIDATURE</Button>
                    </div>
                </div>
            </div>
            </Row> 

            <h1 className="titre-h2" style={{marginLeft: '160px', marginTop:'65px', marginBottom:'40px', fontSize:'35px'}}>MON PROFIL</h1>
            <Row className="card-project">
            <div>
                <div className="card-type-2" > 
                    <div style={{display: 'flex'}}>
                        <div>
                            <img className="card-image" src={generic1} alt="a generic background image" />
                        </div>
                        <div>
                            <p className='titre-card-type-2'style={{marginLeft: '130px'}} >Jean Ipsum</p>
                            <p style={{marginLeft: '-20px'}}>lorem lorem loremloremloremloremloremloremloremloremlor</p>  
                        </div>
                        <Button style={{marginTop:'50px', marginBottom:'200px',marginRight: '15px', marginLeft: '100px', backgroundColor: '#2a9d8f', color: 'white',fontFamily: 'Roboto', fontSize:'10px', marginBottom:'40px'}}>MODIFIER MON PROFIL</Button>
                    </div>
                </div>
            </div>
            </Row>
    </Col>
    
  );
}

export default TableaudeBordB;