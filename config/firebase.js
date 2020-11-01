import firebase from "firebase"
export default function configFunc(){
  const {apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId} = process.env;

    const app = firebase.initializeApp({apiKey,
      authDomain,
      databaseURL,
      projectId,
      storageBucket,
      messagingSenderId,
      appId})

    return {app,firebase}
}