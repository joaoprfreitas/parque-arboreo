import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

import styles from './Footer.module.css';

function Footer() {    
    return (
        <div className={styles.footer}>
            <ul className={styles.nav_list} >
                <li className={styles.item}>
                    <Link to="https://github.com/joaoprfreitas/parque-arboreo" className={styles.link}>
                        <FaGithub/> GitHub
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Footer;