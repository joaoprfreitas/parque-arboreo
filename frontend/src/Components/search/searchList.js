import React from 'react';
import SearchItem from './searchItem';
import styles from './searchList.module.css';

//dropdown para todos os itens que compoem a busca
const SearchList = (filteredItens) =>{
    const filtered = filteredItens.filteredItens.map(item => <SearchItem key={item.codigo} item={item}/>)
    return(
        <div className={styles.container}>
            {filtered}
        </div>
    )
}

export default SearchList;