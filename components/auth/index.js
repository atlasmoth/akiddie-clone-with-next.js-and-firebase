import React from "react"
import {Container,Form,Label,Input} from "./../../styles/Auth.module.css"


export default function Auth({children,...restProps}){
  return <div className={Container}>
    {children}
  </div>
}

Auth.Form = function AuthForm({children,...restProps}){
  return <form className={Form}>
    {children}
    <div>
    <button>Submit</button>
    </div>
  </form>
}

Auth.Password = function AuthPassword({value,handleChange}){
  
  return <label htmlFor="password" className={Label}>
    <h4>Password</h4>
    <input className={Input} value={value} onChange={e => handleChange(e.target.value)} type="password" />
  </label>
}

Auth.Email = function AuthEmail({value,handleChange}){
  
  return <label className={Label} htmlFor="email">
    <h4>Email</h4>
    <input className={Input} value={value} onChange={e => handleChange(e.target.value)} type="text" id="email" />
  </label>
    
}