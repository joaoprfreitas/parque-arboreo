import React from 'react';
import styles from './searchItem.module.css';

const SearchItem = (item) =>{
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.codigo}>
                    <h2>ID: {item.item.codigo}</h2>
                </div>
                <div className={styles.descricao}>
                    <h3>Espécie e Família: {item.item.especie} {item.item.familia}</h3>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;