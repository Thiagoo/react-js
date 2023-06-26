import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import View1 from './pages/View1';
import View2 from './pages/View2';
import View3 from './pages/View3';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<View1 />} />
        <Route path='/view2' element={<View2 />} />
        <Route path='/View3' element={<View3 />} />
      </Routes>
    </Router>
  );
}

export default App;
