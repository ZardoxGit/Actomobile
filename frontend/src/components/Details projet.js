import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardText, CardTitle, Row } from 'reactstrap';
import '../App.css';
import generic1 from '../images/generic-1.png';

const DetailsProjet = (props) => {
    return (
<div>
<Row>
<img src={generic1} style={{height: "480px", width: "640px", marginLeft: 160}}/>
        <Card body style={{width: "50px", marginRight: 100}}>
          <CardTitle className="titre-h2" style={{marginRight: 400}}>Lorem Ipsum</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
        </Card>
</Row>

    <div>
        <h3 className="titre-h3">Compétences requises</h3>
    </div>

    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    <div>
        <p></p>
    </div>
</div>
    );
};


export default DetailsProjet;