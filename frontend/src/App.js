import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import ScreenHome from './ScreenHome';
import ScreenHomeBenevole from './ScreenHomeBenevoles';
import ScreenHomeOeuvre from './ScreenHomeOeuvre';
import ScreenInscriptionBenevoles from './ScreenInscriptionBenevoles';
import ScreenConnectionBenevoles from './ScreenConnectionBenevoles';
import ScreenInscriptionBenevolesFormulaire from './ScreenInscriptionBenevolesFormulaire';
import ScreenDashboardBenevoles from './ScreenDashboardBenevoles';
import ScreenProjectBank from './ScreenProjectBank';
import ScreenSkillBank from './ScreenSkillBank';
import ScreenProjetDetail from './ScreenProjetDetail';
import ScreenProjetAssoDetail from './ScreenProjetAssoDetail';
import ScreenProfilBenevole from './ScreenProfilBenevole';
import ScreenInscriptionOeuvreFormulaire from './ScreenInscriptionOeuvreFormulaire';
import ScreenDashboardOeuvre from './ScreenDashboardOeuvre';
import ScreenCreationProjet from './ScreenCreationProjet';
import ScreenEditProject from './ScreenEditProject';
import ScreenMentionsLegales from './ScreenMentionsLegales';
import ScreenAPropos from './ScreenAPropos';
import ScreenGestionProjet from './ScreenGestionProjet';

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import token from './reducers/token'
import projectToken from './reducers/projectToken'
import dataProject from './reducers/dataProject'

const store = createStore(combineReducers({token, projectToken, dataProject}))

function App() {
  return (
    <Provider store={store}> 
      <Router>
        <Switch>
          <Route component={ScreenHome} path="/" exact />
          <Route component={ScreenHomeBenevole} path="/screenhomebenevoles" exact />
          <Route component={ScreenHomeOeuvre} path="/screenhomeoeuvres" exact />
          <Route component={ScreenInscriptionBenevoles} path="/screeninscriptionbenevoles" exact />
          <Route component={ScreenConnectionBenevoles} path="/screenconnectionbenevoles" exact />
          <Route component={ScreenInscriptionBenevolesFormulaire} path="/screeninscriptionbenevolesformulaire" exact />
          <Route component={ScreenDashboardBenevoles} path="/screendashboardbenevoles" exact />
          <Route component={ScreenProjectBank} path="/screenprojectbank" exact />
          <Route component={ScreenProjetDetail} path="/screenprojetdetail" exact />
          <Route component={ScreenProfilBenevole} path="/screenprofilbenevole" exact />
          <Route component={ScreenInscriptionOeuvreFormulaire} path="/screeninscriptionoeuvreformulaire" exact />
          <Route component={ScreenDashboardOeuvre} path="/screendashboardoeuvre" exact />
          <Route component={ScreenCreationProjet} path="/screencreationprojet" exact />
          <Route component={ScreenProjetAssoDetail} path="/screenprojetassodetail" exact />
          <Route component={ScreenSkillBank} path="/screenskillbank" exact />
          <Route component={ScreenEditProject} path="/screeneditproject" exact />
          <Route component={ScreenMentionsLegales} path="/screenmentionslegales" exact />
          <Route component={ScreenAPropos} path="/screenapropos" exact />
          <Route component={ScreenGestionProjet} path="/screengestionprojet" exact />

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;