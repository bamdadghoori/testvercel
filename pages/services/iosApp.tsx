import React,{useRef} from 'react'
import TopSection from '../../public/components/iosAppComponents/topSection'
import MainContent from '../../public/components/iosAppComponents/mainContent'
import NewsLetterSubscribe from '../../public/components/newsLetterSubscribe'
import Head from 'next/head'
import { baseUrlPages } from '../../public/apiFunctions'
import { imgSizeServices } from '../../public/components/constants'


 const Website = () => {

  return (
    <>
     <Head>
    <meta property="og:image" content="https://bugfather.com/wp-content/uploads/2022/09/Pattern-lovers.jpg"/>
    <title>Ios App</title>
    <meta name="robots" content="index,follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
      <meta property="og:title" content='Ios App'/>
      <meta name="description" content="Commited to people and future" />
      <link rel="canonical" href={`${baseUrlPages}/services/iosApp`}/>
      <meta property="og:description" content="امروز میخوایم در مورد نوعی برنامه‌نویس مرموز به نام عشقِ پترن صحبت کنیم و مصائبی که همنشینی با این شخص برای ما به وجود میاره رو بررسی کنیم..."/>
      <meta property="og:image:height" content={imgSizeServices.height}/> 
      <meta property="og:image:width" content={imgSizeServices.width}/> 
    </Head>
    <section className='pb-20'>
    <TopSection />
    <MainContent/>
    </section>
    <NewsLetterSubscribe/>
    </>
  )
}
export default Website