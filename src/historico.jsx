import React from 'react';

const History = () => {
  const history = [
    { date: '12/06/2025', mood: 'feliz' },
    { date: '11/06/2025', mood: 'ansioso' },
    { date: '10/06/2025', mood: 'triste' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white/10 p-6 rounded-xl w-full max-w-md">
        <h2 className="text-2xl text-cyan-300 mb-4">Histórico Emocional</h2>
        <ul className="text-white">
          {history.map((entry, index) => (
            <li key={index} className="mb-2">{`${entry.date}: ${entry.mood}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default History;