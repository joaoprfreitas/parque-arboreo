import React from 'react';
import styles from './Login.module.css';
import userIcon from '../images/login.png';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    
    const navigate = useNavigate();
    const register = () => {
        navigate('/Register');
    }
    const login = () => {
        navigate('/');
    }

    return(
        <div> 
            <div className={styles.container}>
                <h1>Faça login</h1>
                <div className={styles.loginBox}>
                    <img src={userIcon} alt="Icone de Login" className={styles.loginImg}/>
                    <div className={styles.loginInput}>
                        <form onSubmit={login}>
                            <input id="email" type="email" placeholder="Email"
                            className={styles.loginField} required /> <br/>

                            <input id="password" type="password" placeholder="Senha"
                            className={styles.loginField} required  /> <br/>

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
