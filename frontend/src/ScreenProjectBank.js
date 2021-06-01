import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CardProjectBank from './components/CardProjectBank';

const ScreenProjectBank = (props) => {

    const [projectList, setProjectList] = useState([])

    useEffect(() => {
        const findProjects = async() => {
            const data = await fetch(`/preview-project-bank/`);
            const body = await data.json()

            setProjectList(body.projectList) 
        }
    
        findProjects()    
    },[])

    let projectBankList = projectList.map((project, i) => {
        return (
            <CardProjectBank title={project.title} desc={project.desc} skills={project.competence} />
        )
    }) 

    return (
        <div className="full-width bg-skill-bank">
            <Header/>
            <div className="full-width"> 

                <h2 className="titre-h1-page">Banque de projet</h2>

                {projectBankList}

                <Footer/>
            </div>
        </div>
    );
}

export default ScreenProjectBank;