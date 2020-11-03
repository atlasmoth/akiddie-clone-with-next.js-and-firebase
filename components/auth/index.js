import {useContext} from "react"
import firebaseCtx from "./../../contexts/firebaseContext"
import authCtx from "./../../contexts/authContext"


export default function Auth(){
  const {firebase} = useContext(firebaseCtx);
  const {state : {authBool}} = useContext(authCtx);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  

  async function handleAuth(e){
    e.preventDefault()
    try {
      if(e.target.name === "login"){
        await auth.signInWithPopup(provider)
        
      }else if(e.target.name === "logout"){
        await auth.signOut();
        
      }
    } catch (error) {
      console.table(error)
    }
  }
  
  return authBool ? <button name="logout" onClick={handleAuth}>Log Out</button> : <button onClick={handleAuth} name="login">
  Sign In
</button>
}