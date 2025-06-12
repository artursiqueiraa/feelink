import React, { useState } from 'react';

const ConversaSimulada = () => {
  const [input, setInput] = useState('');
  const [sugestao, setSugestao] = useState('');

  const analisarMensagem = (msg) => {
    if (msg.includes("você nunca me entende")) {
      return "Sugestão: 'Sinto que não estamos nos ouvindo. Podemos conversar com mais calma?'";
    } else if (msg.includes("não aguento mais")) {
      return "Sugestão: 'Acho que precisamos de um tempo para refletir. Que tal uma pausa?'";
    } else {
      return "Estou aqui. Quer falar mais sobre isso?";
    }
  };

  const handleMensagem = () => {
    const s = analisarMensagem(input.toLowerCase());
    setSugestao(s);
    setInput('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white/10 p-6 rounded-xl w-full max-w-md">
        <h2 className="text-xl text-yellow-400 mb-4">Simulador de Respostas IA</h2>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Digite uma frase da conversa..." className="w-full p-2 mb-4 bg-purple-800 text-white rounded" />
        <button onClick={handleMensagem} className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">Simular</button>
        {sugestao && <p className="mt-4 text-white">{sugestao}</p>}
      </div>
    </div>
  );
};

export default ConversaSimulada;