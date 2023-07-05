import React, { useState } from 'react';
import styles from './Report.module.css';
import { useNavigate } from 'react-router-dom';


import useAxios from "../hooks/useAxios";
import axios from "../api/axiosInstance";

const ReportPage = () => {
    const navigate = useNavigate(); 
    const [codigo, setCodigo] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [error, setError] = useState('');

    async function register(reportDescricao, reportLocalizacao, userEmail) {
        try {
            const res = await axios.post('http://localhost:3500/report/', {
                descricao: reportDescricao + '. Localização: ' + reportLocalizacao,
                data: new Date(Date.now()).toLocaleDateString(),
                usuario: userEmail,
                situacao: 0
            })

            navigate('/')
        } catch(e) {
            setError(e.response.data[0].message);
        }
    }

    const send = () => {
        register(descricao, localizacao, 'cleber@usp.br')
    }
    return(
        <div> 
            <div className={styles.container}>
                <h1>Reporte uma árvore em situação adversa:</h1>
                <div className={styles.reportBox}>
                    <div className={styles.reportInput1}>
                        <form>
                            <label>Código</label>
                            <input type="text" placeholder="Ex.: 1234567890"
                            className={styles.reportField} onChange={(e) => [setCodigo(e.target.value), setError('')]}
                            required /> <br/>

                            <label>Localização</label>
                            <input type="text" placeholder="Ex.: Campus1:E1"
                            className={styles.reportField} onChange={(e) => [setLocalizacao(e.target.value), setError('')]}
                            required  /> <br/>

                            <label>Descrição</label>
                            <textarea type="text" placeholder="Escreva uma descrição breve sobre os problemas observados."
                            className={styles.reportDescription} onChange={(e) => [setDescricao(e.target.value), setError('')]}
                            required /> <br/>

                            <button className={styles.btn} onClick={send}>Enviar</button><br/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportPage;
