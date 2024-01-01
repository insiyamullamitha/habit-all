import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MyHabits from "./pages/MyHabits";
import Contact from "./pages/Contact";
import LogIn from "./pages/LogIn";
import Footer from "./components/Footer";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myhabits" element={<MyHabits />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
