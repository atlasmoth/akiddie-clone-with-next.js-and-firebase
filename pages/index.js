import Head from 'next/head'
import { Header } from '../components'
// import init from "./../config/firebase"




export default function Home() {
  return (
    <Header>
      <h2>Hello from this side</h2>
    </Header>
  )
}



// export async function getServerSideProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }