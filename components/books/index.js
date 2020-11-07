import React,{useEffect, useState} from "react"
import {Container,Book} from "./../../styles/Books.module.css"
import Link from "next/link"


export default function Books({firebase,user}){
  const [books,setBooks] = useState([]);
  useEffect(() => {
    firebase.firestore().collection("books").get().then(snapshot => {
      const data = snapshot.docs.map(item => {
        
        return {...item.data(),id : item.id}
      })
      
      setBooks(b => [...data])
    })
    return () => setBooks([]);
  },[])
  
  return <div className={Container}>
    {books.map((book,index) => {
      
      return <div className={Book} key={index}>
        <h2>{book.name}</h2>
        <h4>{book.description}</h4>
        <div><img src={book.image} alt="Book"/></div>
        <Link href={`/read/${book.id}`}>
          <a><button>Read</button></a>
        </Link>
        </div>
    })}
  </div>
  
}
