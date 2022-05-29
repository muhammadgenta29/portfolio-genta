import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/scss/style.scss";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Mma from "./pages/Mma";
import Muliaabadi from "./pages/Muliaabadi";
import Simoney from "./pages/Simoney";
import Legacytopup from "./pages/Legacytopup";
import Jackpotcash from "./pages/Jackpotcash";
import Zatstore from "./pages/Zatstore";
import Sundayenglish from "./pages/Sundayenglish";
import Wakaspace from "./pages/Wakaspace";
import Fkp from "./pages/Fkp";
import Joco from "./pages/Joco";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mmatasik" element={<Mma />} />
          <Route path="/muliaabadi" element={<Muliaabadi />} />
          <Route path="/simoney" element={<Simoney />} />
          <Route path="/legacytopup" element={<Legacytopup />} />
          <Route path="/jackpotcash" element={<Jackpotcash />} />
          <Route path="/zatstore" element={<Zatstore />} />
          <Route path="/sundayenglish" element={<Sundayenglish />} />
          <Route path="/wakaspace" element={<Wakaspace />} />
          <Route path="/fkp" element={<Fkp />} />
          <Route path="/joco-production" element={<Joco />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
