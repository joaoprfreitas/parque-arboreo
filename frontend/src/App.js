import React from 'react';
import './App.css';

//import routes and route
import { Routes, Route} from 'react-router-dom';

//import components
import Navbar from './Components/layout/Navbar';
//import Footer from './Footer';

//import pages
import Home from './pages/Home';
import ReportPage from './pages/Report';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

const App = () => {
    return ( 
        <div className='mx-auto bg-white'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='Report' element={<ReportPage />} />
                <Route path='Login' element={<LoginPage />} />
                <Route path='Register' element={<RegisterPage />} />
            </Routes>
        </div>
    );
  };

export default App;
