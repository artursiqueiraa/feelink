import React from 'react';
import { Link } from 'react-router-dom';

const App = () => (
  <div className="min-h-screen flex items-center justify-center p-6 text-white">
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 w-full max-w-md text-center shadow-2xl">
      <h1 className="text-4xl font-bold mb-6 text-cyan-300">Feelink</h1>
      <p className="mb-8 text-lg text-gray-200">Conecte. Sinta. Equilibre.</p>
      <div className="space-y-4">
        <Link to="/checkin" className="block bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-full">Check-in</Link>
        <Link to="/chat" className="block bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-full">Conversa</Link>
        <Link to="/historico" className="block bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-full">Histórico</Link>
        <Link to="/suporte" className="block bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-full">Suporte</Link>
        <Link to="/apresentacao" className="block bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full">Apresentação</Link>
        <Link to="/simulador" className="block bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-full">Simulador IA</Link>
      </div>
    </div>
  </div>
);

export default App;