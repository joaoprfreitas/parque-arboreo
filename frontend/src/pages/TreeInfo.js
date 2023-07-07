import React, { useEffect, useState } from 'react';
import styles from './TreeInfo.module.css';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import logo from '../images/tree_logo.png'

import useAxios from "../hooks/useAxios";
import axios from "../api/axiosInstance";

const TreeInfo = () => {
    const [searchparams] = useSearchParams();
    const navigate = useNavigate();
    let idArvore = searchparams.get("id");    

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

    const [arvoreTags, error3, loading3] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: 'http://localhost:3500/arvore/tag/' + idArvore,
        requestConfig: {}
    })

    // console.log(arvoreTags)
    // console.log(arvoreHistorico)
    console.log(arvore)

    return(
        <div className={styles.container}>
            <h1>Confira informações da árvore:</h1>
            <div>
                <img className={styles.infoImg} src={logo} alt="Imagem Árvore"/>
            </div>
            <div>
                <Link to="/Report">
                    <button className={styles.btn}> Report</button>
                </Link>
            </div>
            <div className={styles.infoBox}>
                <h1>Altura: </h1>
                <h1>Risco: </h1>
                <h1>Risco: </h1>
                <h1>Risco: </h1>
            </div>
            <div className={styles.infoBox}>
                <h1>Histórico: {}</h1>
            </div>
        </div>
    );
}

export default TreeInfo;