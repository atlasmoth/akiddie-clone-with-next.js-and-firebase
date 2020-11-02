import '../styles/globals.css'
import firebaseContext from "./../contexts/firebaseContext";
import authContext from "./../contexts/authContext";

import firebase from "./../config/firebase";


function MyApp({ Component, pageProps }) {

  return <firebaseContext.Provider value={{firebase}}>
    <authContext.Provider value={{}}>
    <Component {...pageProps} />
    </authContext.Provider>
  </firebaseContext.Provider>
}

export default MyApp


// export async function getServerSideProps(context) {

  
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }