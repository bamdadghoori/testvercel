import React,{useState} from 'react'
import Table from '../../public/components/panelComponents/resumes-management/table'
import ProgressLoading from '../../public/components/progressLoadingPanel'
import { useRouter } from 'next/router'
 const ResumesManagement = () => {

  const [loading,setLoading]=useState(false)
                 
const goTopage=async(title:string)=>{
setLoading(true);
await router.push(title)
setLoading(false)
}

  const router=useRouter();

  return (
    <>
    {loading && <ProgressLoading/>}
   
    
    <Table/>
  
    </>
  )
}
export default ResumesManagement