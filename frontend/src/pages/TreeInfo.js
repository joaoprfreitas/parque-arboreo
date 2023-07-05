import React, { useEffect, useState } from 'react';
import styles from './TreeInfo.module.css';
import { useSearchParams, useNavigate } from 'react-router-dom';

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
    
    console.log(risco.descricao);

    return(
        <div> 
            <div className={styles.container}>
                <h1>Confira informações da árvore:</h1>
                <div className={styles.infoBox}>
                    <div className={styles.infoInput}>
                        <h1>Risco: {risco.descricao}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TreeInfo;