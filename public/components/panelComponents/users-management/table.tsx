import React, { useState } from "react";
import { useRouter } from "next/router";
import ProgressLoading from "../../progressLoadingPanel";
import { deleteTimeFromDate } from "../../usefullFunctions";

import PaginatedTable from "./paginatedTable";
import Select from "react-select";
import { sortArrayOfObject } from "../../usefullFunctions";
const Table = ({users,
  changeDeleteModalVisibility,
  changeDeletedId,
}:{users:any[],
  changeDeleteModalVisibility:(...args:boolean[])=>void,
  changeDeletedId:(...args:number[])=>void
}) => {
  console.log(users)
  const [loading, setLoading] = useState(false);
const[sortedusers,setSortedusers]=useState(users)
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
      const sortedArray=  sortArrayOfObject(users,e.field,isDescending)
      setSortedusers([...sortedArray])
      setActiveSortableTh(e.field)
   setSortOrder(!isDescending)
   
       }

     
  return (
    <>
      {loading && <ProgressLoading />}
   <PaginatedTable  users={users} changeSortOption={changeSortOption}
    activeSortableTh={activeSortableTh}
    sortOrder={sortOrder}
    changeDeletedId={changeDeletedId}
    changeDeleteModalVisibility={changeDeleteModalVisibility}
   />
    </>
  );
};
export default Table;
