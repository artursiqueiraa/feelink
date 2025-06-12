import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './chat';
import Checkin from './checkin';
import Historico from './historico';
import Suporte from './suporte';
import Apresentacao from './apresentacao';
import ConversaSimulada from './conversaSimulada';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Apresentacao />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/checkin' element={<Checkin />} />
        <Route path='/historico' element={<Historico />} />
        <Route path='/suporte' element={<Suporte />} />
        <Route path='/conversa' element={<ConversaSimulada />} />
      </Routes>
    </Router>
  );
}