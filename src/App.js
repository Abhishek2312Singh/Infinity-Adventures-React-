// import logo from './logo.svg';
import './App.css';
import './style.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import About from './components/About';
import React from 'react';
import Services from './components/Services';
import HomeAbout from './components/HomeAbout';
import PopularDestination from './components/PopularDestination';
import Packages from './components/Packages';
import Process from './components/Process';
import Contact from './components/Contact';
import Hero from './components/Hero';


function App() {
  // const [title,changeTitle] = useState(document.title= "Adventures - Home")
  return (
    
    <>
    
    <Router>
    <Navbar/>
    
      <Routes>
        <Route exact path='/' element={
          <React.Fragment>
            <Hero data="Enjoy Your Vacation With Us" tagLine="We're Here to Help You Plan Your Dream Trip."/>
            <HomeAbout/>
            <Services/>
            <PopularDestination/>
            <Packages/>
            <Process/>
          </React.Fragment>
          }
        />
        <Route path='/services' element={
          <React.Fragment>
            <Hero data="Services" tagLine="Services provided by us."/>
            <Services/>
            <PopularDestination/>
          </React.Fragment>
        }/>

        <Route path='/packages' element={
          <React.Fragment>
            <Hero data="Packages" tagLine="Packages provided by us."/>
            <Packages/>
            <Process/>
          </React.Fragment>
        }/>

        <Route path='/contact' element={
          <React.Fragment>
          <Hero data = "Contact Us" tagLine="You can contact us via email and whatsapp."/>
          <Contact/>
          </React.Fragment>
        }/>

        <Route path='/about' element={
          <React.Fragment>
            <Hero data="About Us" tagLine="This is the information about the company."/>
            <About/>
          </React.Fragment>
        }/>
        
         
      </Routes>
      <Footer/>
   </Router>
   
    </>
  );
}

export default App;
