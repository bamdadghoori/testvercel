import React from 'react'
import Navbar from '../../../../public/components/panelComponents/addBlog/navbar'
import TopSection from '../../../../public/components/panelComponents/addBlog/topSection'
import ContactDetailsForm from '../../../../public/components/panelComponents/contact-details/contactDetailsForm'
import Footer from '../../../../public/components/panelComponents/footer'
import axios from 'axios'
import { baseUrl } from '../../../../public/apiFunctions'
 const contactDetails = ({data}:{data:any}) => {

  data=JSON.parse(data)
  return (
   
   <>
    {console.log(data)}
   
    {console.log(baseUrl)}
   <div className='style-panel'>
    <div className='m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500'>
    <Navbar/>
    <main className="mt-0 transition-all duration-200 ease-in-out">
    <section className="min-h-screen">
    <TopSection/>
   <ContactDetailsForm data={data}/>
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
export default contactDetails
export async function getServerSideProps(context:any) {
  var id:number=context.params.id
 console.log(context.params.id)
    var data:any={}

  const getData=async()=>{
    const response:any= await axios.get(`${baseUrl}/api/v1/ContactMessage/${id}`)
  
    data=response.data
    return data
  }

 
    try{
      data=await getData();
     data=JSON.stringify(data)
    
  }
  catch(er){
      console.log(er)
     }
  
      


  return {


    props: {data}, // will be passed to the page component as props
  }
}
