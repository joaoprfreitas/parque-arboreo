import React from 'react';

const HomePage = () => {
  return (
    <div>
        {/* Conteúdo principal */}
        <main className="flex flex-col items-center justify-center h-screen">
            {/* Imagem central */}
            <img
            src="tree_logo.png"
            alt="Imagem Central"
            className="max-w-screen-sm max-h-screen-sm"
            />

            {/* Barra de pesquisa */}
            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Digite o código da árvore para realizar a busca"
                    className="px-4 py-2 border-none rounded-full bg-graylight w-96"
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
