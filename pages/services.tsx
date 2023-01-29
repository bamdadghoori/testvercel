import React from 'react'
import WebDesigns from '../public/components/servicesComponents/webDesigns'
import TopSection from '../public/components/servicesComponents/topSection'
import Counters from '../public/components/indexComponents/counters'
import ProjectPlans from '../public/components/indexComponents/projectPlans'
import BusinessPlans from '../public/components/indexComponents/businessPlans'
import ContactUsForm from '../public/components/servicesComponents/contactUsForm'
import NewsLetterSubscribe from '../public/components/newsLetterSubscribe'
import Head from 'next/head'
import { baseUrlPages } from '../public/apiFunctions'
import ContactForm from '../public/components/contactComponents/contactForm'
 const Services = () => {
  return (
    <>
    <Head>
    <title>Services</title>
    <meta name="robots" content="index,follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
      <meta property="og:title" content='Services'/>
      <meta name="description" content="Commited to people and future" />
      <link rel="canonical" href={`${baseUrlPages}/services`}/>
      <meta property="og:description" content="امروز میخوایم در مورد نوعی برنامه‌نویس مرموز به نام عشقِ پترن صحبت کنیم و مصائبی که همنشینی با این شخص برای ما به وجود میاره رو بررسی کنیم..."/>
      <meta property="og:image:height" content="100"/> 
      <meta property="og:image:width" content="100"/> 
    </Head>
    <TopSection/>
    <WebDesigns/>
    <Counters/>
    <ProjectPlans/>
    <BusinessPlans/>
    <ContactForm/>
    <NewsLetterSubscribe/>
    </>
  )
}
export default Services
