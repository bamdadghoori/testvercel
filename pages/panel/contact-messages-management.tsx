import React,{useState,useEffect} from 'react'
import Contact from '../contact'
import Table from '../../public/components/panelComponents/contacts-management/table'
import { getContactMessages, handleErrors } from '../../public/apiFunctions'
import LoadingToTable from './loading-to-table'
import LoadingForm from './loading-form'
import ErrorInTable from '../../public/components/panelComponents/errorInTable'
import { useRouter } from 'next/router'
import { jwtChecker } from '../../public/components/usefullFunctions'
 const ContactsManagement = () => {
  const router=useRouter()
const[messages,setMessages]:any=useState([])
const [apiLoading,setApiLoading]=useState(false)
const [errors,setErrors]=useState([])


const checkLogin=()=>{
  if(jwtChecker()=='404'){
    router.push('/loginExpired')
  }
}

const getMessagesFromApi=async()=>{
  setApiLoading(true)
  try{
    const response=await getContactMessages();
    console.log(response)
    setMessages(response)
  }
  catch(er){
    const errors= handleErrors(er)
    
    console.log(errors)
    if(errors=="Request failed with status code 401"){
      localStorage.removeItem('jwt')
      checkLogin();
     
      

}
setErrors(errors)
    setApiLoading(false)
  }
setApiLoading(false)
}
  useEffect(()=>{
    getMessagesFromApi();
  },[])
  return (
   <>
   {console.log(messages)}
   {apiLoading ? (
    <LoadingToTable/>
   ):(
    errors.length >0 ? (
      <ErrorInTable errors={errors}/>
    ):(
      <Table messages={messages}/>
    )

   ) }
   
   </>
  )
}
export default ContactsManagement
