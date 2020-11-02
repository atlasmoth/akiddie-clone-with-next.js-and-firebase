import firebase from "firebase"

process.env;
const apiKey = process.env.apiKey;
const authDomain = process.env.authDomain;
const databaseURL = process.env.databaseURL;
const projectId = process.env.projectId;
const storageBucket = process.env.storageBucket;
const messagingSenderId = process.env.messagingSenderId;
const appId = process.env.appId;

console.log(process.env)
    const config = {apiKey,
      authDomain,
      databaseURL,
      projectId,
      storageBucket,
      messagingSenderId,
      appId}

      if(firebase.apps.length > 0){
        firebase.app()
      }else{
        firebase.initializeApp(config)
      }
     

     export default firebase;