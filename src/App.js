import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Categories from './components/categories';
import Books from './components/books';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/*" element={<Books />} />
      </Routes>
    </Router>
  );
}

export default App;
