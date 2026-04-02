import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import EnQueCreemos from "./pages/EnQueCreemos";
import Horarios from "./pages/Horarios";
import Contacto from "./pages/Contacto";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="bg-bg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/en-que-creemos" element={<EnQueCreemos />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
