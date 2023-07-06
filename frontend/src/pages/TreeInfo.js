import React, { useEffect, useState } from 'react';
import styles from './TreeInfo.module.css';
import { useSearchParams, useNavigate } from 'react-router-dom';
import logo from '../images/tree_logo.png'

import useAxios from "../hooks/useAxios";
import axios from "../api/axiosInstance";

const TreeInfo = () => {
    const [searchparams] = useSearchParams();
    const navigate = useNavigate();
    let idRisco = searchparams.get("id");    

    const [risco, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: 'http://localhost:3500/risco/' + idRisco,
        requestConfig: {}
    })

    const [arvore, error2, loading2] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: 'http://localhost:3500/arvore/' + idRisco,
        requestConfig: {}
    })

    console.log(arvore);
    
    // 

    return(
        <div className={styles.container}>
            <h1>Confira informações da árvore:</h1>
            <div>
                <img className={styles.infoImg} src={logo} alt="Imagem Árvore"/>
            </div>
            <div>
                <button className={styles.btn}> Report</button>
            </div>
            <div className={styles.infoBox}>
                <h1>Risco: {risco.descricao}</h1>
            </div>
            <div className={styles.infoBox}>
                <h1>Histórico: {}</h1>
            </div>
        </div>
    );
}

export default TreeInfo;