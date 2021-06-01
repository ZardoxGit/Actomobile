import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const ScreenMentionsLegales = (props) => {
    return (
        <div className="full-width">
            <Header/>
            <div className="full-width"> 

                <h2 className="titre-h1-page">Mentions Légale</h2>

                <p className='normal-text' style={{marginLeft: '8%', marginRight:'10%', textAlign:'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra sit amet risus ut viverra. Fusce sit amet tellus nibh. Fusce lobortis mi id varius hendrerit. Curabitur mollis arcu sem, et maximus massa tristique eu. Nullam neque urna, maximus sit amet elementum ut, rhoncus feugiat lacus. Mauris at massa fermentum, rhoncus lectus sit amet, placerat magna. Morbi velit erat, porttitor ac nisi luctus, luctus finibus lectus. Suspendisse suscipit lorem at ante egestas lobortis. Vestibulum erat justo, imperdiet eu aliquam a, luctus a justo. Suspendisse dui purus, pellentesque in dolor a, efficitur posuere dui. Sed venenatis luctus ex, nec lacinia arcu tincidunt ut. Vivamus congue interdum justo, vitae malesuada purus ultrices vel. Donec eu scelerisque enim. Cras scelerisque aliquam metus, id blandit arcu pellentesque eu.
Duis quam risus, vehicula mattis euismod non, volutpat eget metus. Pellentesque fringilla neque id luctus viverra. Vivamus varius sit amet dui eget sollicitudin. Nulla rutrum ante neque, ac fermentum nulla maximus ac. Proin auctor metus est, ut mattis velit ullamcorper at. Duis mollis suscipit justo, sed pharetra velit eleifend in. Integer suscipit, lectus eget porta posuere, arcu sapien luctus ligula, et cursus nulla libero nec risus. Pellentesque congue euismod diam, eu tincidunt turpis dapibus pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer ut mi ut lectus iaculis aliquet ut ut purus. Suspendisse maximus lobortis augue, et feugiat nisl. Nunc nec nibh enim. Cras sed augue eu magna tristique ornare eget nec enim. Sed ac pulvinar tortor. </p>  

                <Footer/>
            </div>
        </div>
    );
}

export default ScreenMentionsLegales;