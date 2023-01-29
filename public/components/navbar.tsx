import React from 'react'
import MobileNavbar from './mobileNavbar'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import ProgressLoading from './progressLoading'
// import ProgressLoadingPurple from './progressLoadingPurple'
import { AsyncResource } from 'async_hooks'
interface props {
  marginLessNavbar?:boolean,
  shadowBottom?:boolean
}
 const Navbar = ({marginLessNavbar,shadowBottom}:props) => {

  

  //states
  const [showMobileNavbar,setShowMobileNavbar]=useState(false);
  const [stickyNavbar,setStickyNavbar]=useState(false)
  const [loading,setLoading]=useState(false)

  const router=useRouter();
console.log(router.pathname)
  
//link to pages

   const goToPage=async(title:string)=>{
     setLoading(true)
   await router.push(`${title}`)
    setLoading(false)
   }

  //on scroll method
  const changeScroll=()=>{
    if(window.scrollY<20){
      setStickyNavbar(false)
    }
    else{
    setStickyNavbar(true)
    }
  }

useEffect(()=>{
  window.addEventListener('scroll',changeScroll)
},[])
  // to open and close mobile navbar
  const changeShowMobileNavbar=(state:boolean)=>{
        setShowMobileNavbar(!state)
  }
  return (
    <>
    {loading && <ProgressLoading/>}
      <header className={` sticky-bar ${router.pathname==="/" ? 'bg-transparent ':'grad-navbar'}  ${stickyNavbar ? 'stick':' '} ${shadowBottom ? 'navbar-shadow':' '}`}>
        <div className="container bg-transparent">
          <nav className="bg-transparent flex justify-between items-center py-3">
            <a className="text-3xl font-semibold leading-none ml-4"  onClick={(e)=>{e.preventDefault(); goToPage('/')}}>
              <img className="h-10" src="/assets/imgs/logos/monst-logo-light.svg" alt="" />
            </a>
            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
              <li className="pt-4 pb-4">
                <a
                  className="text-sm font-semibold text-colorGray-600 hover:text-color-500 p-3 hover:rounded hover:bg-[#fff] cursor-pointer"
                  onClick={(e)=>{e.preventDefault(); goToPage('/')}}
                  >Home</a
                >
              </li>
              <li className="pt-4 pb-4">
                <a
                  className="text-sm font-semibold text-colorGray-600 hover:text-color-500 p-3 hover:rounded hover:bg-[#fff] cursor-pointer"
                  onClick={(e)=>{e.preventDefault(); goToPage('/about')}}
>About</a>
              </li>
              <li className="group relative pt-4 pb-4 has-child">
                <a
                  className="text-sm font-semibold text-colorGray-600 hover:text-color-500 p-3 hover:rounded hover:bg-[#fff]  cursor-pointer"
                  onClick={(e)=>{e.preventDefault(); goToPage('/services')}}
                  >Services</a
                >
                <ul className="drop-down-menu min-w-200">
                  <li>
                    <a
                      onClick={(e)=>{e.preventDefault(); goToPage('/services/website')}}
                      className="menu-sub-item text-sm text-colorGray-600 hover:text-colorGray-500 cursor-pointer"
                      >Website</a
                    >
                  </li>
                  <li>
                    <a
                      onClick={(e)=>{e.preventDefault(); goToPage('/services/iosApp')}}
                      className="menu-sub-item text-sm text-colorGray-600 hover:text-colorGray-500 cursor-pointer"
                      >IOS App</a
                    >
                  </li>
                  <li>
                    <a
                      onClick={(e)=>{e.preventDefault(); goToPage('/services/androidApp')}}
                      className="menu-sub-item text-sm text-colorGray-600 hover:text-colorGray-500 cursor-pointer"
                      >Android App</a
                    >
                  </li>
                  <li>
                    <a
                      onClick={(e)=>{e.preventDefault(); goToPage('/services/desktopApp')}}
                      className="menu-sub-item text-sm text-colorGray-600 hover:text-colorGray-500 cursor-pointer"
                      >Desktop App (Windows,Linux,Mac)</a
                    >
                  </li>
                  <li>
                    <a
                       onClick={(e)=>{e.preventDefault(); goToPage('/services/analyzeAndDesign')}}
                      className="menu-sub-item text-sm text-colorGray-600 hover:text-colorGray-500 cursor-pointer"
                      >Analyze And Design</a
                    >
                  </li>
                 
                </ul>
              </li>
              <li className="pt-4 pb-4">
                <a
                  className="text-sm font-semibold text-colorGray-600 hover:text-color-500 p-3 hover:rounded hover:bg-[#fff] cursor-pointer"
                  onClick={(e)=>{e.preventDefault(); goToPage('/faqs')}}
                  >FAQs</a
                >
              </li>
              <li className="group relative pt-4 pb-4">
                <a
                  className="text-sm font-semibold text-colorGray-600 hover:text-color-500 p-3 hover:rounded hover:bg-[#fff] cursor-pointer"
                  onClick={(e)=>{e.preventDefault(); goToPage('/blogs')}}
                  >Blog</a
                >
              </li>
             
              <li className="pt-4 pb-4">
                <a
                  className="text-sm font-semibold text-colorGray-600 hover:text-color-500 p-3 hover:rounded hover:bg-[#fff] cursor-pointer"
                  onClick={(e)=>{e.preventDefault(); goToPage('/contact')}}
                  >Contact</a
                >
              </li>
            </ul>
            <div className="hidden lg:block">
              <a className="btn-accent bg-[#fff] text-color-500 hover-up-2 cursor-pointer"   onClick={(e)=>{e.preventDefault(); goToPage('/login')}}>Log In</a>
              {/* <a className="btn-primary  bg-[#fff] text-color-500 hover-up-2 cursor-pointer"
              onClick={(e)=>{e.preventDefault(); goToPage('/signup')}}
              >Sign Up</a> */}
            </div>
            <div className="lg:hidden">
              <button className='navbar-burger flex items-center py-2 px-3 text-[#fff] hover:text-[#2c353d] rounded border border-color-200 hover:border-[#2c353d]' onClick={()=>{changeShowMobileNavbar(showMobileNavbar)}}>
                <svg  className="fill-current h-4 w-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
              
            </div>
          </nav>
        </div>
      </header>
      {showMobileNavbar==true && <MobileNavbar  changeShowMobileNavbar={changeShowMobileNavbar} goToPage={goToPage}/>}
      
    </>
  )
}
export default Navbar;


