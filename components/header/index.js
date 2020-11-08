import React from "react"
import Head from 'next/head'
import {Nav,Ul} from "./../../styles/Header.module.css"
import Link from "next/link"
import {Auth} from "./../../components"


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
        <a><h1>Kiddie</h1></a>
        </Link>
      
          <ul className={Ul}>
          <li>
          <Auth />
      </li>
          </ul>
        </nav>
      </div>
    {children}
    </main>
  
  </>
}