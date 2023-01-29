import React,{useEffect} from 'react'
import TopSection from '../public/components/contactComponents/topSection'
import ContactForm from '../public/components/contactComponents/contactForm'
import NewsLetterSubscribe from '../public/components/newsLetterSubscribe'
import Head from 'next/head'
import { baseUrlPages } from '../public/apiFunctions'
import { useRouter } from 'next/router'
import LoadingMiddlePage from '../public/components/loadingMiddlePagePublic'
import { callAlertSuccessPublic } from '../public/components/usefullFunctions'
 const LoadingOperationPublic = () => {
 
     const router=useRouter();


     useEffect(()=>{
      callAlertSuccessPublic(router.query.message)
     },[])
  return (
    <>
    <Head>
    <title>Contact</title>
    <meta name="robots" content="index,follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
      <meta property="og:title" content='Contact'/>
      <meta name="description" content="We will be glad to hear from you" />
      <link rel="canonical" href={`${baseUrlPages}/contact`}/>
      <meta property="og:description" content="امروز میخوایم در مورد نوعی برنامه‌نویس مرموز به نام عشقِ پترن صحبت کنیم و مصائبی که همنشینی با این شخص برای ما به وجود میاره رو بررسی کنیم..."/>
      <meta property="og:image:height" content="100"/> 
      <meta property="og:image:width" content="100"/> 
    </Head>
      
     <TopSection/>
     <div id="myMessage" className="relative mt-10 bg-white items-center flex-wrap flex justify-center items-center relative bottom-4">
    <div
                      className="flex bg-colorGray-200 w-fit message-shadow justify-center w-2/3 text-[#36CE89] text-xl px-4 py-3 rounded relative"
                      role="success"
                    >
                      <img  src='/assets/imgs/icons/success-svgrepo-com.svg'/>
                    
                    </div>
                  
 
   </div>
     <LoadingMiddlePage/>
     <NewsLetterSubscribe/>
    </>
  )
}
export default LoadingOperationPublic