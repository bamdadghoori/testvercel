import React, { useState } from "react";
import { useRouter } from "next/router";
import ProgressLoading from "../../progressLoading";
import { sortOptionsForContactMessages,thforContactMessages } from "../../select2-options";
import { deleteTimeFromDate } from "../../usefullFunctions";
import Select from "react-select";
import PaginationButtons from "../../paginations/paginationButtons";
const PaginatedTable = ({
  messages,
  activeSortableTh,
  sortOrder,
  changeSortOption,
}: {
  messages: any[];
  activeSortableTh:string,
  sortOrder:boolean
  changeSortOption: (...args: any[]) => void;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const goToPage = async (title: string) => {
    setLoading(true);
    await router.push(title);
  };

  //pagination variables
  let [currentPage, setCurrentPage] = useState(1);
  const totalCount = messages.length;
  const itemsPerPage = 4;
  const pagesNumber = Math.ceil(totalCount / itemsPerPage);
  const endOfItems = itemsPerPage * currentPage;
  const startOfItems = endOfItems - itemsPerPage;
  const currentItems = messages.slice(startOfItems, endOfItems);
  const paginationButtons = [];
  let i;
  for (i = 1; i <= pagesNumber; i++) {
    paginationButtons.push(i);
  }
  //end of pagination variables

  const changePage = (cp: any) => {
    console.log(cp);
    setCurrentPage(cp);
  };

  const goToPrevPage = (cp: any) => {
    cp == 1 ? setCurrentPage(pagesNumber) : setCurrentPage(cp - 1);
  };

  const goToNextPage = (cp: any) => {
    cp == pagesNumber ? setCurrentPage(1) : setCurrentPage(cp + 1);
  };

  const style = {
    control: (base:any) => ({
      ...base,
      border: '2px solid rgb(45 206 137/var(--tw-text-opacity))',
      boxShadow: ' 0 0 2px 0 #fff',
      '&:focus':{
        // border: '4px solid #344767',
        // This line disable the blue border
       
      },
      '&:hover':{
        border: '2px solid rgb(45 206 137/var(--tw-text-opacity))',
        // boxShadow: ' 0 5px 0 rgb(45 206 137/var(--tw-text-opacity));',
      }
   
    })
  };

  return (
    <>
    {console.log(sortOrder)}
      {loading && <ProgressLoading />}
     
      <div className="flex flex-wrap mb-with-footer  -mx-3 mb-64">
        <div className="flex-none w-full max-w-full px-3">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <h6 className="dark:text-white">Contact messages table</h6>
            </div>
            <div className="flex-auto px-0 pt-0 pb-2">
              <div className="p-0 overflow-x-auto">
                <table className="items-center fixed-table w-2/3 ml-2  border rounded mb-0 align-top dark:border-white/40 text-slate-500">
                <thead className="align-bottom">
                    <tr>
                    <th
                    onClick={()=>changeSortOption(thforContactMessages[0],sortOrder)}
                    className="px-6 py-3 relative cursor-pointer  font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        
                        <div className="w-fit relative">
                      <span>{thforContactMessages[0].label}</span>
                            {activeSortableTh===thforContactMessages[0].field && (
                              
                              <>
                               <div className="absolute top-0 left-full ml-1">
                              {sortOrder===true ? (
                             <img src="/assets/imgs/icons/triangle-up-icon.svg"/>
                              ):(
                                <img src="/assets/imgs/icons/triangle-down-icon.svg"/>
                              )}
                                   
                                   </div>
                              </>
                            ) }
                   </div>
                      </th>
                      <th 
                         onClick={()=>changeSortOption(thforContactMessages[1],sortOrder)}
                      className="px-6 py-3 relative cursor-pointer  font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                          
                          <div className="w-fit relative">
                      <span>{thforContactMessages[1].label}</span>
                      {activeSortableTh===thforContactMessages[1].field && (
                              <>
                              <div className="absolute top-0 left-full ml-1">
                                
                              {sortOrder===true ? (
                             <img src="/assets/imgs/icons/triangle-up-icon.svg"/>
                              ):(
                                <img src="/assets/imgs/icons/triangle-down-icon.svg"/>
                              )}
                              </div>
                                   
                       
                              </>
                            ) }
                            </div>
                      </th>
                      {thforContactMessages.slice(2).map((el:any,i:number)=>{
                        return   <th 
                        onClick={()=>changeSortOption(el,sortOrder)}
                        className="px-6  py-3  cursor-pointer font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      <div className="w-fit relative">
                      <span>{el.label}</span>
                      {activeSortableTh===el.field && (
                              <>
                                <div className="absolute flex top-0 left-full ml-1">
                             
                             <img src="/assets/imgs/icons/triangle-up-icon.svg"  className={`${sortOrder===true ?(' '):'rotate-180'}`}/>
                             
                                 </div>  
                       
                              </>
                            ) }
                     </div>
                      </th>
                      })}
                       <th colSpan={2} className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Operations
                      </th>
                    </tr>
                  
                  </thead>
                  <tbody>
                    {messages.length > 0 &&
                      currentItems.map((el: any) => {
                        return (
                          <tr key={el.id}>
                            <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <div className="flex px-2 py-1">
                                <div className="flex flex-col justify-center">
                                  <h6 className="mb-0 text-ellipsis-100 text-sm leading-normal dark:text-white">
                                    {el.email}
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                {el.subject}
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                {deleteTimeFromDate(el.createdTime)}
                              </span>
                            </td>
                            <td
                              colSpan={2}
                              className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent"
                            >
                              <div className="flex justify-around gap-4">
                                <a
                                  className="p-3 rounded bg-[#36CE89] text-white 
                                   text-xs font-semibold leading-tight dark:text-white dark:opacity-80  cursor-pointer"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    goToPage(
                                      `/panel/messages-details/?id=${el.id}`
                                    );
                                  }}
                                >
                                  {" "}
                                  Details{" "}
                                </a>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <PaginationButtons
          currentPage={currentPage}
          adminStyle={true}
          paginationButtons={paginationButtons}
          changePage={changePage}
          goToPrevPage={goToPrevPage}
          goToNextPage={goToNextPage}
        />
      </div>
    </>
  );
};
export default PaginatedTable;
