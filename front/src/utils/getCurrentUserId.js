import { getAuth } from 'firebase/auth';

export const getCurrentid_User = () => {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  return currentUser ? currentUser.uid : null;
};