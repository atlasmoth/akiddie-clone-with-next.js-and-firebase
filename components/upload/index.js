import {useState} from "react";
import {Container,Label,Form,Input} from "./../../styles/Upload.module.css"


export default function UploadComponent ({firebase,authBool,user}){

  const [name, setName] = useState("");
  const [description,setDescription] = useState("");
  const [image,setImage] = useState(null)
  const [ebook,setEbook] = useState(null);
  const [price,setPrice] = useState(0);


  async function uploadBook(e){
    e.preventDefault()

    try {
      if(authBool){
        
       const storageRef = firebase.storage().ref();
       const bookUrl = `images/books/${user.uid}-${ebook.name}`;
       const imageUrl = `images/books/${user.uid}-${image.name}`;
       const bookRef = storageRef.child(bookUrl);
       const imageRef = storageRef.child(imageUrl);
      
       const [bookObj,imageObj] = await  Promise.all([bookRef.put(ebook),imageRef.put(image)])
       
      await  firebase.firestore().collection("books").add({
          user : user.uid ,
          name,
          description,
          image : imageObj.metadata.fullPath,
          ebook : bookObj.metadata.fullPath,
          price 
        })
        
      }
    } catch (error) {
      console.table(error)
    }
  }

  function testHandler(e){
    switch(e.target.name){
      case "ebook" : {
        
        setEbook(e.target.files[0])
      }
      case "image" : {
        
        setImage(e.target.files[0])
        
      }
      case "price" : {
        setPrice(e.target.value)
      }
      default : {
        return
      }
    }
  }
  return <div className={Container}>
  <form className={Form} onSubmit={uploadBook}>
    
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" value={name} className={Input} onChange={e => setName(e.target.value)} required/>

    <label htmlFor="description">Description</label>
    <input type="text" name="description" className={Input} id="description" value={description} onChange={e => setDescription(e.target.value)} required />


    <label htmlFor="ebook" className={Label}>Ebook</label>
    <input type="file" name="ebook" onChange={testHandler} required  id="ebook" accept=".epub, .mobi,.pdf"/>
    
    <label htmlFor="image" className={Label}>Image</label>
    <input type="file" name="image" id="image" onChange={testHandler} required accept="image/png, image/jpeg" />
    
    <label htmlFor="price" className={Label}>Price</label>
    <input type="number" name="price" id="price" min="0"  step="1" onChange={testHandler} required />

    <div>
    <button type="submit">Upload</button>
    </div>
  </form>
  </div>
}