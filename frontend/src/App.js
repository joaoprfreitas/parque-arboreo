import React from 'react';

//import routes and route
import { Routes, Route} from 'react-router-dom';

//import components
import Header from './Header';
//import Footer from './Footer';

//import pages
import Home from './Home';

const App = () => {
    return ( 
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
    );
  };

export default App;
