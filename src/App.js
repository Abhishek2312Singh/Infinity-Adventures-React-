// import logo from './logo.svg';
import './App.css';
import './style.css';
import './modern-styles.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

import About from './components/About';
import React from 'react';
import Services from './components/Services';
import HomeAbout from './components/HomeAbout';
import PopularDestination from './components/PopularDestination';
import Packages from './components/Packages';
import Process from './components/Process';
import Contact from './components/Contact';
import PackageManager from './components/TripManager';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import DynamicBanner from './components/DynamicBanner';


function App() {
  // const [title,changeTitle] = useState(document.title= "Adventures - Home")
  return (
    
    <>
    
    <Router>
    <ScrollToTop />
    <Navbar/>
    
      <Routes>
        <Route exact path='/' element={
          <React.Fragment>
            <DynamicBanner/>
            <HomeAbout/>
            <PopularDestination/>
            <Packages/>
            <Services/>
            <Process/>
          </React.Fragment>
          }
        />
        <Route path='/services' element={
          <React.Fragment>
            <Services/>
            <PopularDestination/>
          </React.Fragment>
        }/>

        <Route path='/packages' element={
          <React.Fragment>
            <Packages/>
            <Process/>
          </React.Fragment>
        }/>

        <Route path='/contact' element={
          <React.Fragment>
          <Contact/>
          </React.Fragment>
        }/>

        <Route path='/about' element={
          <React.Fragment>
            <About/>
          </React.Fragment>
        }/>

        <Route path='/manage-packages' element={
          <React.Fragment>
            <PackageManager/>
          </React.Fragment>
        }/>

        <Route path='/login' element={
          <React.Fragment>
            <Login/>
          </React.Fragment>
        }/>

        <Route path='/signup' element={
          <React.Fragment>
            <Signup/>
          </React.Fragment>
        }/>

        <Route path='/dashboard' element={
          <ProtectedRoute>
            <React.Fragment>
              <Dashboard/>
            </React.Fragment>
          </ProtectedRoute>
        }/>
        
         
      </Routes>
      <Footer/>
   </Router>
   
    </>
  );
}

export default App;
