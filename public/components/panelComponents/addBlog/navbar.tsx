import React, { useState } from "react";
import { useRouter } from "next/router";
import ProgressLoading from "../../progressLoadingPanel";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
const [loading,setLoading]=useState(false)

const router=useRouter();


  const changeNavShowState=(state:boolean)=>{
    setShowMobileNav(state)
  }

  const goTopage=async(title:string)=>{
     setLoading(true)
     await router.push(title)
     setLoading(false)
  }
  return (
    <>
    {loading && <ProgressLoading/>}
      <nav className="absolute top-0 z-30 flex flex-wrap items-center justify-between w-full px-4 py-2 mt-6 mb-4 shadow-none lg:flex-nowrap lg:justify-start">
        <div className="container flex items-center justify-between py-0 flex-wrap-inherit">
          {/* <a
            className="py-1.75 ml-4 mr-4 font-bold text-white text-sm whitespace-nowrap lg:ml-0"
            href="https://demos.creative-tim.com/argon-dashboard-tailwind/pages/dashboard.html"
            target="_blank"
          >
            {" "}
            Argon Dashboard 2{" "}
          </a> */}
          <button
           onClick={()=>{changeNavShowState(!showMobileNav)}}
            className="px-3 py-1 ml-2 leading-none transition-all ease-in-out bg-transparent  border-transparent border-solid rounded-lg shadow-none cursor-pointer text-lg lg:hidden"
            type="button"
           
          >
            {/* <span className="inline-block mt-2 align-middle bg-center bg-no-repeat bg-cover w-6 h-6 bg-none">
              <span  className="w-5.5 rounded-xs duration-350 relative my-0 mx-auto block h-px bg-white transition-all"></span>
              <span  className="w-5.5 rounded-xs mt-1.75 duration-350 relative my-0 mx-auto block h-px bg-white transition-all"></span>
              <span  className="w-5.5 rounded-xs duration-350 relative my-0 mx-auto block h-px bg-white transition-all mt-1.75"></span>
            </span> */}
              <div className="w-4.5 overflow" >
                    <i className={`ease mb-0.75 duration-350  relative block h-0.5 rounded-sm bg-white ${showMobileNav ? ('-rotate-45 left-1 top-4 origin-10-10 '):(' ')} transition-all`}></i>
                    <i className={`ease mb-0.75 duration-350 relative block h-0.5 rounded-sm bg-white ${showMobileNav ? 'opacity-0':' '}  transition-all`}></i>
                    <i className={`ease relative duration-350  block h-0.5 rounded-sm  bg-white  ${showMobileNav ? ('rotate-45 left-1 -top-1 origin-10-90'):(' ')} transition-all`}></i>
                  </div>
          </button>
          {/* items-center flex-grow transition-all ease duration-350 lg-max:bg-white lg-max:overflow-hidden basis-full rounded-2xl lg:flex lg:basis-auto lg-max:max-h-0 */}
          <div className={`items-center flex-grow transition-all ease duration-350 ${showMobileNav ? 'lg-max:max-h-24':'lg-max:max-h-0'}  lg-max:bg-white lg-max:overflow-hidden basis-full rounded-2xl lg:flex lg:basis-auto`}>
            <ul className="flex flex-col pl-0 mx-auto mb-0 list-none lg-max:py-2 lg:flex-row xl:ml-auto">
              <li>
                {/* flex items-center px-4 py-2 mr-2 font-normal text-white transition-all ease-in-out duration-250 lg-max:text-slate-700 text-sm lg:px-2 lg:hover:text-white/75 */}
                <a
                  className="flex items-center px-4 cursor-pointer py-2 mr-2 font-normal lg:text-white transition-all ease-in-out duration-250  lg-max:text-slate-700 text-sm lg:px-2 lg:hover:text-white/75"
                  aria-current="page"
                 
                  onClick={(e)=>{e.preventDefault();goTopage('/panel');}}
                >
                  <i className="mr-1 lg:text-white  lg-max:text-slate-700 fa fa-chart-pie opacity-60"></i>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  className={`block px-4 py-2 mr-2 font-normal cursor-pointer lg:text-white ${showMobileNav ? ' ':'lg-max:poacity-0 '} transition-all ease-in-out duration-250  lg-max:text-slate-700 text-sm lg:px-2 lg:hover:text-white/75`}
                  onClick={(e)=>{e.preventDefault();goTopage('/panel');}}
                >
                  <i className="mr-1 lg:text-white  lg-max:text-slate-700 fa fa-user opacity-60"></i>
                  Profile
                </a>
              </li>
              <li>
                <a
                  className={`block px-4 py-2 mr-2 font-normal lg:text-white ${showMobileNav ? ' ':'lg-max:poacity-0 '} transition-all ease-in-out duration-250  lg-max:text-slate-700 text-sm lg:px-2 lg:hover:text-white/75`}
                  href="#"
                >
                  <i className="mr-1 lg:text-white  lg-max:text-slate-700 fa fa-user opacity-60"></i>
                  Sign up
                </a>
              </li>
              <li>
                <a
                  className={`block px-4 py-2 mr-2 font-normal lg:text-white ${showMobileNav ? ' ':'lg-max:poacity-0 '} transition-all ease-in-out duration-250  lg-max:text-slate-700 text-sm lg:px-2 lg:hover:text-white/75`}
                  href="#"
                >
                  <i className="mr-1 lg:text-white  lg-max:text-slate-700 fa fa-user opacity-60"></i>
                  Sign in
                </a>
              </li>
              
            </ul>

            <ul className="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
              <li>
                <a
                  href="https://www.creative-tim.com/product/argon-dashboard-tailwind"
                  target="_blank"
                  className="inline-block px-8 py-2 mb-0 mr-1 font-bold leading-normal text-center align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px hover:shadow-xs active:opacity-85 text-xs tracking-tight-rem bg-gradient-to-tl from-gray-400 to-gray-100 text-slate-800"
                >
                  Free Download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
