import React from 'react'

import TopSection from '../public/components/portfolioComponents/topSection';
import Projects from '../public/components/portfolioComponents/projects';
import PricingPlans from '../public/components/portfolioComponents/pricingPlans';
import GetInTouch from '../public/components/FaqsComponents/getInTouch';
import { baseUrlPages } from '../public/apiFunctions'
import Head from 'next/head';
 const Portfolio=()=>{
  return (
    <>
    <Head>
    <title>PortFolio</title>
    <meta name="robots" content="index,follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
      <meta property="og:title" content='Portfolio'/>
      <meta name="description" content="Commited to people and future" />
      <link rel="canonical" href={`${baseUrlPages}/portfolio`}/>
      <meta property="og:description" content="امروز میخوایم در مورد نوعی برنامه‌نویس مرموز به نام عشقِ پترن صحبت کنیم و مصائبی که همنشینی با این شخص برای ما به وجود میاره رو بررسی کنیم..."/>
      <meta property="og:image:height" content="100"/> 
      <meta property="og:image:width" content="100"/> 
    </Head>
    <TopSection/>
    <Projects/>
    <PricingPlans/>
    <GetInTouch/>
    </>
  )
}
export default Portfolio
