import React, { useState } from "react";
import { useRouter } from "next/router";
import ProgressLoading from "../../progressLoadingPanel";
import { deleteTimeFromDate } from "../../usefullFunctions";
import { sortOptionsForContactMessages } from "../../select2-options";
import PaginatedTable from "./paginatedTable";
import Select from "react-select";
import { sortArrayOfObject } from "../../usefullFunctions";
const Table = ({messages}:{messages:any[]}) => {
  console.log(messages)
  const [loading, setLoading] = useState(false);
const[sortedMessages,setSortedMessages]=useState(messages)
  const router = useRouter();

  const goToPage = async (title: string) => {
    setLoading(true);
    await router.push(title);
  };
  const [activeSortableTh,setActiveSortableTh]=useState(" ")

       //true means descending and false means ascending
       const [sortOrder,setSortOrder]=useState(false)
    
     const changeSortOption=(e:any,isDescending:boolean)=>{
      console.log(e,isDescending)
      //@ts-ignore
      const sortedArray=  sortArrayOfObject(messages,e.field,isDescending)
      setSortedMessages([...sortedArray])
      setActiveSortableTh(e.field)
   setSortOrder(!isDescending)
   
       }

     
  return (
    <>
      {loading && <ProgressLoading />}
   <PaginatedTable  messages={messages} changeSortOption={changeSortOption}
    activeSortableTh={activeSortableTh}
    sortOrder={sortOrder}
   />
    </>
  );
};
export default Table;
