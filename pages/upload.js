import  firebaseCtx from "./../contexts/firebaseContext"
import authCtx from "./../contexts/authContext";
import {Header, UploadComponent} from "./../components"
import { useContext} from "react";


export default function Upload(){
  const {firebase} = useContext(firebaseCtx);
  const {state : {authBool,user}} = useContext(authCtx);
  
  return <Header>
    {authBool ? <UploadComponent authBool={authBool} user={user} firebase={firebase} /> : <h2>Please sign in</h2>}
  </Header>
  
}