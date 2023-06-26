import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import './css/About.css';
import './css/Home.css';
import './css/Contact.css';
import './css/Product.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product1' element={<Product1 />} />
        <Route path='/product2' element={<Product2 />} />
        <Route path='/product3' element={<Product3 />} />
      </Routes>
    </Router>
  );
}

export default App;
