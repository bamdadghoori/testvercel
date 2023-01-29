import React from 'react'
import TopSection from '../public/components/contactComponents/topSection'
import ContactForm from '../public/components/contactComponents/contactForm'
import NewsLetterSubscribe from '../public/components/newsLetterSubscribe'
import Head from 'next/head'
import { baseUrlPages } from '../public/apiFunctions'
 const Contact = () => {
 
     
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
     <ContactForm/>
     <NewsLetterSubscribe/>
    </>
  )
}
export default Contact