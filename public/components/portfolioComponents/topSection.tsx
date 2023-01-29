import React,{useState} from 'react'
import { useRouter } from 'next/router'
import ProgressLoading from '../progressLoading';
 const TopSection = () => {
  const[loading,setLoading]=useState(false)
 
        const router=useRouter();
    //link to pages
    
       const goToPage=async(title:string)=>{
        setLoading(true)
     await router.push(`${title}`)
      setLoading(false)
       }
  return (
    <>
    {loading && <ProgressLoading/>}
     <section className="-mt-24 pt-40 pb-12">
        <div className="container text-center">
          <h1
            className="text-2xl lg:text-4xl font-bold mb-5 wow animate__animated animate__fadeInUp animated"
          >
            Our Portfolio
          </h1>
          <ul
            className="mx-auto text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeInUp animated"
          >
            <li className="inline-flex items-center">
              <a onClick={(e)=>{e.preventDefault();goToPage('/')}} className="hover:text-color-550 text-gray-800 cursor-pointer">Home</a>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="h-5 w-auto text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </li>
            <li className="inline-flex items-center text-gray-400">
              <span>Portfolio</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
export default TopSection
