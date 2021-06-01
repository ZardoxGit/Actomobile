import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import '../App.css';

const Header = (props) => {
return (
  <div>
    <div className='navigation'>
      <Link to='/' className='logo'>ACTOMOBILE</Link>
      <div style={{marginLeft:'auto'}}>
        <Link to='/screenapropos' ><p className='nav-item'>A propos</p></Link>
        <Link to='/screenconnectionbenevoles' className='nav-item'><FontAwesomeIcon icon={faUser} style={{color: '#55C2B5', marginRight: '5px', marginBottom:'0px'}} />Se connecter</Link>
        <Link to='/screeninscriptionbenevoles' className='nav-item'><FontAwesomeIcon icon={faUserPlus} style={{color: '#55C2B5', marginRight: '5px', marginBottom:'0px'}} />S'inscrire</Link>
      </div>
    </div>
  </div>
  );
}

export default Header;
