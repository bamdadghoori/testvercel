import React,{useState} from 'react'
import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/router'
import ProgressLoading from '../progressLoading';
 const TopSection = () => {
   
  const router=useRouter();

const[loading,setLoading]=useState(false)
  //link to pages
  
     const goToPage=async(title:string)=>{
      setLoading(true)
    await  router.push(`${title}`)
    setLoading(false)
     }
  
  return (
    <>
    {loading && <ProgressLoading/>}
    <section className="relative -mt-24 pt-24">
        <div
          className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-white z-0"
          style={{"zIndex": "-1"}}
        ></div>
        <div className="container">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="w-full lg:w-1/2 px-3">
              <div className="py-12">
                <div
                  className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left"
                >
                 <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__ animate__fadeIn animated animated" >  We handle <span className="text-color-550"> your software concerns</span></h2>
                  <div
                    className="text-colorGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn"
                  >
                    We are <strong className="text-color-550">Monst</strong>, a
                    Creative Design<span>&nbsp;</span>
                    <span
                      className="typewrite d-inline text-brand"
                     
                    >

<div className="inline-block" >
    
                <Typewriter 
  options={{
    strings: ['Web Agency', 'Social Marketing'],
    autoStart: true,
    loop: true,
    delay:300,
    deleteSpeed:300
  }}
/>
                </div>
                    </span>
                  </div>
                  <p
                    className="text-colorGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn mt-3 text-sm"
                  >
                    Helping you maximize operations management with digitization
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <a
                    className="link-button hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 
                      text-center font-semibold leading-none    wow animate__animatedanimated animate__fadeInUp"
                    href="#moreAboutUs"
                    data-wow-delay=".3s"
                    data-wow-duration=".3s"
                    >More about us</a
                  >

                  <a
                    className="link-button block  hover-up-2 sm:inline-block py-4 px-8 font-semibold 
                     wow animate__animatedanimated leading-none animate__fadeInUp cursor-pointer"
                    data-wow-delay=".3s"
                    onClick={(e)=>{e.preventDefault(); goToPage('/portfolio')}}
                    >See the portfolio</a
                  >
                </div>
              </div>
            </div>
            <div
              className="w-full lg:w-1/2 px-3  mb-12 lg:mb-0 pb-10"
            >
              <div className="flex items-center justify-center">
                <img
                  className="lg:max-w-lg"
                  src="assets/imgs/illustrations/team.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default TopSection
