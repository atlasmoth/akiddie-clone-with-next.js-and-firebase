import { useState } from "react"
import {Auth} from "./../components"

  

export default function AppAuth(){
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  

  return <Auth>
  <Auth.Form>
    <Auth.Password>

    </Auth.Password>
    <Auth.Email>
      
    </Auth.Email>
  </Auth.Form>
  </Auth>
}