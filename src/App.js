import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Spinner from 'react-spinkit';
import './App.css';
import { AppBody, AppLoading, AppLoadingContent } from './App.styles';
import Chat from './components/chat/chat';
import Header from './components/header/header';
import Login from './components/login/login';
import PrivacyPolicy from './components/privacy-policy/privacy-policy';
import SidebarMobileButton from './components/sidebar-mobile-button/sidebar-mobile-button';
import Sidebar from './components/sidebar/sidebar';
import { auth } from './environment/firebase.prod';

function App() {
  const [user, loading] = useAuthState(auth);
  const [showPolicy, setshowPolicy] = React.useState(false);
  const [$isSidebarVisible, setIsSidebarVisible] = React.useState(false);

  const togglePolicy = () => setshowPolicy(prev => !prev);

  const toggleSidebar = () => setIsSidebarVisible(prev => !prev);

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
        <Header togglePolicy={togglePolicy} showPolicy={showPolicy} />
        <AppBody>
          {showPolicy && <PrivacyPolicy />}
          <Sidebar $isSidebarVisible={$isSidebarVisible} />
          <SidebarMobileButton toggleSidebar={toggleSidebar} />
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

