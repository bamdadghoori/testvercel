import React,{useEffect, useState} from 'react'

 const Tags = ({tags}:{tags:string[]}) => {
    
     console.log(tags)
const [tagsToShow,setTagsToShow]=useState(tags)



       const initalizeTags=()=>{

        //to see if the each tag  is in one array index or all of tags are values of first index
        if(tags.length==1){
          setTagsToShow(tags[0].split(",")) 
         console.log(tags)

        }
       
       }

    useEffect(()=>{
      initalizeTags()
    },[])
  return (
    
    <>
    {console.log(tagsToShow)}
    <div className='mt-4'>
      <ul className='flex flex-wrap gap-4'>
        {tagsToShow.map((el:any,i)=>{
            return <li key={i} className='p-2 bg-[#ffffff] opacity-7 rounded cursor-pointer'><a className='text-[#272E35] text-sm font-bold'>{el}</a></li>
        })}
         
      </ul>
    </div>
    </>
  )
}
export default Tags
