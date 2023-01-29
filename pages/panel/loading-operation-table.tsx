import React from 'react'
import LoadingMiddlePage from '../../public/components/loadingMiddlePage';
import { useRouter } from 'next/router'

 const LoadingOperationTable = () => {
  const router=useRouter();
  return (
    <>
      <div className='relative top-20 '>
    <div className="rounded  flex justify-center items-center relative bottom-4">
    <div
                      className=" bg-[#36CE89] text-white text-xl px-4 py-3 rounded relative"
                      role="success"
                    >
                        {router.query.message}. coming back to the page
                    </div>
                  
 
   </div>
   </div>
   <div className='relative top-52 mb-64'>
    <LoadingMiddlePage/>
    </div>
    </>
  )
}
export default LoadingOperationTable;
