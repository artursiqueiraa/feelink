import React from 'react';

const PresentationScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white/10 p-6 rounded-xl w-full max-w-md">
        <h2 className="text-2xl text-cyan-300 mb-4">Sobre o Feelink</h2>
        <p className="text-white text-lg">
          Feelink é um aplicativo de bem-estar emocional que integra sugestões empáticas em tempo real, check-ins de humor, histórico emocional, suporte humano e IA para intervenções suaves durante conversas difíceis.
        </p>
      </div>
    </div>
  );
};

export default PresentationScreen;