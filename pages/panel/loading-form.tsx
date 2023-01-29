import React from 'react'
import LoadingMiddlePage from '../../public/components/loadingMiddlePage'

 const LoadingForm = () => {
  return (
   <>
    <div className="container h-full-main">
        <div className="flex flex-wrap -mx-3 ">
          <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-8/12 xl:w-8/12">
            <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">

                <LoadingMiddlePage/>
            </div>
            </div> 
            </div>
            </div>
   </>
  )
}
export default LoadingForm;