import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Header from './header';

function App() {
  return (
    <div className="app">
      <Router>
      <>
        <Routes>
          <Route path="/" exact element={<Header />} />     
        </Routes>
      </>
    </Router>
    </div>
  );
}

export default App;
