import React,{useRef} from 'react'
import TopSection from '../../public/components/analyzeAndDesignComponents/topSection'
import MainContent from '../../public/components/analyzeAndDesignComponents/mainContent'
import NewsLetterSubscribe from '../../public/components/newsLetterSubscribe'
import { baseUrl,baseUrlPages } from '../../public/apiFunctions'
import { imgSizeServices } from '../../public/components/constants'
import Head from 'next/head'
 const Website = () => {
     
  const loadImage=()=>{
    var img=new Image();
    img.src='/assets/imgs/placeholders/img-14.jpg'
  }

  
  
    
 
  //use this ref to get image dimensions
 
  return (
    <>
    <Head>
    <meta property="og:image" content="https://bugfather.com/wp-content/uploads/2022/09/Pattern-lovers.jpg"/>
    <title>Analyze and design</title>
    <meta name="robots" content="index,follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
      <meta property="og:title" content='Analyze and design'/>
      <meta name="description" content="Commited to people and future" />
      <link rel="canonical" href={`${baseUrlPages}/services/analyzeAndDesign`}/>
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