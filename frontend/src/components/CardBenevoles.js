import React from 'react';
import { Row } from 'reactstrap';
import '../App.css';

const CardBenevoles = (props) => {

    let skillList = props.skills.map((skill, i) => {
        return (
            <p className="competences-liste">{skill.value}</p>
        )
    })
    
    let image = <div>
                    <img className="image-skill-bank" src="/images/banque-projet/banqueProjet1.jpg" alt="a generic background" />
                </div>;

    return (
        
            <div>
                <div className="card-type-2" style={{height:'320px', width:'650px'}}>
                    <div style={{display: 'flex'}}>
                        <div>
                            <img className="card-image" src='/images/detailprojet.jpg' alt="a generic background" style={{width:'215px', borderRadius:'10px'}} />
                        </div>
                        <div>
                            <p className='titre-card-type-2'>{props.title}</p>
                            <p className='sous-titre-card-type-2'>Compétences requises :</p>  
                            {skillList}
                        </div>
                    </div>
                    <div style={{display: 'flex'}} className="cardbox-project-bank">
                        <p className="text-card">{props.desc}</p>
                    </div>
                </div>
            </div>
        
    );
}

export default CardBenevoles;