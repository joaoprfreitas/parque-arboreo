import React from 'react';
import styles from './searchItem.module.css';

// componente do dropdown para a busca com parametros
const SearchItem = (item) =>{
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.codigo}>
                    <h2>ID: {item.item.codigo}</h2>
                </div>
                <div className={styles.barra}></div>
                <div className={styles.descricao}>
                    <h3>Latitude: <br></br> {item.item.latitude}</h3>
                </div>
                <div className={styles.descricao}>
                    <h3>Longitude: <br></br> {item.item.longitude}</h3>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;