import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AgenteNotifPage } from "./pages/AgenteNotifPage";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";
import { DataNotifPage } from "./pages/DataNotifPage";
import { AnimaisPage } from "./pages/AnimaisPage";
import { SintomasPage } from "./pages/SintomasPage";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agente-notificacao" element={<AgenteNotifPage />} />
        <Route path="/data-notificacao" element={<DataNotifPage />} />
        <Route path="/animais-notificacao" element={<AnimaisPage />} />
        <Route path="/sintomas-notificacao" element={<SintomasPage />} />
      </Routes>
    </Router>
  );
};

export default App;
