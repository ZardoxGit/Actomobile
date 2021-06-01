import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const ScreenAPropos = (props) => {
    return (
        <div className="full-width">
            <Header/>
            <div className="full-width"> 

                <h2 className="titre-h1-page">à propos</h2>

                <p className='normal-text' style={{marginLeft: '8%', marginRight:'10%', textAlign:'left'}}>
                ĀCTŌ ablative of āctus - act, delivery; action, deed; series/sequence; progress
MOBILE - capable of moving or being moved readily. Economics: Able or free to change your situation
ACTOMOBILE is meant to be a repository of good deeds and sustainable products accessible from anywhere, everywhere! We want to make it easy for everyone to get involved in making the world a better place. Time for excuses is over: the world we know is drowning by 1,4cm every year, 1 million animal and plant species are now threatened with extinction, a child under 15 dies every 5 seconds around the world. There are many small ways to contribute, whether by using sustainable products in your routine or participating actively to the causes of your choice.</p>  

                <Footer/>
            </div>
        </div>
    );
}

export default ScreenAPropos;