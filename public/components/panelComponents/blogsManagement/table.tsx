import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteTimeFromDate } from "../../usefullFunctions";
import ProgressLoading from "../../progressLoadingPanel";
import { baseUrl } from "../../../apiFunctions";
import Select from "react-select";
import { sortOptionsForBlogs } from "../../select2-options";
import { sortArrayOfObject } from "../../usefullFunctions";
import PaginatedTable from "./paginatedTable";
import PaginationButtons from "../../paginations/paginationButtons";
const Table = ({
  blogs,
  changeDeleteModalVisibility,
  changeDeletedId,
  wFull
}: {
  blogs:any,
  changeDeleteModalVisibility: (...args: any[]) => void,
  changeDeletedId:(...args: any[]) => void,
  wFull?:boolean

}) => {
  const [loading, setLoading] = useState(false);
console.log(blogs)
 var mappedBlogs= blogs.map((el:any)=>{
  return {...el,lastModifiedDateWothoutHour:deleteTimeFromDate(el.lastModifiedDate) }
 })

const[sortedBlogs,setSortedBlogs]=useState(blogs)
  const router = useRouter();

  const goToPage = async (title: string) => {
    setLoading(true);
    await router.push(title);
  };

    const [activeSortableTh,setActiveSortableTh]=useState(" ")

    //true means descending and false means ascending
    const [sortOrder,setSortOrder]=useState(false)


     //@ts-ignore
    const changeSortOption=(e,isDescending)=>{
      console.log(e)
   const sortedArray=  sortArrayOfObject(blogs,e.field,isDescending)
   setSortedBlogs([...sortedArray])
   setActiveSortableTh(e.field)
   setSortOrder(!isDescending)

    }




useEffect(()=>{
  
  // sortArrayOfObject(blogs,'lastModifiedDate',false)
},[])

  return (
    <>
   <PaginatedTable blogs={sortedBlogs} wFull={wFull}  
   changeDeleteModalVisibility={changeDeleteModalVisibility}
   changeDeletedId={changeDeletedId}
   changeSortOption={changeSortOption}
     activeSortableTh={activeSortableTh}
     sortOrder={sortOrder}
   />
    </>
  );
};
export default Table;
