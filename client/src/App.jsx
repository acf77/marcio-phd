import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AgenteNotifPage } from "./pages/AgenteNotifPage";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";
import { DataNotifPage } from "./pages/DataNotifPage";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agente-notificacao" element={<AgenteNotifPage />} />
        <Route path="/data-notificacao" element={<DataNotifPage />} />
      </Routes>
    </Router>
  );
};

export default App;
