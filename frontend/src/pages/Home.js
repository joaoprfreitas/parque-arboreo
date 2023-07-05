import React from 'react';
import styles from './Home.module.css';
import logo from '../images/tree_logo.png'
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useState } from "react";

import useAxios from "../hooks/useAxios";
import axios from "../api/axiosInstance";

const HomePage = () => {
    const navigate = useNavigate();

    const [search, setSearch] = useState('')
    const [error, setError] = useState('')

    const toSearch = () => {
        

        navigate({
            pathname: '/TreeInfo',
            search: createSearchParams({
                id: search
            }).toString()
        });
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Faça sua busca:</h1>
                </div>
                <div className={styles.image}>
                    <img src={logo} alt="Imagem Logo"/>
                </div>
                <div className={styles.search}>
                    <input type="text" placeholder="Digite o código da árvore para realizar a busca."
                        onChange={(e) => [setSearch(e.target.value), setError('')]}
                    />
                    <button onClick={toSearch}>Buscar</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
