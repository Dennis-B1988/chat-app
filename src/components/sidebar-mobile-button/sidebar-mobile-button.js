import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { SidebarMobileButtonContainer } from './sidebar-mobile-button.styles';

function SidebarMobileButton({ toggleSidebar }) {
  return (
    <SidebarMobileButtonContainer onClick={toggleSidebar}>
        <MenuIcon />
    </SidebarMobileButtonContainer>
  )
}

export default SidebarMobileButton