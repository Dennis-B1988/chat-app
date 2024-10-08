import React from 'react';
import { MessageContainer, MessageInfoContainer } from './message.styles';

/**
 * React component that renders a message.
 * @param {string} message The content of the message.
 * @param {Timestamp} timestamp The timestamp of the message.
 * @param {string} user The user who sent the message.
 * @param {string} userImage The URL of the user's avatar.
 * @returns {ReactElement} A JSX element representing the message.
 */
function Message({message, timestamp, user, userImage}) {
  return (
    <MessageContainer>
        <img src={userImage} alt={user}/>
        <MessageInfoContainer>
            <h4>
                {user} {' '}
                <span>{timestamp?.toDate().toLocaleString()}</span>
            </h4>
            <p>{message}</p>
        </MessageInfoContainer>
    </MessageContainer>
  )
}

export default Message