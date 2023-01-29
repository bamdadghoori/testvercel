import React from 'react'

 const ContactDetailsForm = ({data}:{data:any}) => {
  
  return (
   <>
   {console.log(data)}
    <div className="container">
        <div className="flex justify-center flex-wrap -mx-3">
        <div className="mb-64 relative p-5 flex w-full md:w-1/2 flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-full max-w-full px-3">
                <div className="flex justify-center">
                <h5 className="mb-2 font-bold dark:text-white">Contact details</h5>
                </div>
             
                <div className='flex flex-col gap-4'>
               
                  
                  <div className="w-full mb-0 dark:text-white dark:opacity-60">
                    <div className="text-sm font-bold leading-normal text-emerald-500 inline-flex">Email: </div>
                     <span className='w-full'> {data.email}</span>
                  
                  </div>
                  <div className="w-full mb-0 dark:text-white dark:opacity-60">
                    <div className="text-sm font-bold leading-normal text-emerald-500 inline-flex">Subject: </div>
                     <span className='w-full'> {data.subject}</span>
                  
                  </div>
                  <div className="w-full mb-0 dark:text-white dark:opacity-60  justify-center">
                    <div className="text-sm font-bold leading-normal text-emerald-500 inline-flex">Message: </div>
                     <div className='w-full'><p>{data.text}</p></div>
                  
                  </div>
                </div>
                
              </div>
            
            </div>
          </div>
        </div>
          {/* <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
          <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
              <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                <h5>Contact details</h5>
              </div>

              <div className="flex-auto p-6">
              <div className="w-full max-w-full px-3 mb-6 w-full">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">Users</p>
                  <h5 className="mb-2 font-bold dark:text-white">10</h5>
                  <p className="w-full mb-0 dark:text-white dark:opacity-60">
                    <span className="text-sm font-bold leading-normal text-emerald-500 inline-flex">10 </span>
                     <span className='w-full'> registered users</span>
                  
                  </p>
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600">
            
                  <div className="ni h-full flex items-center justify-center"><img src="/assets/imgs/icons/user-icon.svg" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
              </div>
            </div>
            <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
              <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                <h5>Contact details</h5>
              </div>

              <div className="flex-auto p-6">
                <form role="form text-left">
                  <div className="md:flex md:justify-around  w-full flex-wrap">
                  
                   
                  
                
                    <div className="flex flex-wrap  md:justify-around w-full mb-4 ">
                    <label className='flex left-10 relative w-full'>
                       Email
                    </label>
                      <input
                      value={data.email}
                        type="text"
                        className="md:w-4/5 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Title"
                        aria-label="Title"
                        readOnly
                      />
                    </div>
                    <div className="flex flex-wrap md:justify-around w-full mb-4 ">
                    <label className='flex left-10 relative w-full'>
                        Subject
                    </label>
                      <input
                     value={data.subject}
                        type="text"
                        className="md:w-4/5 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Title"
                        aria-label="Title"
                        readOnly
                      />
                    </div>
                    <div className="w-full flex-wrap mb-4 flex justify-center">
                    <label className='flex left-10 relative w-full'>
                        Message
                    </label>
                      <textarea
                        className="md:w-4/5  placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="message"
                        name="message"
                        id="message"
                        cols={30}
                        rows={5}
                        readOnly
                      >{data.text}</textarea>
                    </div>
                    
                    

                  

                  
                       
                 </div>
                
                </form>
              </div>
            </div>
          </div> */}
        </div>
      </div>
   </>
  )
}
export default ContactDetailsForm;
