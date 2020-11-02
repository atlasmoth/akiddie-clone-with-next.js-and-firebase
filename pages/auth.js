import { useState,useContext } from "react"
import {Auth, Header} from "./../components"
import firebaseContxt from "./../contexts/firebaseContext"

  

export default function AppAuth(){
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {firebase} = useContext(firebaseContxt)
  
  
  console.log(firebase)
  return <Header>
    <Auth>
      <Auth.Form>
        <Auth.Email value={email} handleChange={setEmail} />
        <Auth.Password value={password} handleChange={setPassword} />
      </Auth.Form>
  </Auth>
  </Header>
}