import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { getBlogCategoriesCount, getCountOfBlogs } from '../../../apiFunctions'
import ProgressLoading from '../../progressLoadingPanel'



 const Cards = () => {

  const [blogCount,setBlogCount]=useState(0)
  const [categoryCount,setCategoryCount]=useState(0)
  const [loading,setLoading]=useState(false)
 

  const router=useRouter();

  const goToPage=async(title:string)=>{
    setLoading(true)
  await router.push(title)
  setLoading(false)
  }
  

  const changeBlogCount=async()=>{
   const count=await getCountOfBlogs();
   setBlogCount(count)
  }

  const changeCategoryCount=async()=>{
    const count=await getBlogCategoriesCount();
    setCategoryCount(count)
   }
  useEffect(()=>{
    changeBlogCount();
    changeCategoryCount();
  },[])
   

  return (
    <>
    {loading && <ProgressLoading/>}
       <div className="flex flex-wrap -mx-3">
      
      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850  dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div className='cursor-pointer' onClick={()=>goToPage('panel/blogs-management')}>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">See the blogs</p>
                  <h5 className="mb-2 font-bold dark:text-white">{blogCount>0 && blogCount}</h5>
                  <p className="mb-0 dark:text-white dark:opacity-60">
                    <span className="text-sm font-bold leading-normal text-emerald-500">{blogCount>0 && blogCount} </span>
                   blogs added to blog list
                  </p>
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                  {/* <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"></i> */}
                  <div className="ni h-full flex items-center justify-center"><img src="/assets/imgs/icons/blog-icon.svg" alt="" /></div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
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
                  {/* <i className="ni leading-none ni-world text-lg relative top-3.5 text-white"></i> */}
                  <div className="ni h-full flex items-center justify-center"><img src="/assets/imgs/icons/user-icon.svg" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">categories</p>
                  <h5 className="mb-2 font-bold dark:text-white">{categoryCount>0 && categoryCount}</h5>
                  <p className="mb-0 dark:text-white dark:opacity-60">
                    <span className="text-sm font-bold leading-normal text-red-600">{categoryCount>0 && categoryCount} </span>
                    different categories
                  </p>
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400">
                  {/* <i className="ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white"></i> */}
                  <div className="ni h-full flex items-center justify-center"><img src="/assets/imgs/icons/categories-icon.svg" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">Services</p>
                  <h5 className="mb-2 font-bold dark:text-white">5</h5>
                  <p className="mb-0 dark:text-white dark:opacity-60">
                    <span className="text-sm font-bold leading-normal text-emerald-500">5 </span>
                    kinds of services
                  </p>
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500">
                  {/* <i className="ni  leading-none ni-cart text-lg relative top-3.5 text-white"></i> */}
                  <div className="ni h-full flex items-center justify-center"><img src="/assets/imgs/icons/services-icon.svg" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Cards
