import React from 'react';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
      <>
        <Routes>
          <Route path="/" exact element={<h1>This is the homepage</h1>} />
        </Routes>
      </>
    </Router>
    </div>
  );
}

export default App;
