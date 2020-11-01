import React from "react"
import {Container,Form,Password,Email} from "./auth"

export default function Auth({children,...restProps}){
  return <Container {...restProps}>
    {children}
  </Container>
}

Auth.Form = function AuthForm({children,...restProps}){
  return <Form {...restProps}>
    {children}
  </Form>
}

Auth.Password = function AuthPassword({value,onChange}){
  return <Password value = {value} onChange={onChange} type="password" />
}

Auth.Email = function AuthEmail({value,onChange}){
  return <Email value = {value} onChange={onChange}type="text" />
    
}