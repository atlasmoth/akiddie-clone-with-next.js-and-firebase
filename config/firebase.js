import firebase from "firebase"




    const config = {
      apiKey: "AIzaSyBjUG4ZGTUnBAWZbKQcuHUrZakNqB_zGyw",
      authDomain: "kiddie-73a0c.firebaseapp.com",
      databaseURL: "https://kiddie-73a0c.firebaseio.com",
      projectId: "kiddie-73a0c",
      storageBucket: "kiddie-73a0c.appspot.com",
      messagingSenderId: "657961828603",
      appId: "1:657961828603:web:9a5070adba109af8eb705e"
    }

      if(firebase.apps.length > 0){
        firebase.app()
      }else{
        firebase.initializeApp(config)
      }
     

     export default firebase;