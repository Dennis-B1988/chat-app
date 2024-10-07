import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { collection, deleteDoc, doc, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import { db } from '../../environment/firebase.prod';
import ChatInput from '../chat-input/chat-input';
import Message from '../message/message';
import { ChatBottom, ChatContainer, ChatHeader, ChatHeaderLeft, ChatHeaderRight, ChatMessages } from './chat.styles';

function Chat() {
    const chatRef = React.useRef(null);
    const channelId = useSelector((state) => state.app.channelId);

    const channelDocRef = channelId ? doc(db, 'channels', channelId) : null;
    const [channelDetails] = useDocument(channelDocRef);

    const channelMessagesQuery = channelId 
        ? query(collection(db, 'channels', channelId, 'messages'), orderBy('timestamp', 'asc'))
        : null;
    
    const [channelMessages] = useCollection(channelMessagesQuery);

    useEffect(() => {
        if (channelId) {
            const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

            const deleteOldMessages = async () => {
                const oldMessagesQuery = query(
                    collection(db, 'channels', channelId, 'messages'),
                    where('timestamp', '<', twentyFourHoursAgo)
                );

                const snapshot = await getDocs(oldMessagesQuery);

                snapshot.forEach(async (messageDoc) => {
                    await deleteDoc(doc(db, 'channels', channelId, 'messages', messageDoc.id));
                });
            };

            deleteOldMessages();
        }
    }, [channelId]);

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }, [channelMessages])

  return (
    <ChatContainer>
        {channelDetails && channelMessages && (
            <>
                <ChatHeader>
                    <ChatHeaderLeft>
                        <h4><strong>#{channelDetails?.data().name}</strong></h4>
                        <StarBorderOutlinedIcon />
                    </ChatHeaderLeft>

                    <ChatHeaderRight>
                        <p>
                            <InfoOutlinedIcon /> Details
                        </p>
                    </ChatHeaderRight>
                </ChatHeader>

                <ChatMessages>
                    {channelMessages?.docs.map(doc => {
                        const { message, timestamp, user, userImage } = doc.data();
                        return (
                            <Message 
                            key={doc.id} 
                            message={message} 
                            timestamp={timestamp} 
                            user={user} 
                            userImage={userImage} />
                        )
                    })}
                    <ChatBottom ref={chatRef} />
                </ChatMessages>
                <ChatInput channelName={channelDetails?.data().name} channelId={channelId}></ChatInput>
            </>
        )}
        
    </ChatContainer>
  )
}

export default Chat