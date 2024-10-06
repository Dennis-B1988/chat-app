import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { useDispatch } from 'react-redux';
import { db } from '../../environment/firebase.prod';
import { enterChannel } from '../../features/appSlice';
import { SidebarOptionChannel, SidebarOptionContainer } from './sidebar-option.styles';

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();

  const addChannel = async () => {
    const channelName = prompt('Please enter the channel name');
    if(channelName) {
      await addDoc(collection(db, 'channels'), {
        name: channelName
      });
    }
  }

  const selectChannel = () => {
    if(id){
      dispatch(enterChannel({ channelId: id }))
    }
  }

  return (
    <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
        {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
        {Icon ? (
            <h3>{title}</h3> 
        ) : (
            <SidebarOptionChannel>
                <span>#</span> {title}
            </SidebarOptionChannel>
            )}
    </SidebarOptionContainer>
  )
}

export default SidebarOption;