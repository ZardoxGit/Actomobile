import React from 'react';
import { Row } from 'reactstrap';
import '../App.css';
import {Link} from 'react-router-dom';

const CardProjectBank = (props) => {

    let skillList = props.skills.map((skill, i) => {
        return (
            <p className="competences-liste">{skill.value}</p>
        )
    })
    
    let image = <div>
                    <img className="image-skill-bank" src="/images/banque-projet/banqueProjet1.jpg" alt="a generic background" />
                </div>;

    return (
        
        <div style={{marginBottom:'40px'}}> 
        <div className='card-skill-bank' style={{display: 'flex'}}>
            {image}
            <div style={{width:'250px'}}>
                <p className='titre-card-type-2-project no-mp'>{props.title}</p>
                <p className='sous-titre-card-type-2'>Compétences requises :</p>  
                {skillList}
            </div>
            <div className='skill-bank-content'>
                <p className='text-project-bank'>{props.desc}</p>  
            </div>
            <div>
                <Link to='/screenprojetdetail' className='button-default'>VOIR</Link>
            </div>
        </div>
    </div>

            
        
    );
}

export default CardProjectBank;