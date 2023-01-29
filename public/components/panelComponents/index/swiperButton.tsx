import { useSwiper } from "swiper/react";

export const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <>
    <span  onClick={() => swiper.slideNext()} className="text-[#fff] flex slick-arrow custom_next"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span>
    </>
  )
};
export const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
        <>
        <span  onClick={() => swiper.slidePrev()} className="mr-4 text-[#fff] flex slick-arrow custom_prev"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg></span>
        </>
    ) 
  };
    
  