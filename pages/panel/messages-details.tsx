import React,{useEffect,useState} from 'react'

import ContactDetailsForm from '../../public/components/panelComponents/contact-details/contactDetailsForm'
import { useRouter } from 'next/router'
import axios from 'axios'
import { baseUrl } from '../../public/apiFunctions'
import { getContactMessage } from '../../public/apiFunctions'
import LoadingForm from './loading-form'
 const ContactDetails = () => {
    
    const router=useRouter();
      const id=Number(router.query.id)
console.log(router.query.id)


const [data,setData]:any=useState({})


const setDataToUi=async()=>{
    try{
        console.log(router.query.id)
        const response= await getContactMessage(router.query.id)
      console.log(response)
      setData(response)
        return response
       
      }
      catch(er){
        console.log(er)
        return er
      }
}

    useEffect(()=>{
        if(router.query.id!=undefined){
     
          setDataToUi();
        }
       
      },[router.query])


  return (
   
   <>
    {console.log(data)}
   
    {console.log(baseUrl)}

  
   {(data!=undefined && data.id!=undefined) ? <ContactDetailsForm data={data}/>:<LoadingForm/>}
  
   
    
   </>
  )
}
export default ContactDetails
// export async function getServerSideProps(context:any) {
//   var id:number=context.params.id
//  console.log(context.params.id)
//     var data:any={}

//   const getData=async()=>{
//     const response:any= await axios.get(`${baseUrl}/api/v1/ContactMessage/${id}`)
  
//     data=response.data
//     return data
//   }

 
//     try{
//       data=await getData();
//      data=JSON.stringify(data)
    
//   }
//   catch(er){
//       console.log(er)
//      }
  
      


//   return {


//     props: {data}, // will be passed to the page component as props
//   }
// }
