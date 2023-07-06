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
    const [error, setError] = useState('')

    // dados temporarios ate requisicao estar pronta
    const arvoreData = [
        {
            codigo: 1,
            latitude: -90, 
            longitude: -180, 
            especie: "Teste", 
            familia: "Testando", 
            nome_popular: "Testador",
            origem: "Nativa", 
            dap: 0, 
            dc: 0, 
            altura_primeira_ramificacao: 0, 
            altura: 0
        },
        {
            codigo: 2,
            latitude: 90, 
            longitude: 180, 
            especie: "Test", 
            familia: "Testing", 
            nome_popular: "Tester",
            origem: "Exótica", 
            dap: 1, 
            dc: 1, 
            altura_primeira_ramificacao: 0, 
            altura: 0
        },
        {
            codigo: 3,
            latitude: 90, 
            longitude: 180, 
            especie: "Test", 
            familia: "Testing", 
            nome_popular: "Tester",
            origem: "Exótica", 
            dap: 1, 
            dc: 1, 
            altura_primeira_ramificacao: 0, 
            altura: 0
        },
        {
            codigo: 4,
            latitude: 90, 
            longitude: 180, 
            especie: "Test", 
            familia: "Testing", 
            nome_popular: "Tester",
            origem: "Exótica", 
            dap: 1, 
            dc: 1, 
            altura_primeira_ramificacao: 0, 
            altura: 0
        },
        {
            codigo: 5,
            latitude: 90, 
            longitude: 180, 
            especie: "Test", 
            familia: "Testing", 
            nome_popular: "Tester",
            origem: "Exótica", 
            dap: 1, 
            dc: 1, 
            altura_primeira_ramificacao: 0, 
            altura: 0
        }
    ]
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
        else setSearchShow(true)
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
