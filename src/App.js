import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import { AppBody } from './App.styles';
import Chat from './components/chat/chat';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className="app">
      <Router>
      <>
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Chat />}/>   
          </Routes>
        </AppBody>
      </>
    </Router>
    </div>
  );
}

export default App;

