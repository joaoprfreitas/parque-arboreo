import React from 'react';
import { Link } from "react-router-dom";

import styles from './Navbar.module.css';
import logo from '../../images/tree_logo.png';

function Footer() {    
    return (
        <div>
            <div>
                <Link to="https://github.com/joaoprfreitas/parque-arboreo" className={styles.link}>Github</Link>
            </div>

            <ul className={styles.nav_list} >
                <li className={styles.item}>
                    <Link to="https://github.com/joaoprfreitas/parque-arboreo" className={styles.link}>Github</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Report" className={styles.link}>Report</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Login" className={styles.link}>Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default Footer;