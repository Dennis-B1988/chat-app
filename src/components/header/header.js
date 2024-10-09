import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SearchIcon from '@mui/icons-material/Search';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Google log in
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../environment/firebase.prod';
import { HeaderAvatar, HeaderContainer, HeaderLeft, HeaderRight, HeaderSearch } from './header.styles';

/**
 * A Header component that displays the user's avatar and allows them to search
 * channels, sign out and delete their user from the database, and toggle the
 * privacy policy dialog.
 *
 * @param {function} togglePolicy - a function to toggle the showPolicy state
 * @param {boolean} showPolicy - a boolean indicating if the privacy policy dialog
 * should be shown
 * @returns {React.ReactElement} - a React element representing the Header component
 */
function Header ({togglePolicy, showPolicy}) {
    const [user] = useAuthState(auth);

    const signOutAndDeleteUserFromDatabase = async () => {
        // Google log disabled for privacy reasons, only for testing purposes implemented
        // const provider = new GoogleAuthProvider();
        // await signInWithPopup(auth, provider);

        await user.delete();
        await auth.signOut();
    }

    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar onClick={signOutAndDeleteUserFromDatabase} src={user?.photoURL} alt={user?.displayName} />
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon />
                <input placeholder="Search" />
            </HeaderSearch>

            <HeaderRight>
                <HelpOutlineIcon 
                    onClick={togglePolicy} 
                    style={{ color: showPolicy ? 'gray' : 'white'}} />
            </HeaderRight>
        </HeaderContainer>
    )
}
 
export default Header;