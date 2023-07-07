import React, { useEffect, useState } from 'react';
import styles from './TreeInfo.module.css';
import { useSearchParams, useNavigate } from 'react-router-dom';
import logo from '../images/tree_logo.png'

import useAxios from "../hooks/useAxios";
import axios from "../api/axiosInstance";

const TreeInfo = () => {
    const [searchparams] = useSearchParams();
    const navigate = useNavigate();
    let idArvore = searchparams.get("id");    

    // const [risco, error, loading] = useAxios({
    //     axiosInstance: axios,
    //     method: 'GET',
    //     url: 'http://localhost:3500/risco/' + idArvore,
    //     requestConfig: {}
    // })

    const [arvore, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: 'http://localhost:3500/arvore/' + idArvore,
        requestConfig: {}
    })

    const [arvoreHistorico, error2, loading2] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: 'http://localhost:3500/arvore/historico/' + idArvore,
        requestConfig: {}
    })

    console.log(arvoreHistorico);
    console.log(arvore);

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
                <h1>Risco: </h1>
            </div>
            <div className={styles.infoBox}>
                <h1>Histórico: {}</h1>
            </div>
        </div>
    );
}

export default TreeInfo;