import React from 'react';
import styles from './Home.module.css';
import logo from '../images/tree_logo.png'

// bootstrap
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

const HomePage = () => {
    return (
        <div>
            {/* Conteúdo principal */}
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Faça sua busca:</h1>
                </div>
                <div className={styles.image}>
                    <img src={logo} alt="Imagem Logo"/>
                </div>
                <div className={styles.search}>
                    <input type="text" placeholder="Digite o código da árvore para realizar a busca."
                    />
                    <button>Buscar</button>
                </div>
            </div>
        </div>
    );
};
// const HomePage = () => {
//   return (
//     <div>
//         {/* Conteúdo principal */}
//         <main className="flex flex-col items-center justify-center h-screen">
//             {/* Imagem central */}
//             <img
//             src="tree_logo.png"
//             alt="Imagem Central"
//             className="max-w-screen-sm max-h-screen-sm"
//             />

//             {/* Barra de pesquisa */}
//             <div className="mt-4">
//                 <input
//                     type="text"
//                     placeholder="Digite o código da árvore para realizar a busca"
//                     className="px-4 py-2 border-none rounded-full bg-graylight w-96"
//                 />
//                 <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
//                     Pesquisar
//                 </button>
//             </div>
//         </main>
//     </div>
//   );
// };

export default HomePage;
