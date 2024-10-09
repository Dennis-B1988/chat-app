import Button from '@mui/material/Button';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../environment/firebase.prod';
import { ChatInputContainer } from './chat-input.styles';

/**
 * React component that renders a chat input form. It will send a message to
 * the Firestore database when the form is submitted.
 * @param {string} channelName The name of the channel to send the message to.
 * @param {string} channelId The ID of the channel to send the message to.
 * @returns {ReactElement} A JSX element representing the chat input form.
 */
function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState('');
    const [user] = useAuthState(auth);
    const guestAvatar = './assets/img/guest_avatar.png';

    const sendMessage = async (event) => {
        event.preventDefault();

        if(!channelId || !input) {
            return false;
        }

        await addDoc(collection(db, 'channels', channelId, 'messages'), {
        timestamp: serverTimestamp(),
        message: input,
        user: user.displayName,
        userImage: user.photoURL || guestAvatar,
      });

      setInput('');
    };

  return (
    <ChatInputContainer>
        <form>
            <input value={input} onChange={event => setInput(event.target.value)} placeholder={`Message #${channelName}`}/>
            <Button hidden type="submit" onClick={sendMessage}>Send</Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput