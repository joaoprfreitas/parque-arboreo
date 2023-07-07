import React from 'react';
import styles from './Home.module.css';
import logo from '../images/tree_logo.png'
import SearchList from '../Components/search/searchList';

import { createSearchParams, useNavigate } from 'react-router-dom';
import { useState } from "react";

import useAxios from "../hooks/useAxios";
import axios from "../api/axiosInstance";

const HomePage = () => {
    const navigate = useNavigate();

    const [searchField, setSearchfield] = useState('')
    const [searchShow, setSearchShow] = useState(false); 
    const [dados, setDados] = useState('')
    const [error, setError] = useState('')

    // const [arvoreDados, errorImages, loading] = useAxios({
    //     axiosInstance: axios,
    //     method: 'GET',
    //     url: 'http://localhost:3500/arvore/' + searchField.toString(),
    //     requestConfig: {}
    // })

    async function searchCodigo(codigo) {
        try{
            const dadosAr = await axios.get('http://localhost:3500/arvore/' + codigo.toString())
            // console.log(dadosAr)
            setDados(dadosAr.data)
        }
        catch(e){
            console.log(e)
        }
    }

    console.log(dados)

    // dados temporarios ate requisicao estar pronta
    const arvoreData = []
    if (dados != '') arvoreData.push(dados)
    const arvoresFiltrada = arvoreData.filter(
        arvore => {
            return(
                arvore.codigo.toString().includes(searchField)
            )
        }
    )
    
    const handleChange = e => {
        setSearchfield(e.target.value);
        if (e.target.value === '') setSearchShow(false)
        else{
            if (!isNaN(e.target.value)) searchCodigo(e.target.value)
            setSearchShow(true)
        } 
        setError('');
    }
    
    function searchList() {
        if (searchShow) {
            return (
                <SearchList filteredItens={arvoresFiltrada.slice(0,4)} />
            );
        }
    }

    const toSearch = () => {
        

        navigate({
            pathname: '/TreeInfo',
            search: createSearchParams({
                id: searchField
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
                        onChange={handleChange}
                    />
                    <button onClick={toSearch}>Buscar</button>
                </div>
                {searchList()}
            </div>
        </div>
    );
};

export default HomePage;
