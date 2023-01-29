import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {SwiperButtonNext,SwiperButtonPrev} from '../swiperButton'
import SwiperCore, { Autoplay } from 'swiper';
 const ImageSlider = () => {
  SwiperCore.use([Autoplay])

    
  return (
    <>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 1000, disableOnInteraction: false,
        pauseOnMouseEnter: true }}
      
    
      breakpoints={{
    768:{
      width: 768,
      slidesPerView: 2,
    }
      }}
    >
      <SwiperSlide>
         <div className="px-3 pb-5">
                    <div className="card-slider group">
                      <img
                        className="rounded-xl"
                        src="assets/imgs/placeholders/img-2.jpg"
                        alt=""
                      />
                      <div className="flex justify-between items-end">
                        <div>
                          <h1
                            className="mt-5 text-xl font-semibold group-hover:text-color-200"
                          >
                            User growth
                          </h1>
                          <p className="mt-2 text-xs text-gray-500">
                            Harvard university
                          </p>
                        </div>
                        <div>
                          <a
                            className="tracking-wide link-button hover-up-2 mr-2 inline-block px-4 py-3 text-xs font-semibold leading-none border  cursor-pointer"
                            >View Details</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
    
                  <SwiperSlide>
         <div className="px-3 pb-5">
                    <div className="card-slider group">
                      <img
                        className="rounded-xl"
                        src="assets/imgs/placeholders/img-2.jpg"
                        alt=""
                      />
                      <div className="flex justify-between items-end">
                        <div>
                          <h1
                            className="mt-5 text-xl font-semibold group-hover:text-color-200"
                          >
                            User growth
                          </h1>
                          <p className="mt-2 text-xs text-gray-500">
                            Harvard university
                          </p>
                        </div>
                        <div>
                          <a
                            className="tracking-wide link-button hover-up-2 mr-2 inline-block px-4 py-3 text-xs font-semibold leading-none border  cursor-pointer"
                            >View Details</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
         <div className="px-3 pb-5">
                    <div className="card-slider group">
                      <img
                        className="rounded-xl"
                        src="assets/imgs/placeholders/img-2.jpg"
                        alt=""
                      />
                      <div className="flex justify-between items-end">
                        <div>
                          <h1
                            className="mt-5 text-xl font-semibold group-hover:text-color-200"
                          >
                            User growth
                          </h1>
                          <p className="mt-2 text-xs text-gray-500">
                            Harvard university
                          </p>
                        </div>
                        <div>
                          <a
                            className="tracking-wide link-button hover-up-2 mr-2 inline-block px-4 py-3 text-xs font-semibold leading-none border  cursor-pointer"
                            >View Details</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
         <div className="px-3 pb-5">
                    <div className="card-slider group">
                      <img
                        className="rounded-xl"
                        src="assets/imgs/placeholders/img-2.jpg"
                        alt=""
                      />
                      <div className="flex justify-between items-end">
                        <div>
                          <h1
                            className="mt-5 text-xl font-semibold group-hover:text-color-200"
                          >
                            User growth
                          </h1>
                          <p className="mt-2 text-xs text-gray-500">
                            Harvard university
                          </p>
                        </div>
                        <div>
                          <a
                            className="tracking-wide link-button hover-up-2 mr-2 inline-block px-4 py-3 text-xs font-semibold leading-none border  cursor-pointer"
                            >View Details</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <div id="carausel-2-columns-1-arrows" className="flex">
                  <SwiperButtonPrev/>
      <SwiperButtonNext/>
                  </div>
     
      
    </Swiper>
    
    </>
  )
}
export default ImageSlider