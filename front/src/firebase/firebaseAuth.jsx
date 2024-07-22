import { auth, googleProvider } from './config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import axios from 'axios';

export const signUpWithEmail = async (email, password, displayName) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
    await updateProfile(user, { displayName });
    console.log('User after sign up:', user);
    const token = await user.getIdToken();
    console.log('Token after sign up:', token);
    const userInfo = { mail: user.email, name: user.displayName, rol: true };
    await sendUserInfoToBackend(userInfo, token);
  } catch (error) {
    console.error('Error signing up with email:', error);
  }
};

export const signInWithEmail = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    console.log('User after sign in:', user);
    const token = await user.getIdToken();
    console.log('Token after sign in:', token);
    const userInfo = { mail: user.email, name: user.displayName, rol: true };
    await sendUserInfoToBackend(userInfo, token);
  } catch (error) {
    if (error.code === 'auth/user-disabled') {
      console.log('Esta cuenta está desactivada. Por favor, contacta al administrador.');
    } else {
      console.error('Error signing in with email:', error);
    }
  }
};

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log('User after Google sign in:', user);
    const token = await user.getIdToken();
    console.log('Token after Google sign in:', token);
    const userInfo = { mail: user.email, name: user.displayName, image: user.photoURL, rol: true };
    await sendUserInfoToBackend(userInfo, token);
  } catch (error) {
    console.error('Error signing in with Google:', error);
  }
};

const sendUserInfoToBackend = async (userInfo, token) => {
  try {
    console.log('User Info:', userInfo);
    console.log('Token:', token);
    await axios.post('http://localhost:3001/users', userInfo, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Error sending user info to backend:', error);
  }
};
