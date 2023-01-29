import Head from 'next/head'
import { useEffect,useState } from 'react'
import TopSection from '../public/components/indexComponents/topSection'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import  SliderSection  from '../public/components/indexComponents/sliderSection'
import ProjectPlans from '../public/components/indexComponents/projectPlans'
import BusinessPlans from '../public/components/indexComponents/businessPlans'
import KeyFeatures from '../public/components/indexComponents/keyFeatures'
import { baseUrlPages } from '../public/apiFunctions'
export default function Home() {
  const [isLoading,setIsLoading]=useState(true)
  // useEffect(()=>{
 
   
      
  
    
  // },[])
  return (
    <>
    <Head>
    <title>Flamincode</title>
    <meta name="robots" content="index,follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
      <meta property="og:title" content='Flamincode'/>
      <meta name="description" content="Commited to people and future" />
      <link rel="canonical" href={`${baseUrlPages}/`}/>
      <meta property="og:description" content="امروز میخوایم در مورد نوعی برنامه‌نویس مرموز به نام عشقِ پترن صحبت کنیم و مصائبی که همنشینی با این شخص برای ما به وجود میاره رو بررسی کنیم..."/>
      <meta property="og:image:height" content="100"/> 
      <meta property="og:image:width" content="100"/> 
  </Head>


<TopSection/>
<KeyFeatures/>
<ProjectPlans/>
<SliderSection/>
<BusinessPlans/>


{/* subscribe */}
<section
        className="py-20 bg-top bg-no-repeat"
        style={{"backgroundImage": "url('assets/imgs/elements/blob.svg')"}}
      >
        <div className="container px-4 mx-auto">
          <div className="relative py-20 px-4 lg:p-20">
            <div className="max-w-lg mx-auto text-center">
              <h2
                className="mb-4 text-3xl text-color-550 lg:text-4xl font-bold font-heading wow animate__animated animate__fadeInUp"
              >
                <span>Subscribe now to</span>
                <span className="text-color-100"> Our Newsletter</span>
                <span> and get the Coupon code.</span>
              </h2>
              <p
                className="mb-8 text-color-550 wow animate__animated animate__fadeInUp"
                data-wow-delay=".3s"
              >
                All your information is completely confidential
              </p>
              <div
                className="p-4 bg-white rounded-lg flex flex-wrap max-w-md mx-auto wow animate__animated animate__fadeInUp"
                data-wow-delay=".5s"
              >
                <div
                  className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-[#283036] rounded"
                >
                  <svg
                    className="h-6 w-6 my-auto text-colorGray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    ></path>
                    <path
                      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    ></path>
                  </svg>
                  <input
                    className="w-full pl-3 py-4 text-xs text-colorGray-400 font-semibold leading-none bg-colorGray-100 outline-none"
                    type="text"
                    placeholder="Type your e-mail"
                  />
                </div>
                <button
                  className="custom-button w-full duration-500 md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  
 
  
  </>
    

     

    
   
  )
}

