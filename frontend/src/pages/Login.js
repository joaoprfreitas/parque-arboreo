import React, {useState} from 'react';
import styles from './Login.module.css';
import userIcon from '../images/login.png';
import { useSearchParams, useNavigate } from 'react-router-dom';

import useAxios from "../hooks/useAxios";
import axios from "../api/axiosInstance";

const LoginPage = () => {

    // Getters e Setters
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();
    const register = () => {
        navigate('/Register');
    }
    const login = () => {
        navigate('/');
    }

    async function check(userEmail, userPassword){
    }

    const send = (e) => {
        e.preventDefault();
        check(email, senha);
    }

    return(
        <div> 
            <div className={styles.container}>
                <h1>Faça login</h1>
                <div className={styles.loginBox}>
                    <img src={userIcon} alt="Icone de Login" className={styles.loginImg}/>
                    <div className={styles.loginInput}>
                        {/* Formulário que chama os Setters através do event listener onChange */}
                        <form onSubmit={check}>
                            <input id="email" type="email" placeholder="Email"
                            className={styles.loginField} onChange={(e) => [setEmail(e.target.value), setError('')]} required /> <br/>

                            <input id="password" type="password" placeholder="Senha"
                            className={styles.loginField} onChange={(e) => [setSenha(e.target.value), setError('')]} required  /> <br/>

                            <input type='submit' value="Login" className={styles.btn} />
                        </form>

                        <p><b>Não possui conta?</b>&nbsp;
                            <button className={styles.btn} onClick={register}>Registre-se</button>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
