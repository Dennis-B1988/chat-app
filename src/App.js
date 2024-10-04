import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import { AppBody } from './app.styles';
import Header from './components/header/header';

function App() {
  return (
    <div className="app">
      <Router>
      <>
        <Header />
        <AppBody>
          <Routes>
            <Route path="/" exact element={<h1>Chat</h1>}/>     
          </Routes>
        </AppBody>
      </>
    </Router>
    </div>
  );
}

export default App;

