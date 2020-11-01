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

Auth.Password = function AuthPassword({children,...restProps}){
  return <Password {...restProps}>
    {children}
  </Password>
}

Auth.Email = function AuthEmail({children,...restProps}){
  return <Email {...restProps}>
    {children}
  </Email>
}