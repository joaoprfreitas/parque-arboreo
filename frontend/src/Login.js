import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Título */}
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      {/* Inputs de usuário e senha */}
      <input
        type="text"
        placeholder="Usuário"
        className="px-4 py-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Senha"
        className="px-4 py-2 mb-4 border border-gray-300 rounded"
      />

      {/* Hyperlink "Esqueci minha senha" */}
      <a href="#" className="text-blue-500 mb-6">
        Esqueci minha senha
      </a>

      {/* Botão de login */}
      <button className="px-8 py-4 bg-blue-500 text-white rounded">
        Entrar
      </button>

      {/* Hyperlink "Cadastre-se" */}
      <a href="#" className="text-blue-500 mt-4">
        Cadastre-se
      </a>
    </div>
  );
};

export default LoginPage;
