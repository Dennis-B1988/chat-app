import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../../environment/firebase.prod';
import { LoginContainer, LoginInnerContainer } from './login.styles';

function Login() {

    const signIn = async (event) => {
        event.preventDefault();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            alert(error.message);
        }
    }

  return (
    <LoginContainer>
        <LoginInnerContainer>
            <img src="./assets/img/logo_slack_icon.png" alt="slack icon" />
            <h1>Sign in to Chat-App</h1>
            <p>.com</p>

            <Button 
                onClick={signIn}>
                Sign in with Google
            </Button>
        </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login