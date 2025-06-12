import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Chat from "./chat";
import Checkin from "./checkin";
import History from "./historico";
import Support from "./suporte";
import PresentationScreen from "./apresentacao";
import ConversaSimulada from "./conversaSimulada";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/checkin" element={<Checkin />} />
        <Route path="/historico" element={<History />} />
        <Route path="/suporte" element={<Support />} />
        <Route path="/apresentacao" element={<PresentationScreen />} />
        <Route path="/simulador" element={<ConversaSimulada />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);