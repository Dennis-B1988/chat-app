import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../environment/firebase.prod';

/**
 * Provides an interface to the current user and allows the user to update their
 * display name. The `updateUserProfile` function updates the display name of the
 * current user in the Firebase Authentication system and updates the user state
 * returned by this hook. The `updateLocalUser` function only updates the user
 * state returned by this hook, without updating the Firebase Authentication
 * system.
 *
 * @return {{
 *   user: import('firebase/auth').User | null,
 *   updateUserProfile: (newDisplayName: string) => Promise<void>,
 *   updateLocalUser: (newDisplayName: string) => void,
 * }}
 */

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [localUser, setLocalUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (updatedUser) => {
      setUser(updatedUser);
      setLocalUser(updatedUser);
    });
    return () => unsubscribe();
  }, []);

  /**
   * Updates the display name of the current user in the Firebase Authentication
   * system and updates the user state returned by this hook.
   *
   * @param {string} newDisplayName - the new display name for the current user
   * @return {Promise<void>}
   */
  const updateUserProfile = async (newDisplayName) => {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName: newDisplayName });
      const updatedUser= { ...auth.currentUser, displayName: newDisplayName };
      setUser(updatedUser);
      setLocalUser(updatedUser);
    }
  };

  /**
   * Updates the display name of the current user in the local user state returned
   * by this hook, without updating the Firebase Authentication system.
   *
   * @param {string} newDisplayName - the new display name for the current user
   */
  const updateLocalUser = (newDisplayName) => {
    setLocalUser(prevUser => ({ ...localUser, displayName: newDisplayName }));
  };

  return { user: localUser, updateUserProfile, updateLocalUser };
};

export default useAuth;