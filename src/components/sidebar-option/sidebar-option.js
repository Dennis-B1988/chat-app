import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { db } from '../../environment/firebase.prod';
import { SidebarOptionChannel, SidebarOptionContainer } from './sidebar-option.styles';

function SidebarOption({ Icon, title, addChannelOption }) {

  const addChannel = async () => {
    const channelName = prompt('Please enter the channel name');
    if(channelName) {
      await addDoc(collection(db, 'channels'), {
        name: channelName
      });
    }
  }

  const selectChannel = () => {}

  return (
    <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
        {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
        {Icon ? 
            <h3>{title}</h3> 
        : 
            <SidebarOptionChannel>
                <span>#</span>
                {title}
            </SidebarOptionChannel>}
    </SidebarOptionContainer>
  )
}

export default SidebarOption;