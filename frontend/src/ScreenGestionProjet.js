import React, {useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const benevoles = [
    {
        image: "/images/steph1.jpg",
        nom: 'Stephanie Beauchemin',
        desc: "Web-developer en herbe, je souhaiterai pouvoir aider des oeuvres caritatives dans le domaine de lenvironnement. J'ai aussi une grande passion pour la cause animale, et je serai tellement ravie de pouvoir aider concrêtement."
    },
    {
        image: "/images/imgProfilDashboard.jpg",
        nom: 'Jacques Grandjean',
        desc: 'Fort d\'un esprit entrepreneurial avec des compétences en web development, je souhaiterai aider des causes environnementales pendant mon temps libre. J\'ai un profil très polyvalent et je pourrai surement faire avancer quelques projets!'
    }
]

const candidats = [
    {
        image: "/images/mikael.jpg",
        nom: "Mikael Bihouise",
        desc:"Je suis un web designer de métier en reconversion vers le developpement web et mobile. Les causes environnementales me touchent particulièrement donc n'hésitez pas à me contacter si vous avez besoin d'aide avec votre site ou application!"
    },
    {
        image: "/images/Lucile.jpg",
        nom: "Lucile Bourgoin",
        desc: "Expatriée avec un anglais courant et des compétences commerciales, je souhaiterai participer à des actions environnementales. Je suis particulièrement intéressée par la cause climatique et animale"
    }
]


const ScreenGestionProjet = (props) => {

    const [bene, setBene] = useState(benevoles);
    const [cand, setCand] = useState(candidats);

    const onBeneClick = (index) => {
        let beneCopy = [...bene];
        beneCopy.splice(index, 1);
        setBene(beneCopy)
    }

    const benevolesList = bene.map((benevole, i) =>  {
        return (
            <div style={{marginBottom:'40px'}}> 
                    <div className='card-dashboard' style={{display: 'flex'}}>
                        <div>
                            <img className="image-dashboard-asso" src={benevole.image} alt="a generic background" />
                        </div>
                        <div className='dashboard-content'>
                            <p className='titre-card-type-2 no-mp' >{benevole.nom}</p>
                            <p className='text-dashboard'>{benevole.desc}</p>  
                        </div>
                        <div>
                            <Link onClick={() => onBeneClick(i)} className='button-default'>ENLEVER DU PROJET</Link>
                        </div>
                    </div>
                </div>
        )
    })
        const candClick = (index) => {
            var candCopy = [...cand]
            candCopy.splice(index, 1)
            setCand(candCopy)
        }

    const candidatsList = cand.map((candidat, i) => {
        return(
            <div style={{marginBottom:'40px'}}> 
                    <div className='card-dashboard' style={{display: 'flex'}}>
                        <div>
                            <img className="image-dashboard-asso" src={candidat.image} alt="a generic background" />
                        </div>
                        <div className='dashboard-content'>
                            <p className='titre-card-type-2 no-mp' >{candidat.nom}</p>
                            <p className='text-dashboard'>{candidat.desc}</p>  
                        </div>
                        <div>
                            <Link onClick={() => candClick(i)} className='button-default'>ANNULER CETTE CANDIDATURE</Link>
                        </div>
                    </div>
                </div>
        )
    })
    return (
        <div className="full-width bg-profil">
            <Header/>
            <div className="full-width"> 
                
                <h1 className="titre-h1-page">Gérer mon projet bluewhale</h1>
                <div style={{marginBottom:'5%'}}>
                    <Link to='/screenskillbank' className="button-default" style={{marginLeft:'10%'}}>CHERCHER DES BÉNÉVOLES</Link>
                </div>
                <div>
                    <p> </p>
                    <p> </p>
                    <p> </p>
                </div>
                <div>
                    <Link to='/screenprojetassodetail' className="button-default" style={{marginLeft:'10%'}}>Aperçu du projet</Link>
                </div>

                <h2 className="titre-h2-page">Mes Bénévoles</h2> 

                {benevolesList}          
                
                <h2  className="titre-h2-page">MES CANDIDATS</h2>

                {candidatsList}

                <Footer/>
            </div>
        </div>
    );
}

export default ScreenGestionProjet;