import React,{useEffect, useState} from "react"
import {Container,Book} from "./../../styles/Books.module.css"

const URL = `https://firebasestorage.googleapis.com/v0/b/kiddie-73a0c.appspot.com/o/`
export default function Books({firebase,user}){
  const [books,setBooks] = useState([]);
  useEffect(() => {
    firebase.firestore().collection("books").get().then(snapshot => {
      const data = snapshot.docs.map(item => item.data())
      setBooks(b => [...data])
    })
    return () => setBooks([]);
  },[])
  
  return <div className={Container}>
    {books.map((book,index) => {
      
      return <div className={Book} key={index}><h2>{book.name}</h2><h4>{book.description}</h4><div><img src={book.image} alt="Book"/></div><h4>${book.price}</h4></div>
    })}
  </div>
  
}
