import { useState } from "react"
import {Auth} from "./../components"

  

export default function AppAuth(){
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  console.log(email,password)
  return <Auth>
  <Auth.Form>
    <Auth.Password value={password} onChange={e => setPassword(e.value)} />
    <Auth.Email value={email} onChange={e => setEmail(e.value)} />
  </Auth.Form>
  </Auth>
}