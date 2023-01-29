import React,{useEffect,useState} from 'react'
import { useRouter } from 'next/router'
import ProgressLoading from '../progressLoading';
 const TopSection = ({questionRef,searchText,setSearchText,setFinalSearchText,searchQuery,changeSearchText}:{questionRef:any,searchText:string,setSearchText:any,setFinalSearchText:any,searchQuery:string|string[]|undefined,changeSearchText:(...args:any[])=>void}) => {
  const router=useRouter();
console.log(searchQuery)

const[loading,setLoading]=useState(false)

useEffect(()=>{
  if(searchQuery!=undefined){
    setSearchText(searchQuery)
    setFinalSearchText(searchQuery)
  }
  else{
    setSearchText('')
    setFinalSearchText(' ')
  }
  
 
},[searchQuery])

 //when you click search button
const handleSearch=async()=>{
  setLoading(true)
  if(searchText!=undefined && searchText.length>0){
    setFinalSearchText(searchText);
 
  await goToPage();
  questionRef.current.scrollIntoView({ behavior: 'smooth',block:'end'})
  }
  else{
    router.push('/faqs')
  } 
  setLoading(false)

  
        }

 
   const goToPage=async()=>{
 
  
   await router.push({pathname:'/faqs',query:{search:searchText}})
  
  
  
   }
  return (
         
    <>
    {loading && <ProgressLoading/>}
    
    <div className="container">
     <img
            className="mx-auto sm:max-w-sm mb-10 wow animate__animated animate__fadeIn"
            data-wow-delay=".1s"
            src="assets/imgs/illustrations/eating.svg"
            alt=""
          />
          <div className="flex w-full justify-center">
          <form

            className="inline-flex w-full relative md:w-1/2 search-box-shadow  max-w-3xl mx-auto mb-16 wow animate__animated animate__fadeIn"
            data-wow-delay=".3s"
          >
           
            <input onKeyDown={(e)=>{
              if(e.key==='enter'){
                  handleSearch();
            }}}
              className="w-full p-5 flex  text-xs  placeholder-colorGray-800 font-bold font-heading  focus:border-gray-500 focus:outline-none rounded-l"
              placeholder="Search, find any question you want to ask"  value={searchText} onChange={(e)=>changeSearchText(e)}
            />
            <button  onClick={async(e)=>{e.preventDefault();handleSearch();}} className="pr-4 rounded-r text-color-550 absolute right-0 top-4">
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            
          </form>
          </div>
         
          </div>
         
    </>
  )
}
export default TopSection