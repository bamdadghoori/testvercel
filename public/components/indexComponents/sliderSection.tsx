import React from 'react'
import ImageSlider from './imageSlider'
 const SliderSection = () => {
  return (
    <>
    <section className="py-12 md:py-20 slider-shadow">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-3">
            <div
              className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left"
            >
              <div
                className="max-w-md lg:max-w-xs lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0"
              >
                <h2
                  className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  Simple answers for
                  <span className="text-color-550"> Complex</span> questions
                </h2>
                <p
                  className="text-xs md:text-base text-colorGray-400 leading-loose wow animate__animated animate__fadeInUp"
                  data-wow-delay=".9s"
                >
               Have a look at our services details, we discussed and addressed many of modern business challenges and how to solve them.
                </p>
              </div>
              <div
                className="lg:absolute lg:bottom-0 lg:left-0 flex justify-center"
              >
                <div id="carausel-2-columns-1-arrows" className="flex"></div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-wrap">
              <div className="relative w-full">
              <ImageSlider/>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}
export default SliderSection