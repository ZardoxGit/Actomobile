import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const Footer = (props) => {

return (
    <div>
        <div className='footer'>
            <Link to='/' className='logo-footer'>ACTOMOBILE</Link>
            <div style={{marginLeft:'auto', marginRight:'auto'}}>
                <Link to='/screenmentionslegales' className='nav-item-footer'>Mention Légales</Link>
                <Link to='/screenapropos' className='nav-item-footer'>A propos</Link>
            </div>
        </div>
    </div>
);
}

export default Footer;
