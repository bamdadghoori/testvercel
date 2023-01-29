import React from 'react'
import TopSection from '../public/components/aboutComponents/topSection'
import Counters from '../public/components/indexComponents/counters'
import ProjectPlans from '../public/components/aboutComponents/projectPlans'
import SliderSection from '../public/components/aboutComponents/sliderSection'
import Specialists from '../public/components/aboutComponents/specialists'
import Head from 'next/head'
import { baseUrlPages } from '../public/apiFunctions'
 const About = () => {
  return (
    <>
    <Head>
      <title>About</title>
      <meta name="description" content="Commited to people and future" />
      <meta name="robots" content="index,follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
      <meta property="og:title" content='About'/>
      <link rel="canonical" href={`${baseUrlPages}/about`}/>
      <meta property="og:description" content="امروز میخوایم در مورد نوعی برنامه‌نویس مرموز به نام عشقِ پترن صحبت کنیم و مصائبی که همنشینی با این شخص برای ما به وجود میاره رو بررسی کنیم..."/>
      <meta property="og:image:height" content="100"/> 
      <meta property="og:image:width" content="100"/> 
    </Head>
    <TopSection/>
    <section className="pt-6 pb-2">
    <Counters/>
    </section>
    <ProjectPlans/>
    <Specialists/>
    <SliderSection/>
    </>
  )
}
export default About
