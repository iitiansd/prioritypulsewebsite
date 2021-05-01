import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/home';
import Requests from './pages/requests';
import Signup from './pages/signup';
import { FooterContainer } from './containers/footer'
function App() {
  return (
   <Router>
      <Navbar/>
      <Switch>
        <Route path='/home' exact component = {Home}/>
        <Route path='/requests' exact component = {Requests}/>
        <Route path='/signup' exact component = {Signup}/>
        </Switch>
        <FooterContainer/>
    </Router>
  );
}

export default App;
