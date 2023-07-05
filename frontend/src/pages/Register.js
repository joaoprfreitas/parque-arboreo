import React from 'react';
import styles from './Register.module.css';
import userIcon from '../images/login.png';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    
    const navigate = useNavigate();
    const register = () => {
        navigate('/Login');
    }

    return(
        <div> 
            <div className={styles.container}>
                <h1>Registre-se:</h1>
                <div className={styles.loginBox}>
                    <img src={userIcon} alt="Icone de Login" className={styles.loginImg}/>
                    <div className={styles.loginInput}>
                        <form>
                            <input id="nome" type="text" placeholder="Nome Completo"
                            className={styles.loginField} required /> <br/>
                            <input id="email" type="email" placeholder="Email"
                            className={styles.loginField} required /> <br/>

                            <input id="password" type="password" placeholder="Senha"
                            className={styles.loginField} required  /> <br/>

                            <button className={styles.btn} onClick={register}>Registrar</button><br/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
