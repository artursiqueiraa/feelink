import React, { useState } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleChat = () => {
    const suggestions = {
      "você nunca me entende": "Que tal: 'Sinto que não estamos nos ouvindo. Podemos conversar com mais calma?'",
      "não aguento mais": "Tente: 'Podemos tirar um tempo para nos acalmar e depois continuar a conversa?'",
    };
    const key = Object.keys(suggestions).find(k => message.toLowerCase().includes(k));
    setResponse(key ? suggestions[key] : "Estou aqui. Quer falar mais sobre isso?");
    setMessage('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white/10 p-6 rounded-xl w-full max-w-md">
        <h2 className="text-2xl text-cyan-300 mb-4">Conversa</h2>
        <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Escreva algo..." className="w-full p-2 mb-4 bg-purple-800 text-white rounded-lg" />
        <button onClick={handleChat} className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full">Enviar</button>
        {response && <p className="mt-4 text-white">{response}</p>}
      </div>
    </div>
  );
};

export default Chat;