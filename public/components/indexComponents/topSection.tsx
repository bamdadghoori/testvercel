import React,{useEffect} from 'react'
import intersectBackground from '../../assets/imgs/backgrounds/intersect-purple.svg'
import Counters from './counters'
import { Element } from 'react-scroll';
import Typewriter from 'typewriter-effect';

 const TopSection = () => {
  useEffect(()=>{
    //@ts-ignore
 
    
  //  console.log(visible)
  //  setVisible(false)
    
  },[])
  return (
    <>
    
     <section 
        className=" bg-top w-full  flamingo-grad  flex -mt-24 bg-repeat pb-96 lg:pb-64 pt-24 "
        style={{"overflow":"hidden" }}
      >
       <div className="flex flex-wrap lg:flex-nowrap container">
        <div  className="flex ml-2 w-full  lg:w-5/12">
          <div className="pt-12 text-left">
            <div className="max-w-2xl mx-auto mb-8">
              <h2
                className="text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn"
              >
                Let us handle your software Concerns
                <span className="text-white"> Welcome to Flamincode</span>
              </h2>
              <div
                className="w-fit h-32 lg:h-16 xl:h-16 text-white leading-relaxed wow animate__animated animate__fadeIn"
              >
                Fast, <span>&nbsp;</span><strong className="text-white">Secure, user-friendly & highly scalable </strong> <span>&nbsp;</span>
                <span
                  className="typewrite d-inline text-brand"
                  // data-period="3000"
                  // data-type='["Web Agency", "Social Marketing" ]'
                > 
                <div className="inline-block min-h-writing" >
                <Typewriter 
  options={{
    strings: ['Softwares', 'web-applications', 'mobile-applications'],
    autoStart: true,
    loop: true,
    delay:20,
    deleteSpeed:20
  }}
/>
                </div>
                
            </span>
              </div>
            </div>
            <div className='flex w-full'>
              <a
                className="btn-primary py-4 px-8 mr-2  animate__fadeInUp hover-up-2"
                href="#key-features"
                >Key services</a
              >
              <a
                className="btn-white text-white wow btn-primary  animate__fadeInUp hover-up-2 white-buttond-shadow"
                data-wow-delay=".3s"
                href="#how-we-work"
                >How We Work?</a
              >
            </div>
          </div>
       
        </div>
       
        <div className="relative flex w-full lg:w-7/12 max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
         
          <div
            className="absolute lg:left-36 3xl:left-40"
            style={{"top": "9%", "left": "14%", "width": "72%", "height": "66%"}}
          >
            <img
              className="jump rounded wow animate__animated animate__fadeInUp"
              src="assets/imgs/placeholders/dashboard.png"
              alt=""
            />
          </div>
        </div>
        </div>
      </section>
      <Counters/>
    </>
  )
}
export default TopSection
