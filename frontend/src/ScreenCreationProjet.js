import React, { useState } from 'react';
import { Label, Input} from 'reactstrap';
import './App.css';
import {Link, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import {connect} from 'react-redux';
import Select from 'react-select'

const ScreenCreationProjet = (props) => {

    const selectCategory = [
        {
            value: 'Environnement',
            label: 'Environnement'
        },
        {
            value: 'Pauvreté',
            label: 'Pauvreté'
        },
        {
            value: 'Solidarité',
            label: 'Solidarité'
        }
    ]

    const selectCompetence = [

        {
            value: 'Biologie',
            label: 'Biologie',
        },
        {
            value: 'Cloud Computing',
            label: 'Cloud Computing',
        },

        {
            value: 'Electronique',
            label: 'Electronique',
        },

        {
            value: 'Evènementiel',
            label: 'Evènementiel',
        },
        {
            value: 'IA (Intelligence Artificielle)',
            label: 'IA (Intelligence Artificielle)',
        },
        {
            value: 'Infirmier(e)',
            label: 'Infirmier(e)'
        },
        {
            value: 'Informatique',
            label: 'Informatique',
        },

        {
            value: 'Juridique',
            label: 'Juridique'
        }, 

        {
            value: 'Maçon',
            label: 'Maçon'
        },

        {
            value: 'Marketing et conception de vidéos',
            label: 'Marketing et conception de vidéos'
        },
        {
            value: 'Mécanicien(e)',
            label: 'Mécanicien(e)'
        },
        {
            value: 'Médecin',
            label: 'Médecin'
        },
        {
            value: 'Menuisier',
            label: 'Menuisier'
        },
        
        {
            value: 'Musicien',
            label: 'Musicien'
        },

        {
            value: 'Plombier',
            label: 'Plombier'
        },
        {
            value: 'Professeur des écoles',
            label: 'Professeur des écoles'
        },
        {
            value: 'Traducteur(rice)',
            label: 'Traducteur(rice)'
        },

        {
            value: 'UX Design',
            label: 'UX Design',
        },

        
        {
            value: 'Web analytique',
            label: 'Web analytique',
        },

        {
            value: 'Web Design',
            label: 'Web Design',
        },
        {
            value: 'Web Dev',
            label: 'Web Dev',
        },
    ];

    const selectDispo = [
        {
            value: 'À distance',
            label: 'À distance',
        },
        {
            value: 'Locale',
            label: 'Locale',
        },
        {
            value: 'Les Deux',
            label: 'Les Deux',
        }
    ];

    const selectVisibilite = [
        {
            value: 'Publique',
            label: 'Publique (tout le monde peux voir votre projet, connecté ou pas)',
        },
        {
            value: 'Limitée',
            label: `Limitée (seuls les bénévoles connectés à l'application peuvent voir votre projet)`,
        },
        {
            value: 'Privée',
            label: 'Privée (personne ne peux voir votre projet sans un premier contact de votre part)',
        }
    ]

    const [title, setTitle] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [city, setCity] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')
    const [comprec, setComprec] = useState([])
    const [category, setCategory] = useState(null)
    const [dispo, setDispo] = useState(null)
    const [visibility, setVisibility] = useState(null)
    const [projetOk, setProjetOk] = useState(false)


    var handleSavedProject = async () => {
    
        const data = await fetch('/create-project', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `titleFromFront=${title}&startDateFromFront=${startDate}&endDateFromFront=${endDate}
                &cityFromFront=${city}&descFromFront=${desc}&imageFromFront=${image}&comprecFromFront=${JSON.stringify(comprec)}
                &categoryFromFront=${category.value}&dispoFromFront=${dispo.value}&visibilityFromFront=${visibility.value}&token=${props.token}`
        })
    

        const body = await data.json()
        console.log(body);

        if(body.result === true){
            props.addValue(body.saveProject)
            setProjetOk(true)
        
    }

    };

        if(projetOk){
        return <Redirect to='/screenprojetassodetail'/>
    }

        var handleChangeDispo =  (value) => {
            setDispo(value);
        }
    
        var handleChangeVisible =  (value) => {
            setVisibility(value);
        }

        var handleCategory =  (value) => {
            setCategory(value);
        }

        const handleChange =  (value) => {
            setComprec(value);
        }
    

    return (
        <div className="full-width bg-inscription-formulaire-asso">
            <Header/>
            <div className="full-width"> 
                
                <div>
                    <h1 className='titre-h1-page'>Créer un projet</h1>
                    <div className="full-width">
                        <div className='formulaire-default'>
                            <Label for="titre" className='formulaire-label'>Titre</Label>
                            <Input onChange={(e) => setTitle(e.target.value)} type="titre" name="titre" id="titre" placeholder="Sauvetage des écureuils bruns" bsSize="sm" />
                        </div>

                        <div className='formulaire-default'>
                            <Label for="exampleSelect" className='formulaire-label'>Catégorie</Label>
                            <Select 
                                placeholder="Veuillez-choisir la catégorie de votre projet"
                                options={selectCategory}
                                onChange={handleCategory}
                            />
                        </div>

                        <div className='formulaire-default'>
                            <Label for="date" className='formulaire-label'>Date de début</Label>
                            <Input onChange={(e) => setStartDate(e.target.value)} type="date" name="date" id="date" placeholder="" bsSize="sm" />
                        </div>

                        <div className='formulaire-default'>
                            <Label for="date" className='formulaire-label'>Date de de fin</Label>
                            <Input onChange={(e) => setEndDate(e.target.value)} type="date" name="date" id="date" placeholder="" bsSize="sm" />
                        </div>

                        <div className='formulaire-default'>
                            <Label for="exampleSelect" className='formulaire-label'>La disponibilité requise</Label>
                            <Select 
                                placeholder="Veuillez-choisir votre mode de participation"
                                options={selectDispo}
                                onChange={handleChangeDispo}
                            />
                        </div>

                        <div className='formulaire-default'>
                            <Label for="ville" className='formulaire-label'>Ville</Label>
                            <Input onChange={(e) => setCity(e.target.value)} type="ville" name="ville" id="ville" placeholder="Paris" bsSize="sm" />
                        </div>

                        <div className='formulaire-default'>
                            <Label for="exampleSelect" className='formulaire-label'>La visibilité de votre projet</Label>
                            <Select 
                                placeholder="Veuillez-choisir la visibilité de votre profil"
                                options={selectVisibilite}
                                onChange={handleChangeVisible}
                            />
                        </div>

                        <div className='formulaire-default'>
                            <Label for="exampleSelectMulti" className='formulaire-label'>Sélectionnez les compétences requises</Label>
                            <Select 
                                placeholder="Veuillez-choisir les compétences requises" 
                                value={comprec}
                                options={selectCompetence}
                                onChange={handleChange}  
                                isMulti
                            />
                        </div>

                        <div className='formulaire-default'>
                            <Label for="exampleText" className='formulaire-label facultatif'>Votre Description (facultatif)</Label>
                            <Input onChange={(e) => setDesc(e.target.value)} type="textarea" name="text" id="experience-pro" placeholder="Veuillez-écrire quelques mots à propos de votre projet" bsSize="sm"/>
                        </div>
                
                    </div>

                    <Link onClick={() => handleSavedProject()} className='button-default-small' style={{marginLeft: '10%', marginTop:'40px !important'}}>CRÉER LE PROJET</Link>
                </div>
                <Footer/>
            </div>
        </div>
    );

    
}

function mapStateToProps(state){
    return {token: state.token}
}

function mapDispatchToProps(dispatch){
    return {
        addValue: function(value){
            dispatch({type: 'addValue', value: value})
        }
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ScreenCreationProjet);

