import React from 'react';
import styles from './TreeInfo.module.css';
import { useNavigate } from 'react-router-dom';

const TreeInfo = () => {
    
    const navigate = useNavigate();

    return(
        <div> 
            <div className={styles.container}>
                <h1>Confira informações da árvore:</h1>
                <div className={styles.infoBox}>
                    <div className={styles.infoInput}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TreeInfo;