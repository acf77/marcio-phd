import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AgenteNotifPage } from "./pages/AgenteNotifPage";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";
import { DataNotifPage } from "./pages/DataNotifPage";
import { AnimaisPage } from "./pages/AnimaisPage";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agente-notificacao" element={<AgenteNotifPage />} />
        <Route path="/data-notificacao" element={<DataNotifPage />} />
        <Route path="/animais-notificacao" element={<AnimaisPage />} />
      </Routes>
    </Router>
  );
};

export default App;
