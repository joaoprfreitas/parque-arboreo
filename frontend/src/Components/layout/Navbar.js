import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';
import logo from '../../images/tree_logo.png';

// import { useEffect } from 'react';

function Navbar() {    
    return (
        /*
        * Navbar do site
        */
        <nav>
            <div>
                <NavLink to="/"  >
                    <img className={styles.logo} src={logo} alt="Logo" width="150" />
                </NavLink>
            </div>

            <ul className={styles.nav_list} >
                <li className={styles.item}>
                    <NavLink to="/" className={styles.link}>Home</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/Report" className={styles.link}>Report</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/Login" className={styles.link}>Login</NavLink>
                </li>
            </ul>
        
        </nav>
    )
}

export default Navbar;