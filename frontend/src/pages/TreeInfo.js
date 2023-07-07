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
    console.log(arvoreHistorico)
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
            <label className={styles.label} >Informações: </label>
            <div className={styles.infoBox}>
                <h1>Altura: {arvore.altura}</h1>
                <h1>Espécie: {arvore.especie}</h1>
                <h1>Família: {arvore.familia}</h1>
                <h1>Nome Popular: {arvore.nome_popular}</h1>
                <h1>Origem: {arvore.origem}</h1>
                <h1>Altura da Primeira Ramificação: {arvore.altura_primeira_ramificacao}</h1>
                <h1>Latitude: {arvore.latitude}</h1>
                <h1>Longitude: {arvore.longitude}</h1>
            </div>
            <label className={styles.label} >Histórico: </label>
            <div className={styles.infoBox}>
                <h1>Risco: {arvoreHistorico.risco}</h1>
                <h1>Data: {arvoreHistorico.data}</h1>
            </div>
        </div>
    );
}

export default TreeInfo;