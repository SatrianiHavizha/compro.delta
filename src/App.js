import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import BrosurT from './pages/BrosurT';
import BrosurTB from './pages/BrosurTB';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/brosurT' element={<BrosurT />} />
        <Route path='/brosurTB' element={<BrosurTB />} />
      </Routes>
    </Router>
  );
}

export default App;
