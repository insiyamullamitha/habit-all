import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container main">
        <HeroSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
