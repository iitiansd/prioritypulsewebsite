import React from 'react';
import './App.css';
//import Navbar from './components/Navbar';
//import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom'
//import {BrowserRouter,Route,Router} from 'react-router-dom';
import Home from './pages/home';
import Requests from './pages/requests';
import Signup from './pages/signup';
import DriverDetails from './pages/driverdetails';
import Login from './pages/login';
//import { FooterContainer } from './containers/footer'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path = '/' exact component = {Home}/>
       <Route path = '/home'  component = {Home}/>
        <Route path = '/requests' component = {Requests}/>
        <Route path = '/driverdetails'  component = {DriverDetails}/>
        <Route path = '/signup'  component = {Signup}/>
        <Route path = '/login'  component = {Login}/>
      </BrowserRouter>
    </div>
       
  )
}

export default App;
