import Head from 'next/head'
import { useContext } from 'react'
import { Books, Header } from '../components'
import authCtx from "./../contexts/authContext"
import firebaseCtx from "./../contexts/firebaseContext"

export default function Home() {

  const {firebase} = useContext(firebaseCtx);
  const {state : {authBool,user}} = useContext(authCtx);

  
  return (
    <Header>
      <Books firebase={firebase} user={user} />
    </Header>
  )
}



// export async function getServerSideProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }