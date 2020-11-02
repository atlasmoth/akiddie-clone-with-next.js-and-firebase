import React from "react"
import Head from 'next/head'
import {Nav,Ul} from "./../../styles/Header.module.css"


export default function Header({children}){

  return <>
  <Head>
    <title>Kiddie</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <div className="Header">
        <nav className={Nav}>
          <h1>Kiddie</h1>
          <ul className={Ul}>
            <li>Sign In</li>
          </ul>
        </nav>
      </div>
    {children}
    </main>
  
  </>
}