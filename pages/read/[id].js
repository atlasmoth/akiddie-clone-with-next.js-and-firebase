import Display from "../../components/display";
import firebaseCtx from "../../contexts/firebaseContext"
import authCtx from "../../contexts/authContext"
import {useContext, useEffect, useState} from "react"
import {Header} from "../../components"
import {useRouter} from "next/router"
import {Container} from "./../../styles/Display.module.css"




export default function Read(){
  
  const [book,setBook] = useState(null)
  const {id} = useRouter().query;
  const {firebase} = useContext(firebaseCtx);
  const {state : {authBool}} = useContext(authCtx);
  
  useEffect(() => {
    const booksRef = firebase.firestore().collection("books")

    booksRef.doc(id).get().then(ref => setBook(ref.data()))

    
    return () => setBook(null)
  },[])
  
  return <Header>
    <div className={Container}>
    {authBool && book ? <Display book={book} firebase={firebase}  /> : <h2>Please log in.</h2>}
    </div>
  </Header>
}