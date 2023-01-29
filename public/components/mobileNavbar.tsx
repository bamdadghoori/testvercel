import React,{useState} from 'react'

 const MobileNavbar = ({changeShowMobileNavbar,goToPage}:{changeShowMobileNavbar:(...args:any[])=>void,goToPage:(...args:any[])=>void}) => {
   const [openServicesList,setOpenServicesList]=useState(false)

  return (
   <>
   <div className="navbar-menu relative z-50 transition duration-300">
        <div
          className="navbar-backdrop fixed inset-0 bg-colorGray-800 opacity-25"
        ></div>
        <nav
          className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300"
        >
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-semibold leading-none" href="#">
              <img className="h-10" src="assets/imgs/logos/monst-logo.svg" alt="" />
            </a>
            <button className="navbar-close" onClick={()=>changeShowMobileNavbar(true)}>
              <svg
                className="h-6 w-6 text-colorGray-400 cursor-pointer hover:text-color-550"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul className="mobile-menu">
              <li className="mb-1 rounded-xl">
                <a
                  className="block p-4 text-sm text-white hover:text-color-500 p-3 hover:rounded hover:bg-[#fff] cursor-pointer rounded-xl"
                  onClick={(e)=>{e.preventDefault(); goToPage('/'); changeShowMobileNavbar(true)}}
                  >Home</a
                >
              </li>
              <li className="mb-1 rounded-xl">
                <a
                  className="block p-4 text-sm text-white hover:text-color-500 p-3 hover:rounded hover:bg-[#fff] cursor-pointer rounded-xl"
                  onClick={(e)=>{e.preventDefault(); goToPage('/about');changeShowMobileNavbar(true)}}
>About</a>
              </li>
              <li className="mb-1 menu-item-has-children rounded-xl">
              <span className={`menu-expand text-white ${openServicesList ? 'rotate-45':' '}`} onClick={()=>setOpenServicesList(!openServicesList)}>+</span>
             
                <a
                  className="block p-4 text-sm text-white hover:text-color-500 p-3 hover:rounded hover:bg-[#fff] cursor-pointer"
                  onClick={(e)=>{e.preventDefault(); goToPage('/services');changeShowMobileNavbar(true)}}
                  >Services</a
                >
                {openServicesList && (
  <ul className="dropdown pl-5">
  <li>
    <a
       onClick={(e)=>{e.preventDefault(); goToPage('/services/website');changeShowMobileNavbar(true)}}
      className="block p-3 text-sm text-white hover:text-color-500 p-3 hover:rounded hover:bg-[#fff] cursor-pointer"
      >Website</a
    >
  </li>
  <li>
    <a
        onClick={(e)=>{e.preventDefault(); goToPage('/services/iosApp');changeShowMobileNavbar(true)}}
      className="block p-3 text-sm text-white hover:text-color-500 p-3 hover:rounded hover:bg-[#fff] cursor-pointer"
      >IOS App</a
    >
  </li>
  <li>
    <a
       onClick={(e)=>{e.preventDefault(); goToPage('/services/androidApp');changeShowMobileNavbar(true)}}
      className="block p-3 text-sm text-white hover:text-color-500 p-3 hover:rounded hover:bg-[#fff] cursor-pointer"
      >Android App</a
    >
  </li>
  <li>
    <a
      onClick={(e)=>{e.preventDefault(); goToPage('/services/desktopApp');changeShowMobileNavbar(true)}}
      className="block p-3 text-sm text-white hover:text-color-500 p-3 hover:rounded hover:bg-[#fff] cursor-pointer"
      >Desktop App (Windows,Linux,Mac)</a
    >
  </li>
  <li>
    <a
      onClick={(e)=>{e.preventDefault(); goToPage('/services/analyzeAndDesign');changeShowMobileNavbar(true)}}
      className="block p-3 text-sm text-white hover:text-color-500 p-3 hover:rounded hover:bg-[#fff] cursor-pointer"
      >Analyse and Design</a
    >
  </li>
</ul>
                )}
              
              </li>
             
             
             
              <li className="mb-1 ">
                <a
                  className="block p-4 text-sm text-white hover:text-color-500 p-3 hover:rounded hover:bg-[#fff] cursor-pointer"
                  onClick={(e)=>{e.preventDefault(); goToPage('/blogs');changeShowMobileNavbar(true)}}
                  >Blog</a
                >
             
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm text-white hover:text-color-500 p-3 hover:rounded hover:bg-[#fff] cursor-pointer"
                  onClick={(e)=>{e.preventDefault(); goToPage('/faqs');changeShowMobileNavbar(true)}}
                  >Faqs</a
                >
              </li>
            
              <li className="mb-1">
                <a
                  className="block p-4 text-sm text-white hover:text-color-500 p-3 hover:rounded hover:bg-[#fff] cursor-pointer"
                  onClick={(e)=>{e.preventDefault(); goToPage('/contact');changeShowMobileNavbar(true)}}
                  >Contact</a
                >
              </li>
            </ul>
           <div className="mt-4 pt-6 border-t border-colorGray-100">
           
              <a
                className="btn-accent bg-[#fff] text-color-500 hover-up-2 cursor-pointer"
                onClick={(e)=>{e.preventDefault(); goToPage('/login');changeShowMobileNavbar(true)}}
                >Log In</a
              >
            </div>
          </div>
          {/* <div className="mt-auto">
            <p className="my-4 text-xs text-colorGray-400">
              <span>Get in Touch</span>
              <a className="text-color-550 hover:text-color-550 underline" href="#"
                >contact@monst.com</a
              >
            </p>
            <a className="inline-block px-1"  href="#">

           
             <span className="bg-color-650">
              <svg width="22" height="22" viewBox="0 0 22 22" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4986 19V11.7022H14.995L15.3695 8.85725H12.4986V7.04118C12.4986 6.21776 12.7308 5.65661 13.936 5.65661L15.4706 5.65599V3.11138C15.2052 3.07756 14.2942 3 13.2339 3C11.0198 3 9.50399 4.32557 9.50399 6.75942V8.85725H7V11.7022H9.50399V19H12.4986Z" />
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="3" width="9" height="16">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4986 19V11.7022H14.995L15.3695 8.85725H12.4986V7.04118C12.4986 6.21776 12.7308 5.65661 13.936 5.65661L15.4706 5.65599V3.11138C15.2052 3.07756 14.2942 3 13.2339 3C11.0198 3 9.50399 4.32557 9.50399 6.75942V8.85725H7V11.7022H9.50399V19H12.4986Z" fill="white"/>
                </mask>
                <g mask="url(#mask0)">
                </g>
                </svg>
              </span>
                  
            
                

            </a>
            <a className="inline-block px-1" href="#">
               <span className="text-color-400">
                
                <svg width="22" height="22" viewBox="0 0 22 22" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.63381C19.3743 5.91106 18.7029 6.09908 17.9975 6.18303C18.7178 5.75172 19.2691 5.06761 19.5304 4.25494C18.8548 4.65436 18.1091 4.94439 17.3144 5.10161C16.6781 4.42281 15.7731 4 14.7692 4C12.8432 4 11.2816 5.56158 11.2816 7.48647C11.2816 7.75947 11.3124 8.02611 11.3719 8.28108C8.474 8.13553 5.90431 6.74711 4.18444 4.63736C3.88381 5.15153 3.71278 5.75064 3.71278 6.39017C3.71278 7.60014 4.32892 8.66775 5.26375 9.29236C4.69222 9.27325 4.15469 9.11603 3.68411 8.85469V8.89825C3.68411 10.5873 4.88664 11.997 6.48114 12.3178C6.189 12.3964 5.88094 12.44 5.56225 12.44C5.33706 12.44 5.11928 12.4177 4.90575 12.3752C5.34978 13.7615 6.63731 14.7696 8.16278 14.7972C6.96981 15.7321 5.46558 16.2876 3.83178 16.2876C3.55028 16.2876 3.273 16.2706 3 16.2398C4.54353 17.231 6.376 17.8089 8.3455 17.8089C14.7607 17.8089 18.2674 12.4952 18.2674 7.88697L18.2557 7.4355C18.9409 6.94681 19.5336 6.33281 20 5.63381Z" />
                  <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="4" width="17" height="14">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.63381C19.3743 5.91106 18.7029 6.09908 17.9975 6.18303C18.7178 5.75172 19.2691 5.06761 19.5304 4.25494C18.8548 4.65436 18.1091 4.94439 17.3144 5.10161C16.6781 4.42281 15.7731 4 14.7692 4C12.8432 4 11.2816 5.56158 11.2816 7.48647C11.2816 7.75947 11.3124 8.02611 11.3719 8.28108C8.474 8.13553 5.90431 6.74711 4.18444 4.63736C3.88381 5.15153 3.71278 5.75064 3.71278 6.39017C3.71278 7.60014 4.32892 8.66775 5.26375 9.29236C4.69222 9.27325 4.15469 9.11603 3.68411 8.85469V8.89825C3.68411 10.5873 4.88664 11.997 6.48114 12.3178C6.189 12.3964 5.88094 12.44 5.56225 12.44C5.33706 12.44 5.11928 12.4177 4.90575 12.3752C5.34978 13.7615 6.63731 14.7696 8.16278 14.7972C6.96981 15.7321 5.46558 16.2876 3.83178 16.2876C3.55028 16.2876 3.273 16.2706 3 16.2398C4.54353 17.231 6.376 17.8089 8.3455 17.8089C14.7607 17.8089 18.2674 12.4952 18.2674 7.88697L18.2557 7.4355C18.9409 6.94681 19.5336 6.33281 20 5.63381Z" />
                  </mask>
                  <g mask="url(#mask0)">
                  </g>
                  </svg> </span>
                  
                
            </a>
            <a className="inline-block px-1" href="#">
                <span className="text-color-650">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.96724 2H15.0325C17.7717 2 20.0001 4.22841 20 6.96735V15.0327C20 17.7716 17.7717 20 15.0325 20H6.96724C4.22831 20 2 17.7717 2 15.0327V6.96735C2 4.22841 4.22831 2 6.96724 2ZM15.0326 18.403C16.8911 18.403 18.4031 16.8911 18.4031 15.0326H18.403V6.96735C18.403 5.10903 16.891 3.59705 15.0325 3.59705H6.96724C5.10892 3.59705 3.59705 5.10903 3.59705 6.96735V15.0326C3.59705 16.8911 5.10892 18.4031 6.96724 18.403H15.0326ZM6.28571 11.0001C6.28571 8.40055 8.4005 6.28571 11 6.28571C13.5995 6.28571 15.7143 8.40055 15.7143 11.0001C15.7143 13.5996 13.5995 15.7143 11 15.7143C8.4005 15.7143 6.28571 13.5996 6.28571 11.0001ZM7.90898 11C7.90898 12.7044 9.29568 14.0909 11 14.0909C12.7043 14.0909 14.091 12.7044 14.091 11C14.091 9.29553 12.7044 7.90891 11 7.90891C9.29557 7.90891 7.90898 9.29553 7.90898 11Z" />
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="18" height="18">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.96724 2H15.0325C17.7717 2 20.0001 4.22841 20 6.96735V15.0327C20 17.7716 17.7717 20 15.0325 20H6.96724C4.22831 20 2 17.7717 2 15.0327V6.96735C2 4.22841 4.22831 2 6.96724 2ZM15.0326 18.403C16.8911 18.403 18.4031 16.8911 18.4031 15.0326H18.403V6.96735C18.403 5.10903 16.891 3.59705 15.0325 3.59705H6.96724C5.10892 3.59705 3.59705 5.10903 3.59705 6.96735V15.0326C3.59705 16.8911 5.10892 18.4031 6.96724 18.403H15.0326ZM6.28571 11.0001C6.28571 8.40055 8.4005 6.28571 11 6.28571C13.5995 6.28571 15.7143 8.40055 15.7143 11.0001C15.7143 13.5996 13.5995 15.7143 11 15.7143C8.4005 15.7143 6.28571 13.5996 6.28571 11.0001ZM7.90898 11C7.90898 12.7044 9.29568 14.0909 11 14.0909C12.7043 14.0909 14.091 12.7044 14.091 11C14.091 9.29553 12.7044 7.90891 11 7.90891C9.29557 7.90891 7.90898 9.29553 7.90898 11Z" />
                    </mask>
                    <g mask="url(#mask0)">
                    </g>
                    </svg>
                </span>
            </a>
          </div> */}
        </nav>
      </div>
   </>
  )
}
export default MobileNavbar
