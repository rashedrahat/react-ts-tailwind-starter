import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import { appRoutes } from './utils/routes';

import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Teams from './components/Teams';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import HireUS from './components/HireUS';

function App() {
  return (
    <Router>
      <>
        <Navbar/>
        <hr/>
        <Switch>
          <Route path={appRoutes.HOME} exact component={Home}/>
          <Route path={appRoutes.SERVICES} exact component={Services}/>
          <Route path={appRoutes.TEAMS} component={Teams} />
          <Route path={appRoutes.PORTFOLIO} component={Portfolio}/>
          <Route path={appRoutes.WHY_CHOOSE_US} component={WhyChooseUs}/>
          <Route path={appRoutes.CONTACT} component={Contact}/>
          <Route path={appRoutes.HIRE_US} component={HireUS}/>
        </Switch>
      </>
    </Router>
  );
}

export default App;
