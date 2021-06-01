import React, { useState } from 'react';
import { Label, Input} from 'reactstrap';
import './App.css';
import {Link} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import {connect} from 'react-redux';
import Select from 'react-select'

const ScreenEditProject = (props) => {
    

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
            value: 'Marketing et conception de vidéos',
            label: 'Marketing et conception de vidéos'
        },
        {
            value: 'Cloud Computing',
            label: 'Cloud Computing',
        },
        {
            value: 'Web analytique',
            label: 'Web analytique',
        },
        {
            value: 'IA (Intelligence Artificielle)',
            label: 'IA (Intelligence Artificielle)',
        },
        {
            value: 'UX Design',
            label: 'UX Design',
        },
        {
            value: 'Développement commercial',
            label: 'Développement commercial',
        },
        {
            value: 'Marketing d’affiliation',
            label: 'Marketing d’affiliation',
        },
        {
            value: 'Vente sur le web',
            label: 'Vente sur le web',
        },
        {
            value: 'Informatique',
            label: 'Informatique',
        },
        {
            value: 'Web Design',
            label: 'Web Design',
        }
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
            value: 'Public',
            label: 'Public (tout le monde peux voir votre profil, connecté ou pas)',
        },
        {
            value: 'Limité',
            label: `Limité (seules les associations connectées à l'application peuvent voir votre profil)`,
        },
        {
            value: 'Privé',
            label: 'Privé (personne ne peux voir votre profil sans un premier contact de votre part)',
        }
    ]

    const [title, setTitle] = useState()
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [city, setCity] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')
    const [comprec, setComprec] = useState([])
    const [category, setCategory] = useState(null)
    const [dispo, setDispo] = useState(null)
    const [visibility, setVisibility] = useState(null)


    var handleSavedProject = async () => {
    
        const data = await fetch('/index/create-project', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `titleFromFront=${title}&startDateFromFront=${startDate}&endDateFromFront=${endDate}
                &cityFromFront=${city}&descFromFront=${desc}&imageFromFront=${image}&comprecFromFront=${JSON.stringify(comprec)}
                &categoryFromFront=${category.value}&dispoFromFront=${dispo.value}&visibilityFromFront=${visibility.value}&token=${props.token}`
        })
    

        const body = await data.json()

        console.log(body)

    };

        

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
                    <h1 className='titre-h1-page'>Modifier un projet</h1>
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
                            <Label for="exampleSelect" className='formulaire-label'>Vos Disponibilités</Label>
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
                            <Label for="exampleSelect" className='formulaire-label'>Votre Visibilité</Label>
                            <Select 
                                placeholder="Veuillez-choisir la visibilité de votre profil"
                                options={selectVisibilite}
                                onChange={handleChangeVisible}
                            />
                        </div>

                        <div className='formulaire-default'>
                            <Label for="exampleSelectMulti" className='formulaire-label'>Sélectionnez vos compétences</Label>
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

                    <Link onClick={() => handleSavedProject()} to='/screenprojetassodetail' className='button-default-small' style={{marginLeft: '10%', marginTop:'40px !important'}}>MODIFIER LE PROJET</Link>
                </div>
                <Footer/>
            </div>
        </div>
    );

    
}

function mapStateToProps(state){
    return {token: state.token}
}

export default connect(
    mapStateToProps,
    null
)(ScreenEditProject);
