// src/utils/getCurrentid_User.js
import firebase from 'firebase/app';
import 'firebase/auth';

export const getCurrentid_User = () => {
  const currentUser = firebase.auth().currentUser;
  return currentUser ? currentUser.uid : null;
};