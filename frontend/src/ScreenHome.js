import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Button } from 'reactstrap';
import './App.css';
import {Link} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


const ScreenHome = (props) => {
    return (


<div className="full-width bg-accueil">

    <Header/>
        
    <div className="opacity-20-dark">
        <img className='image-header ratio-ok hover-image' src={"/images/accueil/img1.jpg"} style={{height: "auto", width: "50%"}} alt='background asso'/>
        <img className='image-header ratio-ok hover-image' src={"/images/accueil/img2.jpg"} style={{height: "auto", width: "50%"}} alt='background bene'/>    
        <Link to="/screenhomeoeuvres" className='titre-image-home-asso'>
            <h1 className="titre-h1-violet">Oeuvres Caritatives</h1>
        </Link>
        <Link to="/screenhomebenevoles" className='titre-image-home-bene'>
            <h1 className="titre-h1">Bénévoles</h1>
        </Link>
    </div>

    <div style={{display: 'flex', justifyContent: 'center'}}>
        <h3 className="titre-h2">Actomobile c'est quoi ?</h3>
    </div>

    <div style={{display:'flex'}}> 
        <img className='ratio-ok' src={"/images/accueil/home-cest-quoi.jpg"} style={{height: "auto", width: "13%", marginLeft:'20%', borderRadius:'10px'}} alt='background asso'/>
        <div>
            <p className='text-home-info'>Nous nous sentons tous de plus en plus concernés par la situation actuelle du monde tout en ressentant un grand sentiment d’impuissance . Il y a beaucoup de moyens pour participer à des actions par le biais de dons financiers et/ou en signant des pétitions mais il est difficile d’apporter une aide concrête aux sujets qui nous tiennent à coeur. 
                Parallèlement, beaucoup de projets avec un potentiel humanitaire immense ne voient jamais le jour à cause d’un manque de moyens et de certaines compétences. D’autres projets démarrent mais sont ralentis plus tard par ces même défis.</p>
            <p className='text-home-info'>
                Actomobile est une banque de compétences et de projets tournée vers la philanthropie où le concept n’est pas d’échanger ses compétences pour du profit mais pour du bien-être. Simplement permettre à chacun de pouvoir s’épanouir dans ses convictions et d’aider le monde de manière plus concrête. </p>  

        </div>
    </div>

    <div style={{display: 'flex', justifyContent: 'center'}}>
        <h3 className="titre-h2">Les Actualités</h3>
    </div>
        
    
    <Row className="bg-home-1">

            <Card className='card-actu'>
                <CardImg top width="100%" src="/images/accueil/actu1.jpg" alt="Card cap" />
                <CardBody className='no-mp'>
                    <CardTitle className="titre-actu" style={{display: 'flex', justifyContent: 'center'}}>Environnement</CardTitle>
                    <CardText  className='normal-text-home'>Le niveau de la mer monte dangereusement sur tous les littoraux du monde: L'élévation du niveau de la mer due au réchauffement climatique s'annonce catastrophique pour un certain nombre de populations côtières. Plus encore qu'on le pensait, avertissent aujourd'hui des chercheurs. Car, en parallèle, les activités humaines provoquent un affaissement des côtes...</CardText>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <Link className='button-default-home' href='https://www.futura-sciences.com/planete/actualites/rechauffement-climatique-niveau-mer-monte-dangereusement-tous-littoraux-monde-82779/' target='_blank'> Voir Plus </Link>
                    </div>
                </CardBody>
            </Card>

            <Card className='card-actu'>
                <CardImg top width="100%" src="/images/accueil/actu2.jpg" alt="Card cap" />
                <CardBody className='no-mp'>
                    <CardTitle className="titre-actu" style={{display: 'flex', justifyContent: 'center'}}>Pauvreté</CardTitle>
                    <CardText  className='normal-text-home'>Donner aux pays les plus pauvres les moyens d'une reprise résiliente. Shukria a 24 ans. Dans sa ville natale de Nakrabad, à 500 kilomètres au nord-ouest de Kaboul, elle coud des masques pour sauver des vies. La centaine de masques qu'elle fabrique chaque jour contribue à pallier la pénurie de cet équipement aussi simple qu'essentiel pour protéger les 1 700 habitants de sa commune...</CardText>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <Link className='button-default-home' href='https://www.futura-sciences.com/planete/actualites/rechauffement-climatique-niveau-mer-monte-dangereusement-tous-littoraux-monde-82779/' target='_blank'> Voir Plus </Link>
                    </div>                
                </CardBody>
            </Card>

            <Card className='card-actu'>
                <CardImg top width="100%" src="/images/accueil/actu3.jpg" alt="Card cap" />
                <CardBody className='no-mp'>
                    <CardTitle className="titre-actu" style={{display: 'flex', justifyContent: 'center'}}>Solidarité</CardTitle>
                    <CardText className='normal-text-home'>Through the MEET-More Equal Europe Together project which aims to prevent gender-based Islamophobia in Europe, POUR LA SOLIDARITÉ-PLS organized an interactive guided tour in the municipality of Saint-Gilles, Region of Brussels-Capital on Thursday 27 of August 2020. Summary of the tour whose main objective was to promote cohesion in a society as diverse as Brussels!</CardText>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <Link className='button-default-home' href='https://www.futura-sciences.com/planete/actualites/rechauffement-climatique-niveau-mer-monte-dangereusement-tous-littoraux-monde-82779/' target='_blank'> Voir Plus </Link>
                    </div>
                </CardBody>
            </Card>

        </Row>
        <div>
        <div className='img-paralax'>
            <Card className='card-action'>
                <p className="titre-h3">En action</p>
                <p className='normal-text' style={{padding: '0 75px 60px 75px'}}>Nous voulons permettre à chacun de s'impliquer facilement dans la création d'un monde meilleur. Le temps des excuses est révolu: le monde que nous connaissons se noie de 1,4 cm chaque année, 1 million d'espèces animales et végétales sont désormais menacées d'extinction, un enfant de moins de 15 ans meurt toutes les 5 secondes dans le monde. Il existe de nombreuses façons de contribuer, que ce soit par exemple en utilisant des produits durables dans votre routine et/ou en participant activement aux causes de votre choix.</p>

            </Card>
        </div>
    </div>

    <div>
        <Row className="bg-home-2" style={{paddingTop: '110px', display:'flex', justifyContent:'center'}}>
            <div className='card-info'>
                <CardBody className='no-mp'>
                    <CardTitle className="titre-actu" style={{display: 'flex', justifyContent: 'center', marginBottom:'25px'}}>Titre du texte</CardTitle>
                    <CardText className='normal-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</CardText>
                </CardBody>
            </div>
            <div className='card-info'>
                <CardBody className='no-mp'>
                    <CardTitle className="titre-actu" style={{display: 'flex', justifyContent: 'center', marginBottom:'25px'}}>Titre du texte</CardTitle>
                    <CardText className='normal-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</CardText>
                </CardBody>
            </div>
            <div className='card-info'>
                <CardBody className='no-mp'>
                    <CardTitle className="titre-actu" style={{display: 'flex', justifyContent: 'center', marginBottom:'25px'}}>Titre du texte</CardTitle>
                    <CardText className='normal-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</CardText>
                </CardBody>
            </div>
        </Row>
    </div>

    <Footer/>
</div>



    );
};


export default ScreenHome;

