import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { useDispatch } from 'react-redux';
import { db } from '../../environment/firebase.prod';
import { enterChannel } from '../../features/appSlice';
import { SidebarOptionChannel, SidebarOptionContainer } from './sidebar-option.styles';

/**
 * A component that renders a single option in the sidebar. It can be one of three types:
 * - A channel option, which is a clickable item with a title and an optional icon.
 * - An add channel option, which is a button that creates a new channel when clicked.
 * - A toggle list option, which is a button that toggles the visibility of the options list when clicked.
 * @param {{ Icon: ReactElement, title: string, addChannelOption: boolean, id: string, toggleList: function }} props
 * @prop {ReactElement} Icon a React element of an icon to display
 * @prop {string} title the title of the option
 * @prop {boolean} addChannelOption whether the option is an add channel option
 * @prop {string} id the id of the channel to select if the option is a channel option
 * @prop {function} toggleList a function to call when the option is clicked if the option is a toggle list option
 * @returns {ReactElement} a JSX element of the option
 */
function SidebarOption({ Icon, title, addChannelOption, id, toggleList }) {
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

  const handleClick = addChannelOption ? addChannel : id ? selectChannel : toggleList;

  return (
    <SidebarOptionContainer onClick={handleClick}>
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