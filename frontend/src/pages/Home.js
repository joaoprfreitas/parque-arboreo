import React from 'react';
import styles from './Home.module.css';
import logo from '../images/tree_logo.png'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const search = () => {
        

        navigate('/TreeInfo');
    }

    return (
        <div>
            {/* Conteúdo principal */}
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Faça sua busca:</h1>
                </div>
                <div className={styles.image}>
                    <img src={logo} alt="Imagem Logo"/>
                </div>
                <div className={styles.search}>
                    <input type="text" placeholder="Digite o código da árvore para realizar a busca."
                    />
                    <button onClick={search}>Buscar</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
