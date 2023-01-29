import React, { useState } from 'react'
import axios from 'axios'

import EditCommentForm from '../../public/components/panelComponents/edit-comments/editCommentForm'
import { baseUrl } from '../../public/apiFunctions'
import { getCommentWithId } from '../../public/apiFunctions'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import LoadingForm from './loading-form'
 const EditComments = () => {

    const[comment,setComment]:any=useState({})



    const router=useRouter();
      const id=Number(router.query.id)


      

const setDataToUi=async()=>{
  try{
    
    const response= await getCommentWithId(router.query.id)
  console.log(response)
  setComment(response)
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
    {console.log(comment)}
    
    
    {(comment.commentId!=undefined && comment.text!=undefined) ? <EditCommentForm comment={comment}/>:<LoadingForm/>} 
   
    
    
     
    
    
    </>
  )
}
export default EditComments





