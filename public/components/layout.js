import Navbar from './navbar'
import Footer from './footer'
import { useEffect } from 'react'
import { getComments, handleErrors } from '../apiFunctions'
import { jwtChecker } from './usefullFunctions'
import { useRouter } from 'next/router'
import ReCAPTCHA from "react-google-recaptcha";
export default function Layout({ children }) {
  const router=useRouter();
// const getCommentsFromApi=async()=>{
//   try{
//     const response= await getComments()
//     console.log(response)
//   }
//   catch(er){
//     console.log(er)
//     const error =handleErrors(er)
//     if(error=="Request failed with status code 401"){
    
//     }
//     console.log(error)
    
//   }
// }
 
// const checkLogin=()=>{
// if(jwtChecker()=='404'){
//  console.log('un')
//   router.push('/loginExpired')
// }
// }

// useEffect(()=>{
//   checkLogin();
// },[])

  return (
    <>
      <Navbar />
      <main className='public'>{children}
      </main>
    
      <Footer />
    </>
  )
}
