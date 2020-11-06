import Display from "../../components/display";
import firebaseCtx from "../../contexts/firebaseContext"
import authCtx from "../../contexts/authContext"
import {useContext, useEffect, useState} from "react"
import {Header} from "../../components"
import {useRouter} from "next/router"




export default function Read(){
  const [book,setBook] = useState(null)
  const router = useRouter();
  const {id} = router.query;
  const {firebase} = useContext(firebaseCtx);
  const {state : {authBool,user}} = useContext(authCtx);
  useEffect(() => {
    firebase.firestore().collection("books").get(id).then(s => console.log(s.docs))
  },[])
  
  return <Header>
    {authBool ? <Display  /> : <h2>Please log in.</h2>}
  </Header>
}