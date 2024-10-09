import { Button, TextField } from '@mui/material';
import { onAuthStateChanged, signInAnonymously, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth, provider } from '../../environment/firebase.prod';
import { LoginContainer, LoginInnerContainer } from './login.styles';
import useAuth from '../../hooks/useAuth';

/**
 * Handles login functionality for the app.
 *
 * @return {React.ReactElement} The JSX element to render.
 */
function Login() {
    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const { updateUserProfile, updateLocalUser } = useAuth();

    /**
     * Handles signing in with Google.
     *
     * @param {React.FormEvent<HTMLFormElement>} event The form event
     * @return {Promise<void>}
     */
    const signIn = async (event) => {
        event.preventDefault();
        try {
            await signInWithPopup(auth, provider);
        } catch (er) {
            alert(er.message);
        }
    }

    /**
     * Handles changes to the text input, updating the state and
     * clearing the error if the input is valid.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event The input event
     */
    const handleInput = (event) => {
        setName(event.target.value);
        if (event.target.value.trim() !== '') {
            setError(false);
        }
    }

    /**
     * Handles signing in as a guest, with the given name.
     *
     * If the name is empty, sets the error state to true and does not
     * sign in.
     *
     * @param {React.FormEvent<HTMLFormElement>} event The form event
     * @return {Promise<void>}
     */
    const signInGuest = async (event) => {
        event.preventDefault();
        if (name.trim() === '') {
            setError(true);
            return;
        }
        try {
            await signInAnonymously(auth);
            updateLocalUser(name);
            await updateUserProfile(name);
        } catch (er) {
            alert(er.message);
        }
    }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="./assets/img/logo_slack_icon.png" alt="slack icon" />
                <h1>Sign in to Chat-App</h1>
                <p>chat-app.dennis-baust.com</p>

                <TextField
                    onChange={handleInput}
                    className='name'
                    placeholder="Name"
                    variant="outlined"
                    error={error}
                    helperText={error ? "Please enter a name." : ""}
                />
                <Button className='guest' onClick={signInGuest}>Guest Login</Button>

                <Button
                    onClick={signIn} disabled>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login;
