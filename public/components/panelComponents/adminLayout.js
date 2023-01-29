import Navbar from './navbar'
import Footer from './footer'
import Sidebar from './sidebar'
import { parseJwt } from '../usefullFunctions'
import React,{useState,useEffect} from 'react'
import DeleteModal from './blogsManagement/deleteModal'
import { UserContext,UserProvider } from './userContext'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Scrollbars } from 'react-custom-scrollbars';
export default function AdminLayout({ children }) {


 

const [user,setUser]=useState({})
   const getUser=()=>{
    if (typeof window !== "undefined") {
      if(localStorage.getItem('jwt')!=null && localStorage.getItem('jwt')!=undefined){
        var jwt= localStorage.getItem('jwt')
      const decodedJwt= parseJwt(jwt)
       console.log(decodedJwt)
           setUser({...decodedJwt})
      }
     
    
    }
   }
  

useEffect(()=>{
  getUser();
},[])

    const [showSideBar,setShowSideBar]=useState(false)


    const changeSideBarVisibility=(state)=>{
      console.log(state)
          setShowSideBar(state)
    }
  return (
              
      <>
      
     
      <div className='style-panel '>
        <UserProvider value={user}>
        <div className='m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500'>
      <div className="absolute w-full bg-blue-500 dark:hidden min-h-75"></div>
    
      <Sidebar showSideBar={showSideBar} changeSideBarVisibility={changeSideBarVisibility} />
    
      {/* <PerfectScrollbar style={scrollStyle}>
      </PerfectScrollbar> */}
      
       
      <main className='relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl ps ps--active-y'>
      <>
      <Scrollbars   style={{ height:'100vh' }}
      renderView={props => <div {...props} className="view"/>}
      renderTrackVertical={props => <div {...props} className="track-vertical"/>}
      renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
     >
      <Navbar showSideBar={showSideBar} changeSideBarVisibility={changeSideBarVisibility} />
      <div className='w-full px-6 py-6 mx-auto'>
     
      {children}
      <Footer/>
      </div>
      </Scrollbars>
      </>
     
      
        </main>
       
    
      </div>
      </UserProvider>
      </div>
     
      
    </>
   
  )
}