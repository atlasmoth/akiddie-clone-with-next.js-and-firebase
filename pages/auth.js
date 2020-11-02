import { useState } from "react"
import {Auth, Header} from "./../components"

  

export default function AppAuth(){
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
  return <Header>
    <Auth>
      <Auth.Form>
        <Auth.Email value={email} handleChange={setEmail} />
        <Auth.Password value={password} handleChange={setPassword} />
      </Auth.Form>
  </Auth>
  </Header>
}