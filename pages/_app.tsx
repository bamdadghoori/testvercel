import type { AppProps } from 'next/app'
console.log(1)
import Layout from '../public/components/layout'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css';
import { successMessageContext } from '../public/components/successMessageContext';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Analytics } from '@vercel/analytics/react';
import AdminLayout from '../public/components/panelComponents/adminLayout';
import Head from 'next/head'
console.log(2)
import { useRouter } from 'next/router';


//admin panel styles
import   '../styles/nucleo-icons.scss'
import   '../styles/nucleo-svg.scss'
import   '../styles/perfect-scrollbar.scss'
import   '../styles/tooltips.scss'



//@ts-ignore
// import WOW from 'wowjs';

// const WOW=dynamic(
//   //@ts-ignore
//   () => import('wowjs'),
//   { ssr: false }
// )
// css imports
import '../public/assets/css/animate.min.css'
import '../public/assets/css/slick.css'

// import '../public/assets/css/tailwind-built.css'

import '../styles/globals.css'
// import '../styles/globals-old.css'
import   '../styles/argon-dashboard-tailwind.scss'
console.log(3)

//@ts-ignore
// import {WOW} from 'wowjs/dist/wow';

  // console.log(isLoading)
import { useState,useEffect } from 'react'
import LoginExpired from './loginExpired';
console.log(4)
// export const styles:any = {
//   fadeInUp: {
//     animation: '1s',
//     animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
    
    
//   }
// }
// const DynamicHeader = dynamic(() => import(), {
//   suspense: true,
// })
export default function App({ Component, pageProps,...appProps }: AppProps) {



{console.log(5)}
 <Head>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
 </Head>
{console.log(6)}
  const [isLoading,setIsLoading]=useState(true)
   const [showJumpButton,setShowJumpButton]=useState(false)
    
   const [panelMode,setPanelMode]=useState(false)

   const [successMessage,setSucessMessage]:any=useState("")
   const value={successMessage,setSucessMessage}

   const router=useRouter();
  

   {console.log(7)}
  //on scroll method
  const changeScroll=()=>{
    if(window.scrollY<20){
      setShowJumpButton(false)
      {console.log(8)}
    }
    else{
    setShowJumpButton(true)
    {console.log(9)}
    }
  }

  const checkPageMode=()=>{
    if (typeof window !== 'undefined') {
      if(window.location.pathname.includes('panel')==true){
        setPanelMode(true)
      }
      else{
       setPanelMode(false)
      }
  }
}
  useEffect(()=>{
    if(appProps.router.pathname=='/faqs'){
      console.log('x')
      {console.log(9)}
    }
    checkPageMode();
    
    //@ts-ignore
    // new WOW().init();
   
     //change loading state
      setIsLoading(false)
      window.addEventListener('scroll',changeScroll)
      {console.log(10)}
 
   console.log(11)
  
    
  },[appProps.router.pathname])
 return (
  <>
  {console.log(panelMode)}
  
 {isLoading && ( <div id="preloader-active">
      <div className="preloader flex-1 content-center">
    
        <div className="logo absolute inset-y-2/4 jump">
          <>
        {console.log(13)}
          <img src="assets/imgs/logos/favicon.svg" alt="" />
         
          <h1 className="text-lg font-semibold">Monst</h1>
          </>
          
        </div>
      </div>
    </div>) }
  {
    
     appProps.router.pathname !='/faqs' ? (
      panelMode ? ( 
        localStorage.getItem('jwt')==null ? (
              <>
              <Layout>
              <LoginExpired/>
              </Layout>
              
              </>
            ):(<>
               <AdminLayout>
<successMessageContext.Provider
        //@ts-ignore
        value={value}>
       
<Component  {...pageProps} />
</successMessageContext.Provider>
</AdminLayout>
            </>)
    
      
      
      
      
      ):(
        
      <>
     {console.log(13)}
     <successMessageContext.Provider
        //@ts-ignore
        value={value}>
       <Layout>
        <Component  {...pageProps} />
        </Layout>
      </successMessageContext.Provider>
        {/* scroll to top button */}
       
       
           <div className={`z-10 ${showJumpButton ? ' opacity-1 ':' opacity-0 '}`} onClick={()=>window.scrollTo({top:0})} style={{"position": "fixed", "bottom": "50px", "right": "30px", "cursor": "pointer", "transition": "opacity 0.2s linear 0s"}}>
          <a id="scrollUp"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg></a>
          </div>
        
         
          
         
       
      
      </>
      )
   
     ):(
      <>
    {console.log(14)}
    <successMessageContext.Provider
        //@ts-ignore
        value={value}>
       
      <Component  {...pageProps} />
      </successMessageContext.Provider>
    
      {/* scroll to top button */}
     
     
         <div className={`${showJumpButton ? ' opacity-1 ':' opacity-0 '}`} onClick={()=>window.scrollTo({top:0})} style={{"position": "fixed", "bottom": "50px", "right": "30px", "cursor": "pointer", "transition": "opacity 0.2s linear 0s"}}>
        <a id="scrollUp"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg></a>
        </div>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossOrigin="anonymous"></Script>
        {console.log(14)}
       
        </>
     )
      
    
       
     
   
     
  }
     


    

   
    
   
   
  </>

 )
}
