import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Spinner from 'react-spinkit';
import './App.css';
import { AppBody, AppLoading, AppLoadingContent } from './App.styles';
import Chat from './components/chat/chat';
import Header from './components/header/header';
import Login from './components/login/login';
import Sidebar from './components/sidebar/sidebar';
import { auth } from './environment/firebase.prod';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img src="./assets/img/logo_slack_icon.png" alt="slack icon" />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContent>
      </AppLoading>
    )
  }

  return (
    <div className="app">
      <Router>
        {!user ? <Login /> : 
      <>
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Chat />}/>   
          </Routes>
        </AppBody>
      </>
      }
    </Router>
    </div>
  );
}

export default App;

