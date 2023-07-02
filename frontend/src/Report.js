import React from 'react';

const ReportPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {/* Inputs de Código e Localização */}
            <div className="flex mb-4">
                <input
                    type="text"
                    placeholder="Código"
                    className="px-4 py-2 mr-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Localização"
                    className="px-4 py-2 border border-gray-300 rounded"
                />
            </div>

            {/* Caixa de texto para Descrição */}
            <textarea
                placeholder="Descrição"
                className="w-full px-4 py-2 border border-gray-300 rounded"
            ></textarea>
        </div>
    );
};

export default ReportPage;
