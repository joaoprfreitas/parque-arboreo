import React from 'react';
import styles from './searchItem.module.css';

const SearchItem = (item) =>{
    return(
        <div className={styles.container}>
            {/* <img className="br-100 h3 w3 dib" alt={item.name} src={process.env.PUBLIC_URL + item.imgPath} /> */}
            <div className={styles.info}>
                <h2>{item.item.codigo}</h2>
                <p>{item.item.especie} {item.item.familia}</p>
            </div>
        </div>
    )
}

export default SearchItem;