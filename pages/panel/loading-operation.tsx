import React from 'react'
import Navbar from '../../public/components/panelComponents/addBlog/navbar'
import TopSection from '../../public/components/panelComponents/addBlog/topSection'
import AddBlogForm from '../../public/components/panelComponents/addBlog/addBlogForm'
import Footer from '../../public/components/panelComponents/footer'
import LoadingMiddlePage from '../../public/components/loadingMiddlePage'
import { useRouter } from 'next/router'
 const AddBlog = () => {
  const router=useRouter()
  console.log(router.query.message)
  return (
   <>
   <div className='style-panel'>
    <div className='m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500'>
    <Navbar/>
    <main className="mt-0 transition-all duration-200 ease-in-out">
    <section className="min-h-screen">
   
                    
    <TopSection/>
    <div className='relative bottom-40'>
    <div className=" bg-white flex justify-center items-center relative bottom-4">
    <div
                      className="text-[#36CE89] text-xl px-4 py-3 rounded relative"
                      role="success"
                    >
                     The operation is successfully completed! coming back to the form page
                    </div>
                  
 
   </div>
   </div>
 
   <div className='relative bottom-15'>
   <LoadingMiddlePage/>
   </div>
    </section>
    {/* <div className='w-full px-6 py-6 mx-auto'>
    <main className='relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl  ps--active-y'> */}
    <Footer/>
   
    
    </main>
    
    </div>
   
    
   
   </div>
   </>
  )
}
export default AddBlog
