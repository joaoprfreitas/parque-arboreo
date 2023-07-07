import React, {useState} from 'react';
import styles from './Register.module.css';
import userIcon from '../images/login.png';
import { useNavigate } from 'react-router-dom';

import useAxios from "../hooks/useAxios";
import axios from "../api/axiosInstance";

const RegisterPage = () => {
    
    // Getters e Setters
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [nusp, setNusp] = useState('');
    const [error, setError] = useState('');

    // Função que faz a requisição POST para o banco de dados para cadastrar o novo usuário
    async function register(userEmail, userPassword, userName, userCPF, userNusp) {
        try {
            // console.log(userEmail);
            // console.log(userPassword);
            // console.log(userName);
            // console.log(userCPF);
            // console.log(userNusp);

            const res = await axios.post('http://localhost:3500/usuario/', {
                email: userEmail,
                senha: userPassword,
                nome: userName,
                cpf: userCPF,
                nusp: userNusp,
                permissao: 0
            })
            navigate('/Login');
        } catch(e) {
            setError(e.response.data[0].message);
        }
    }

    // Função para passar as variáveis para o escopo da função register
    const send = (e) => {
        e.preventDefault();
        register(email, senha, nome, cpf, nusp);
    }

    return(
        <div> 
            <div className={styles.container}>
                <h1>Registre-se:</h1>
                <div className={styles.loginBox}>
                    <img src={userIcon} alt="Icone de Login" className={styles.loginImg}/>
                    <div className={styles.loginInput}>
                        {/* Formulário que chama os Setters através do event listener onChange */}
                        <form onSubmit={send}>
                            <input id="nome" type="text" placeholder="Nome Completo"
                            className={styles.loginField} onChange={(e) => [setNome(e.target.value), setError('')]} required /> <br/>

                            <input id="email" type="email" placeholder="Email"
                            className={styles.loginField} onChange={(e) => [setEmail(e.target.value), setError('')]} required /> <br/>

                            <input id="password" type="password" placeholder="Senha"
                            className={styles.loginField} onChange={(e) => [setSenha(e.target.value), setError('')]} required  /> <br/>

                            <input id="cpf" type="text" placeholder="CPF"
                            className={styles.loginField} onChange={(e) => [setCPF(e.target.value), setError('')]} required /> <br/>

                            <input id="nusp" type="number" placeholder="Nº USP"
                            className={styles.loginField} onChange={(e) => [setNusp(e.target.value), setError('')]} required /> <br/>

                            <input type='submit' value="Registrar" className={styles.btn} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
