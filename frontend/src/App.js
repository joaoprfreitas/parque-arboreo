import React from 'react';

//import routes and route
import { Routes, Route} from 'react-router-dom';

//import components
import Header from './Header';
import LoginPage from './Login';
import ReportPage from './Report';
//import Footer from './Footer';

//import pages
import Home from './Home';

const App = () => {
    return ( 
        <div className='mx-auto bg-white'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='Report' element={<ReportPage />} />
                <Route path='Login' element={<LoginPage />} />
            </Routes>
        </div>
    );
  };

export default App;
