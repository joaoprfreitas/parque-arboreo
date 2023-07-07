import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li onClick={() => window.open('https://github.com/joaoprfreitas/parque-arboreo', '_blank')}>
                    <FaGithub/>
                </li>
                <li onClick={() => window.open('https://instagram.com', '_blank')}>
                    <FaInstagram/>
                </li>
                <li onClick={() => window.open('https://whatsapp.com', '_blank')}>
                    <FaWhatsapp/>
                </li>
            </ul>
            <p className={styles.copy_right}>
                &copy;<span>Copyright. All rights reserved.</span>
            </p>
        </footer>
    )
}

export default Footer