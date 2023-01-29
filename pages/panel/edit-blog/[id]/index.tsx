import React from 'react'
import axios from 'axios'
import Navbar from '../../../../public/components/panelComponents/addBlog/navbar'
import TopSection from '../../../../public/components/panelComponents/addBlog/topSection'
import EditBlogForm from '../../../../public/components/panelComponents/edit-blog/editBlogForm'
import { baseUrl } from '../../../../public/apiFunctions'
import Footer from '../../../../public/components/panelComponents/footer'
 const EditBlog = ({data}:{data:any}) => {

      // data=JSON.parse(data)
      console.log(data)
  return (
    <>
    {/* <div className='style-panel'>
     <div className='m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500'>
     <Navbar/>
     <main className="mt-0 transition-all duration-200 ease-in-out">
     <section className="min-h-screen">
     <TopSection/>
   <EditBlogForm blog={data}/>
     </section>
    
     <Footer/>
    
     
     </main>
     
     </div>
    
     
    
    </div> */}
    </>
  )
}
export default EditBlog

export async function getServerSideProps(context:any) {
    var id:number=context.params.id
   console.log(context.params.id)
      var data:any={}
  
    const getData=async()=>{
      const token=localStorage.getItem('jwt')
    
      const response:any= await axios.get(`https://api.flamincode.com/api/v1/Blog/11`,{
       
      headers: { "Authorization":`Bearer ${token}`}
  })
    
      data=response.data
      return data
    }
  
   
      try{
        data=await getData();
      //  data=JSON.stringify(data)
      
    }
    catch(er){
        console.log(er)
       }
    
        
  
  
    return {
  
  
      props: {data}, // will be passed to the page component as props
    }
  }
