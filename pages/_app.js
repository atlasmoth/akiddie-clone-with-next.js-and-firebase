import '../styles/globals.css'
import firebaseContext from "./../contexts/firebaseContext";
import authContext from "./../contexts/authContext";

import firebase from "./../config/firebase";
import { useEffect, useReducer } from 'react';


function reducer(state,action){
  switch(action.type){
    case "auth" : {
      return {...state, authBool : action.authBool, user : action.user}
    }
    default : {
      return {...state}
    }
  }

}
function MyApp({ Component, pageProps }) {
  const [state,dispatch] = useReducer(reducer,{authBool : false, user : {}})
    
  useEffect(() => {
    const auth = firebase.auth();
    auth.onAuthStateChanged(user => {
      if(user){
        dispatch({type : "auth", authBool : true,user});
      }else{
        dispatch({type : "auth", authBool : false});
      }
    })
  },[])
  
  return <firebaseContext.Provider value={{firebase}}>
    <authContext.Provider value={{state,dispatch}}>
    <Component {...pageProps} />
    </authContext.Provider>
  </firebaseContext.Provider>
}

export default MyApp


// export async function getServerSideProps() {

  
//   return {
//     props: {}, 
//   }
// }