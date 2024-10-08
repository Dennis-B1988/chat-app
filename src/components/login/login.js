import { Button } from '@mui/material';
import { signInAnonymously, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../../environment/firebase.prod';
import { LoginContainer, LoginInnerContainer } from './login.styles';

/**
 * The Login component is the page that a user will see when they first go to the
 * site. It contains a button to sign in with Google, and a link to sign in as a
 * guest.
 *
 * @returns {ReactElement} The Login component.
 */
function Login() {

    const signIn = async (event) => {
        event.preventDefault();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            alert(error.message);
        }
    }

    const signInGuest = async (event) => {
        event.preventDefault();
        try {
            await signInAnonymously(auth);
        } catch (error) {
            alert(error.message);
        }
    }

  return (
    <LoginContainer>
        <LoginInnerContainer>
            <img src="./assets/img/logo_slack_icon.png" alt="slack icon" />
            <h1>Sign in to Chat-App</h1>
            <p>chat-app.dennis-baust.com</p>

            <Button 
                onClick={signIn}>
                Sign in with Google
            </Button>
            <p className='guest' onClick={signInGuest}>Guest Login</p>
        </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login