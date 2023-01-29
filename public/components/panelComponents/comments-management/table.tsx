import React, { useState } from "react";
import { useRouter } from "next/router";
import ProgressLoading from "../../progressLoadingPanel";
import { deleteTimeFromDate } from "../../usefullFunctions";
import { sortOptionsForComments } from "../../select2-options";
import { sortArrayOfObject } from "../../usefullFunctions";
import Select from "react-select";
import PaginatedTable from "./paginatedTable";
const Table = ({
  comments,
  changeDeletedId,
  changeDeleteModalVisibility,
}: {
  comments: any[];
  changeDeletedId: (...args: any[]) => void;
  changeDeleteModalVisibility: (...args: any[]) => void;
}) => {
  const [loading, setLoading] = useState(false);
const [sortedcomments,setSortedComments]=useState(comments)
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
  const sortedArray=  sortArrayOfObject(comments,e.field,isDescending)
  setSortedComments([...sortedArray])
  setActiveSortableTh(e.field)
  setSortOrder(!isDescending)
   }

  return (
    <>
      {console.log(comments)}
      <PaginatedTable comments={comments} wFull={false} changeSortOption={changeSortOption}
       changeDeleteModalVisibility={changeDeleteModalVisibility}
      changeDeletedId={changeDeletedId}
      sortOrder={sortOrder}
      activeSortableTh={activeSortableTh}
      />
    </>
  );
};
export default Table;
