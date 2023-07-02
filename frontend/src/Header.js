import React from 'react';

import {Link, Routes, Route} from 'react-router-dom';
import ReportPage from './Report';
import LoginPage from './Login';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-greenheader w-full">
            <div>
                {/* logo*/}
                <Link to='/'>
                    <img
                        src="tree_logo.png"
                        alt="Logo"
                        className="w-12 h-12 cursor-pointer"
                    />
                </Link>
            </div>
            <div>
                {/* Botões "Report" e "Login" */}
                <Link className='' to='/Report'>
                    Report
                </Link>
                <Link className='px-4 py-3' to='/Login'>
                    Login
                </Link>
            </div>
        </header>
    );
};

export default Header;