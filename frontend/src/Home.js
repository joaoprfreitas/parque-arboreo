import React from 'react';
import arvore from './logo.svg';

const HomePage = () => {
  return (
    <div>
      {/* Conteúdo principal */}
      <main className="flex flex-col items-center justify-center h-screen">
        {/* Imagem central */}
        <img
          src="tree_logo.png"
          //src="logo512.png"
          alt="Imagem Central"
          className="w-96 h-96"
        />

        {/* Barra de pesquisa */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Pesquisar...!!!"
            className="px-4 py-2 border border-gray-300 rounded"
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
            Pesquisar
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
