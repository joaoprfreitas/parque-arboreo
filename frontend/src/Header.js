import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-200">
      <div>
        {/* Imagem clicável que retorna para a home */}
        <a href="/">
          <img
            src="tree_logo.png"
            alt="Logo"
            className="w-8 h-8 cursor-pointer"
          />
        </a>
      </div>
      <div>
        {/* Botões "Report" e "Login" */}
        <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">
          Report
        </button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
