    import React, {useState, useEffect} from 'react';
    import { Col, Row } from 'reactstrap';
    import './App.css';
    import {Link} from 'react-router-dom';
    import Header from './components/Header';
    import Footer from './components/Footer';
    import CardCharite from './components/CardCharite';

    const ScreenSkillBank = (props) => {

        const [skillList, setSkillList] = useState([])
        const [isLimited, setIsLimited] = useState(true)

        useEffect(() => {
            const findSkills = async() => {
                const data = await fetch(`/preview-competence-bank/${isLimited}`);
                const body = await data.json()

                console.log(body.benevoleList)

                setSkillList(body.benevoleList) 
            }
        
            findSkills()    
        },[isLimited])

        let skillBankList = skillList.map((user, i) => {
            return (
                <CardCharite nom={user.nom} prenom={user.prenom} desc={user.desc} skills={user.competences} />
            )
        })

        return (
            <div className="full-width bg-skill-bank-page">
                <Header/>
                <div className="full-width"> 

                    <h2 className="titre-h1-page">Banque de compétences</h2>

                    <Row className="card-competence">
                        {skillBankList}
                    </Row>

                    {/*<Col xs="12" style={{display: 'flex', justifyContent: 'center'}}>
                        <Link to='/' className="button-default">VOIR PLUS</Link>
        </Col>*/}

                    <Footer/>
                </div>
            </div>
        );
    }

    export default ScreenSkillBank;