import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import {SwiperButtonNext,SwiperButtonPrev} from '../swiperButton'

 const ImageSlider = () => {
  SwiperCore.use([Autoplay]);
  return (
    <>
   <div onMouseEnter={()=>{}}>

  
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      
     autoplay={{ delay: 3000,  disableOnInteraction: false,
      pauseOnMouseEnter: true}}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
    768:{
      width: 768,
      slidesPerView: 2,
    }
      }}
    
    >
     
      <SwiperSlide>
         <div className="px-3 pb-5">
         <div className="px-6 py-10 bg-white shadow rounded hover-up-5 top-0 relative wow animate__ animate__fadeInUp animated border border-gray-100 hover:border-gray-200 animated" data-wow-delay=".1s" >
                      <div className="flex items-center mb-4">
                        <img className="h-16 w-16 rounded-full object-cover" src="assets/imgs/placeholders/avatar-1.png" alt=""/>
                        <div className="pl-4">
                          <strong className="mt-6 mb-2 text-md">Geraldine Tusoy</strong>
                          <p className="text-gray-500 text-xs mt-3">
                            CEO, Co Founders
                          </p>
                        </div>
                      </div>
                      <p className="leading-loose text-colorGray-400 mb-5">
                        Donec consequat tortor risus, at auctor felis consequat
                        a. Donec quis dolor sem. Sed sollicitudin magna in
                        hendrerit pulvinar. Vestibulum non quam velit.
                      </p>
                      <div className="flex space-x-2">
                        <a href="#" tabIndex={-1}>
                          <span className="text-color-400">       <svg width="22" height="22" viewBox="0 0 22 22" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" className="fill-current" clip-rule="evenodd" d="M12.4986 19V11.7022H14.995L15.3695 8.85725H12.4986V7.04118C12.4986 6.21776 12.7308 5.65661 13.936 5.65661L15.4706 5.65599V3.11138C15.2052 3.07756 14.2942 3 13.2339 3C11.0198 3 9.50399 4.32557 9.50399 6.75942V8.85725H7V11.7022H9.50399V19H12.4986Z"></path>
                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="3" width="9" height="16">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4986 19V11.7022H14.995L15.3695 8.85725H12.4986V7.04118C12.4986 6.21776 12.7308 5.65661 13.936 5.65661L15.4706 5.65599V3.11138C15.2052 3.07756 14.2942 3 13.2339 3C11.0198 3 9.50399 4.32557 9.50399 6.75942V8.85725H7V11.7022H9.50399V19H12.4986Z"></path>
                            </mask>
                            <g mask="url(#mask0)">
                            </g>
                            </svg>
                          </span>
                        </a>
                        <a href="#" tabIndex={-1}>
                          <span className="text-color-400">       <svg width="22" height="22" viewBox="0 0 22 22" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.96724 2H15.0325C17.7717 2 20.0001 4.22841 20 6.96735V15.0327C20 17.7716 17.7717 20 15.0325 20H6.96724C4.22831 20 2 17.7717 2 15.0327V6.96735C2 4.22841 4.22831 2 6.96724 2ZM15.0326 18.403C16.8911 18.403 18.4031 16.8911 18.4031 15.0326H18.403V6.96735C18.403 5.10903 16.891 3.59705 15.0325 3.59705H6.96724C5.10892 3.59705 3.59705 5.10903 3.59705 6.96735V15.0326C3.59705 16.8911 5.10892 18.4031 6.96724 18.403H15.0326ZM6.28571 11.0001C6.28571 8.40055 8.4005 6.28571 11 6.28571C13.5995 6.28571 15.7143 8.40055 15.7143 11.0001C15.7143 13.5996 13.5995 15.7143 11 15.7143C8.4005 15.7143 6.28571 13.5996 6.28571 11.0001ZM7.90898 11C7.90898 12.7044 9.29568 14.0909 11 14.0909C12.7043 14.0909 14.091 12.7044 14.091 11C14.091 9.29553 12.7044 7.90891 11 7.90891C9.29557 7.90891 7.90898 9.29553 7.90898 11Z"></path>
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="18" height="18">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.96724 2H15.0325C17.7717 2 20.0001 4.22841 20 6.96735V15.0327C20 17.7716 17.7717 20 15.0325 20H6.96724C4.22831 20 2 17.7717 2 15.0327V6.96735C2 4.22841 4.22831 2 6.96724 2ZM15.0326 18.403C16.8911 18.403 18.4031 16.8911 18.4031 15.0326H18.403V6.96735C18.403 5.10903 16.891 3.59705 15.0325 3.59705H6.96724C5.10892 3.59705 3.59705 5.10903 3.59705 6.96735V15.0326C3.59705 16.8911 5.10892 18.4031 6.96724 18.403H15.0326ZM6.28571 11.0001C6.28571 8.40055 8.4005 6.28571 11 6.28571C13.5995 6.28571 15.7143 8.40055 15.7143 11.0001C15.7143 13.5996 13.5995 15.7143 11 15.7143C8.4005 15.7143 6.28571 13.5996 6.28571 11.0001ZM7.90898 11C7.90898 12.7044 9.29568 14.0909 11 14.0909C12.7043 14.0909 14.091 12.7044 14.091 11C14.091 9.29553 12.7044 7.90891 11 7.90891C9.29557 7.90891 7.90898 9.29553 7.90898 11Z"></path>
                    </mask>
                    <g mask="url(#mask0)">
                    </g>
                    </svg>
                    
              </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
         <div className="px-3 pb-5">
         <div className="px-6 py-10 bg-white shadow rounded hover-up-5 top-0 relative wow animate__ animate__fadeInUp animated border border-gray-100 hover:border-gray-200 animated" data-wow-delay=".1s" >
                      <div className="flex items-center mb-4">
                        <img className="h-16 w-16 rounded-full object-cover" src="assets/imgs/placeholders/avatar-1.png" alt=""/>
                        <div className="pl-4">
                          <strong className="mt-6 mb-2 text-md">Geraldine Tusoy</strong>
                          <p className="text-gray-500 text-xs mt-3">
                            CEO, Co Founders
                          </p>
                        </div>
                      </div>
                      <p className="leading-loose text-colorGray-400 mb-5">
                        Donec consequat tortor risus, at auctor felis consequat
                        a. Donec quis dolor sem. Sed sollicitudin magna in
                        hendrerit pulvinar. Vestibulum non quam velit.
                      </p>
                      <div className="flex space-x-2">
                        <a href="#" tabIndex={-1}>
                          <span className="text-color-400">       <svg width="22" height="22" viewBox="0 0 22 22" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" className="fill-current" clip-rule="evenodd" d="M12.4986 19V11.7022H14.995L15.3695 8.85725H12.4986V7.04118C12.4986 6.21776 12.7308 5.65661 13.936 5.65661L15.4706 5.65599V3.11138C15.2052 3.07756 14.2942 3 13.2339 3C11.0198 3 9.50399 4.32557 9.50399 6.75942V8.85725H7V11.7022H9.50399V19H12.4986Z"></path>
                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="3" width="9" height="16">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4986 19V11.7022H14.995L15.3695 8.85725H12.4986V7.04118C12.4986 6.21776 12.7308 5.65661 13.936 5.65661L15.4706 5.65599V3.11138C15.2052 3.07756 14.2942 3 13.2339 3C11.0198 3 9.50399 4.32557 9.50399 6.75942V8.85725H7V11.7022H9.50399V19H12.4986Z"></path>
                            </mask>
                            <g mask="url(#mask0)">
                            </g>
                            </svg>
                          </span>
                        </a>
                        <a href="#" tabIndex={-1}>
                          <span className="text-color-400">       <svg width="22" height="22" viewBox="0 0 22 22" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.96724 2H15.0325C17.7717 2 20.0001 4.22841 20 6.96735V15.0327C20 17.7716 17.7717 20 15.0325 20H6.96724C4.22831 20 2 17.7717 2 15.0327V6.96735C2 4.22841 4.22831 2 6.96724 2ZM15.0326 18.403C16.8911 18.403 18.4031 16.8911 18.4031 15.0326H18.403V6.96735C18.403 5.10903 16.891 3.59705 15.0325 3.59705H6.96724C5.10892 3.59705 3.59705 5.10903 3.59705 6.96735V15.0326C3.59705 16.8911 5.10892 18.4031 6.96724 18.403H15.0326ZM6.28571 11.0001C6.28571 8.40055 8.4005 6.28571 11 6.28571C13.5995 6.28571 15.7143 8.40055 15.7143 11.0001C15.7143 13.5996 13.5995 15.7143 11 15.7143C8.4005 15.7143 6.28571 13.5996 6.28571 11.0001ZM7.90898 11C7.90898 12.7044 9.29568 14.0909 11 14.0909C12.7043 14.0909 14.091 12.7044 14.091 11C14.091 9.29553 12.7044 7.90891 11 7.90891C9.29557 7.90891 7.90898 9.29553 7.90898 11Z"></path>
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="18" height="18">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.96724 2H15.0325C17.7717 2 20.0001 4.22841 20 6.96735V15.0327C20 17.7716 17.7717 20 15.0325 20H6.96724C4.22831 20 2 17.7717 2 15.0327V6.96735C2 4.22841 4.22831 2 6.96724 2ZM15.0326 18.403C16.8911 18.403 18.4031 16.8911 18.4031 15.0326H18.403V6.96735C18.403 5.10903 16.891 3.59705 15.0325 3.59705H6.96724C5.10892 3.59705 3.59705 5.10903 3.59705 6.96735V15.0326C3.59705 16.8911 5.10892 18.4031 6.96724 18.403H15.0326ZM6.28571 11.0001C6.28571 8.40055 8.4005 6.28571 11 6.28571C13.5995 6.28571 15.7143 8.40055 15.7143 11.0001C15.7143 13.5996 13.5995 15.7143 11 15.7143C8.4005 15.7143 6.28571 13.5996 6.28571 11.0001ZM7.90898 11C7.90898 12.7044 9.29568 14.0909 11 14.0909C12.7043 14.0909 14.091 12.7044 14.091 11C14.091 9.29553 12.7044 7.90891 11 7.90891C9.29557 7.90891 7.90898 9.29553 7.90898 11Z"></path>
                    </mask>
                    <g mask="url(#mask0)">
                    </g>
                    </svg>
                    
              </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
         <div className="px-3 pb-5">
         <div className="px-6 py-10 bg-white shadow rounded hover-up-5 top-0 relative wow animate__ animate__fadeInUp animated border border-gray-100 hover:border-gray-200 animated" data-wow-delay=".1s" >
                      <div className="flex items-center mb-4">
                        <img className="h-16 w-16 rounded-full object-cover" src="assets/imgs/placeholders/avatar-1.png" alt=""/>
                        <div className="pl-4">
                          <strong className="mt-6 mb-2 text-md">Geraldine Tusoy</strong>
                          <p className="text-gray-500 text-xs mt-3">
                            CEO, Co Founders
                          </p>
                        </div>
                      </div>
                      <p className="leading-loose text-colorGray-400 mb-5">
                        Donec consequat tortor risus, at auctor felis consequat
                        a. Donec quis dolor sem. Sed sollicitudin magna in
                        hendrerit pulvinar. Vestibulum non quam velit.
                      </p>
                      <div className="flex space-x-2">
                        <a href="#" tabIndex={-1}>
                          <span className="text-color-400">       <svg width="22" height="22" viewBox="0 0 22 22" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" className="fill-current" clip-rule="evenodd" d="M12.4986 19V11.7022H14.995L15.3695 8.85725H12.4986V7.04118C12.4986 6.21776 12.7308 5.65661 13.936 5.65661L15.4706 5.65599V3.11138C15.2052 3.07756 14.2942 3 13.2339 3C11.0198 3 9.50399 4.32557 9.50399 6.75942V8.85725H7V11.7022H9.50399V19H12.4986Z"></path>
                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="3" width="9" height="16">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4986 19V11.7022H14.995L15.3695 8.85725H12.4986V7.04118C12.4986 6.21776 12.7308 5.65661 13.936 5.65661L15.4706 5.65599V3.11138C15.2052 3.07756 14.2942 3 13.2339 3C11.0198 3 9.50399 4.32557 9.50399 6.75942V8.85725H7V11.7022H9.50399V19H12.4986Z"></path>
                            </mask>
                            <g mask="url(#mask0)">
                            </g>
                            </svg>
                          </span>
                        </a>
                        <a href="#" tabIndex={-1}>
                          <span className="text-color-400">       <svg width="22" height="22" viewBox="0 0 22 22" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.96724 2H15.0325C17.7717 2 20.0001 4.22841 20 6.96735V15.0327C20 17.7716 17.7717 20 15.0325 20H6.96724C4.22831 20 2 17.7717 2 15.0327V6.96735C2 4.22841 4.22831 2 6.96724 2ZM15.0326 18.403C16.8911 18.403 18.4031 16.8911 18.4031 15.0326H18.403V6.96735C18.403 5.10903 16.891 3.59705 15.0325 3.59705H6.96724C5.10892 3.59705 3.59705 5.10903 3.59705 6.96735V15.0326C3.59705 16.8911 5.10892 18.4031 6.96724 18.403H15.0326ZM6.28571 11.0001C6.28571 8.40055 8.4005 6.28571 11 6.28571C13.5995 6.28571 15.7143 8.40055 15.7143 11.0001C15.7143 13.5996 13.5995 15.7143 11 15.7143C8.4005 15.7143 6.28571 13.5996 6.28571 11.0001ZM7.90898 11C7.90898 12.7044 9.29568 14.0909 11 14.0909C12.7043 14.0909 14.091 12.7044 14.091 11C14.091 9.29553 12.7044 7.90891 11 7.90891C9.29557 7.90891 7.90898 9.29553 7.90898 11Z"></path>
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="18" height="18">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.96724 2H15.0325C17.7717 2 20.0001 4.22841 20 6.96735V15.0327C20 17.7716 17.7717 20 15.0325 20H6.96724C4.22831 20 2 17.7717 2 15.0327V6.96735C2 4.22841 4.22831 2 6.96724 2ZM15.0326 18.403C16.8911 18.403 18.4031 16.8911 18.4031 15.0326H18.403V6.96735C18.403 5.10903 16.891 3.59705 15.0325 3.59705H6.96724C5.10892 3.59705 3.59705 5.10903 3.59705 6.96735V15.0326C3.59705 16.8911 5.10892 18.4031 6.96724 18.403H15.0326ZM6.28571 11.0001C6.28571 8.40055 8.4005 6.28571 11 6.28571C13.5995 6.28571 15.7143 8.40055 15.7143 11.0001C15.7143 13.5996 13.5995 15.7143 11 15.7143C8.4005 15.7143 6.28571 13.5996 6.28571 11.0001ZM7.90898 11C7.90898 12.7044 9.29568 14.0909 11 14.0909C12.7043 14.0909 14.091 12.7044 14.091 11C14.091 9.29553 12.7044 7.90891 11 7.90891C9.29557 7.90891 7.90898 9.29553 7.90898 11Z"></path>
                    </mask>
                    <g mask="url(#mask0)">
                    </g>
                    </svg>
                    
              </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
         <div className="px-3 pb-5">
         <div className="px-6 py-10 bg-white shadow rounded hover-up-5 top-0 relative wow animate__ animate__fadeInUp animated border border-gray-100 hover:border-gray-200 animated" data-wow-delay=".1s" >
                      <div className="flex items-center mb-4">
                        <img className="h-16 w-16 rounded-full object-cover" src="assets/imgs/placeholders/avatar-1.png" alt=""/>
                        <div className="pl-4">
                          <strong className="mt-6 mb-2 text-md">Geraldine Tusoy</strong>
                          <p className="text-gray-500 text-xs mt-3">
                            CEO, Co Founders
                          </p>
                        </div>
                      </div>
                      <p className="leading-loose text-colorGray-400 mb-5">
                        Donec consequat tortor risus, at auctor felis consequat
                        a. Donec quis dolor sem. Sed sollicitudin magna in
                        hendrerit pulvinar. Vestibulum non quam velit.
                      </p>
                      <div className="flex space-x-2">
                        <a href="#" tabIndex={-1}>
                          <span className="text-color-400">       <svg width="22" height="22" viewBox="0 0 22 22" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" className="fill-current" clip-rule="evenodd" d="M12.4986 19V11.7022H14.995L15.3695 8.85725H12.4986V7.04118C12.4986 6.21776 12.7308 5.65661 13.936 5.65661L15.4706 5.65599V3.11138C15.2052 3.07756 14.2942 3 13.2339 3C11.0198 3 9.50399 4.32557 9.50399 6.75942V8.85725H7V11.7022H9.50399V19H12.4986Z"></path>
                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="3" width="9" height="16">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4986 19V11.7022H14.995L15.3695 8.85725H12.4986V7.04118C12.4986 6.21776 12.7308 5.65661 13.936 5.65661L15.4706 5.65599V3.11138C15.2052 3.07756 14.2942 3 13.2339 3C11.0198 3 9.50399 4.32557 9.50399 6.75942V8.85725H7V11.7022H9.50399V19H12.4986Z"></path>
                            </mask>
                            <g mask="url(#mask0)">
                            </g>
                            </svg>
                          </span>
                        </a>
                        <a href="#" tabIndex={-1}>
                          <span className="text-color-400">       <svg width="22" height="22" viewBox="0 0 22 22" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.96724 2H15.0325C17.7717 2 20.0001 4.22841 20 6.96735V15.0327C20 17.7716 17.7717 20 15.0325 20H6.96724C4.22831 20 2 17.7717 2 15.0327V6.96735C2 4.22841 4.22831 2 6.96724 2ZM15.0326 18.403C16.8911 18.403 18.4031 16.8911 18.4031 15.0326H18.403V6.96735C18.403 5.10903 16.891 3.59705 15.0325 3.59705H6.96724C5.10892 3.59705 3.59705 5.10903 3.59705 6.96735V15.0326C3.59705 16.8911 5.10892 18.4031 6.96724 18.403H15.0326ZM6.28571 11.0001C6.28571 8.40055 8.4005 6.28571 11 6.28571C13.5995 6.28571 15.7143 8.40055 15.7143 11.0001C15.7143 13.5996 13.5995 15.7143 11 15.7143C8.4005 15.7143 6.28571 13.5996 6.28571 11.0001ZM7.90898 11C7.90898 12.7044 9.29568 14.0909 11 14.0909C12.7043 14.0909 14.091 12.7044 14.091 11C14.091 9.29553 12.7044 7.90891 11 7.90891C9.29557 7.90891 7.90898 9.29553 7.90898 11Z"></path>
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="18" height="18">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.96724 2H15.0325C17.7717 2 20.0001 4.22841 20 6.96735V15.0327C20 17.7716 17.7717 20 15.0325 20H6.96724C4.22831 20 2 17.7717 2 15.0327V6.96735C2 4.22841 4.22831 2 6.96724 2ZM15.0326 18.403C16.8911 18.403 18.4031 16.8911 18.4031 15.0326H18.403V6.96735C18.403 5.10903 16.891 3.59705 15.0325 3.59705H6.96724C5.10892 3.59705 3.59705 5.10903 3.59705 6.96735V15.0326C3.59705 16.8911 5.10892 18.4031 6.96724 18.403H15.0326ZM6.28571 11.0001C6.28571 8.40055 8.4005 6.28571 11 6.28571C13.5995 6.28571 15.7143 8.40055 15.7143 11.0001C15.7143 13.5996 13.5995 15.7143 11 15.7143C8.4005 15.7143 6.28571 13.5996 6.28571 11.0001ZM7.90898 11C7.90898 12.7044 9.29568 14.0909 11 14.0909C12.7043 14.0909 14.091 12.7044 14.091 11C14.091 9.29553 12.7044 7.90891 11 7.90891C9.29557 7.90891 7.90898 9.29553 7.90898 11Z"></path>
                    </mask>
                    <g mask="url(#mask0)">
                    </g>
                    </svg>
                    
              </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  </SwiperSlide>
               
    
                  {/* <SwiperSlide>
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
                            className="mt-5 text-xl font-semibold group-hover:text-color-550"
                          >
                            User growth
                          </h1>
                          <p className="mt-2 text-xs text-gray-500">
                            Harvard university
                          </p>
                        </div>
                        <div>
                          <a
                            className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-color-550 font-semibold leading-none border border-color-200 hover:border-color-550 hover:text-white hover:bg-color-550 rounded"
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
                            className="mt-5 text-xl font-semibold group-hover:text-color-550"
                          >
                            User growth
                          </h1>
                          <p className="mt-2 text-xs text-gray-500">
                            Harvard university
                          </p>
                        </div>
                        <div>
                          <a
                            className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-color-550 font-semibold leading-none border border-color-200 hover:border-color-550 hover:text-white hover:bg-color-550 rounded"
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
                            className="mt-5 text-xl font-semibold group-hover:text-color-550"
                          >
                            User growth
                          </h1>
                          <p className="mt-2 text-xs text-gray-500">
                            Harvard university
                          </p>
                        </div>
                        <div>
                          <a
                            className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-color-550 font-semibold leading-none border border-color-200 hover:border-color-550 hover:text-white hover:bg-color-550 rounded"
                            >View Details</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide> */}
                  <div id="carausel-2-columns-1-arrows" className="flex">
                  <SwiperButtonPrev/>
      <SwiperButtonNext/>
                  
     
      </div>
    </Swiper>
    </div>
    </>
  )
}
export default ImageSlider
