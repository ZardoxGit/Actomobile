import React from 'react';
import { Row, Col } from 'reactstrap';
import '../App.css';

import headerBenevoles from '../images/header-benevoles.png';

const Benevoles = (props) => {



    return (
        <div className="full-width">
            <Row>

                <Col xs="12">
                    <div className="opacity-20-dark">
                        <img className='image-header ratio-ok' src={headerBenevoles} alt='A group of volunteers'/>
                        <div className='titre-image'>
                            <h1 className="titre-h1">Bénévoles</h1>
                        </div>
                    </div>
                </Col>

            </Row>            
        </div>
    );
}

export default Benevoles;