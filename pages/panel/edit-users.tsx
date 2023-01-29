import React, { useState } from 'react'
import axios from 'axios'

import EdituserForm from '../../public/components/panelComponents/edit-users/editUserForm'
import { baseUrl } from '../../public/apiFunctions'
// import { getuserWithId } from '../../public/apiFunctions'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import LoadingForm from './loading-form'
import { getSingleUserTest } from './users-management'
 const EditUsers = () => {

    const[user,setUser]:any=useState({})



    const router=useRouter();
      const id=Number(router.query.id)


      

const setDataToUi=async()=>{
   const selectedUser= getSingleUserTest(id)
   setUser(selectedUser)
//   try{
    
//     const response= await getuserWithId(router.query.id)
//   console.log(response)
//   setuser(response)
//     return response
   
//   }
//   catch(er){
//     console.log(er)
//     return er
//   }
     
    }
      useEffect(()=>{
        if(router.query.id!=undefined){

          setDataToUi();
        }
       
      },[router.query])
  return (
    <>
    {console.log(user)}
    
    
    {(user.id!=undefined) ? <EdituserForm user={user}/>:<LoadingForm/>} 
   
    
    
     
    
    
    </>
  )
}
export default EditUsers





