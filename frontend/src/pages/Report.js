import React from 'react';
import styles from './Report.module.css';

const ReportPage = () => {

    return(
        <div> 
            <div className={styles.container}>
                <h1>Reporte uma árvore em situação adversa:</h1>
                <div className={styles.reportBox}>
                    <div className={styles.reportInput1}>
                        <form>
                            <label>Código</label>
                            <input type="text" placeholder="Ex.: 1234567890"
                            className={styles.reportField} required /> <br/>

                            <label>Localização</label>
                            <input type="text" placeholder="Ex.: Campus1:E1"
                            className={styles.reportField} required  /> <br/>

                            <label>Descrição</label>
                            <textarea type="text" placeholder="Escreva uma descrição breve sobre os problemas observados."
                            className={styles.reportDescription} required /> <br/>

                            <button className={styles.btn} >Enviar</button><br/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportPage;
