import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

function Footer() {    
    return (
        <div>
            <ul className={styles.nav_list} >
                <li className={styles.item}>
                    <Link to="/" className={styles.link}>Home</Link>
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