// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import NavbarWeb from './components/NavbarWeb';
import ProgressBar from "./components/ProgressBar"
import Home from './components/Home';
import About from './components/About';
import More from './components/More';
import Services from './components/Services';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
// import Brosur1 from './pages/Brosur1';
// import Brosur2 from './pages/Brosur2';

function App() {
  return (
    <div className="App">
      <NavbarWeb />
      <ProgressBar />
      <Home />
      <More />
      <About />
      <Services />
      <Catalog />
      {/* <Brosur1 /> */}
      {/* <Brosur2 /> */}

      <Footer />
    </div>
  );
}

export default App;
