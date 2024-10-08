import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { SidebarMobileButtonContainer } from './sidebar-mobile-button.styles';

/**
 * A mobile-only button which toggles the sidebar
 * @param {function} toggleSidebar
 * @returns {React.ReactElement} The button
 */
function SidebarMobileButton({ toggleSidebar }) {
  return (
    <SidebarMobileButtonContainer onClick={toggleSidebar}>
        <MenuIcon />
    </SidebarMobileButtonContainer>
  )
}

export default SidebarMobileButton