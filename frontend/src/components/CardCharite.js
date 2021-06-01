import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const CardCharite = (props) => {

    let skillList = props.skills.map((skill, i) => {
        return (
            <p className="competences-liste">{skill.value}</p>
        )
    })
    
    let image = <div>
                    <img className="profile-image" src="/images/skill-bank/panda-bear.png" alt="a generic background" />
                </div>;

    return (
        
            <div>
                <div className="card-type-2">
                    <div style={{display: 'flex'}}>
                        {image}
                        <div>
                            <p className='titre-card-type-2'>{props.nom} {props.prenom}<a href={`mailto:${props.email}`}><FontAwesomeIcon icon={faEnvelope} style={{color: '#55C2B5', marginLeft: '8px', marginBottom:'0px'}} /></a></p>
                            <p className='sous-titre-card-type-2'>Compétences: :</p>  
                            {skillList}
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <p className="text-card">{props.desc}</p>
                    </div>
                </div>
            </div>
            
        
    );
}

export default CardCharite;