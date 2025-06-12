import React, { useState } from 'react';

const Support = () => {
  const [name, setName] = useState('');

  const handleSupport = () => {
    if (name) {
      alert(`Solicitação enviada por ${name}! Entraremos em contato.`);
      setName('');
    } else {
      alert('Por favor, insira seu nome!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white/10 p-6 rounded-xl w-full max-w-md">
        <h2 className="text-2xl text-cyan-300 mb-4">Conectar com Suporte</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" className="w-full p-2 mb-4 bg-purple-800 text-white rounded-lg" />
        <button onClick={handleSupport} className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full">Solicitar</button>
      </div>
    </div>
  );
};

export default Support;