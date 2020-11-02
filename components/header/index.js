import React from "react"
import Head from 'next/head'
import {Nav,Ul} from "./../../styles/Header.module.css"
import Link from "next/link"


export default function Header({children}){

  return <>
  <Head>
    <title>Kiddie</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <div className="Header">
        <nav className={Nav}>
        
        <Link href="/">
        <h1>Kiddie</h1>
        </Link>
      
          <ul className={Ul}>
          <li>
        <Link href="/auth">
          <a>Signin</a>
        </Link>
      </li>
          </ul>
        </nav>
      </div>
    {children}
    </main>
  
  </>
}