import React, { useState, useEffect } from "react";
import ProgressLoading from "../../progressLoadingPanel";
import { baseUrl } from "../../../apiFunctions";
import Select from "react-select";
import { sortOptionsForBlogs,thForBlogs } from "../../select2-options";
import { deleteTimeFromDate } from "../../usefullFunctions";
import { useRouter } from "next/router";
import PaginationButtons from "../../paginations/paginationButtons";

const PaginatedTable = ({
  blogs,
  wFull,
  changeSortOption,
  changeDeleteModalVisibility,
  changeDeletedId,
  activeSortableTh,
  sortOrder
}: {
  blogs: any[];
  wFull: boolean | undefined;
  changeSortOption: (...args: any[]) => void;
  changeDeleteModalVisibility: (...args: any[]) => void;
  changeDeletedId: (...args: any[]) => void;
  activeSortableTh:string;
  sortOrder:boolean
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const goToPage = async (title: string) => {
    setLoading(true);
    await router.push(title);
  };

  //pagination variables
  let [currentPage, setCurrentPage] = useState(1);
  const totalCount = blogs.length;
  const itemsPerPage = 4;
  const pagesNumber = Math.ceil(totalCount / itemsPerPage);
  const endOfItems = itemsPerPage * currentPage;
  const startOfItems = endOfItems - itemsPerPage;
  const currentItems = blogs.slice(startOfItems, endOfItems);
  const paginationButtons = [];
  let i;
  for (i = 1; i <= pagesNumber; i++) {
    paginationButtons.push(i);
  }
  //end of pagination variables


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

  useEffect(() => {
    console.log("x");
  }, []);

  return (
    <>
    {console.log(sortOrder)}
      {loading && <ProgressLoading />}
    

      <div
        className={`flex ${wFull == true ? "w-full" : " "} relative flex-wrap mb-64 -mx-3`}
      >
        <div className="flex-none w-full max-w-full px-3 ">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <h6 className="dark:text-white">Blogs table</h6>
            </div>
            <div className="flex-auto px-0 pt-0 pb-2">
              <div className="p-0 overflow-x-auto">
                <table className="items-center fixed-table w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                    <th
                    onClick={()=>changeSortOption(thForBlogs[0],sortOrder)}
                    className="px-6 py-3 relative cursor-pointer  font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        
                        <div className="w-fit relative">
                      <span>{thForBlogs[0].label}</span>
                            {activeSortableTh===thForBlogs[0].field && (
                              
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
                         onClick={()=>changeSortOption(thForBlogs[1],sortOrder)}
                      className="px-6 py-3 relative cursor-pointer  font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                          
                          <div className="w-fit relative">
                      <span>{thForBlogs[1].label}</span>
                      {activeSortableTh===thForBlogs[1].field && (
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
                      {thForBlogs.slice(2).map((el:any,i:number)=>{
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
                    {blogs.length > 0 &&
                      currentItems.map((el: any) => {
                        return (
                          <tr>
                            <td
                              key={el.blogPostID}
                              className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent"
                            >
                              <div className="flex px-2 py-1">
                                <div>
                                  <img
                                    src={`${baseUrl}${el.coverImageUrl}`}
                                    className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                    alt="user2"
                                  />
                                </div>
                                <div className="flex flex-col justify-center">
                                  <h6 className="text-ellipsis-blogs mb-0 text-sm leading-normal dark:text-white">
                                    {el.title}
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td className="p-2  align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <p className="mb-0
                              
                              
                              text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                                {el.authorName}
                              </p>
                            </td>
                            <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                {el.categoryName}
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                {deleteTimeFromDate(el.lastModifiedDate)==="1/1/1" ? 'Have not been edited':deleteTimeFromDate(el.lastModifiedDate)} 
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                {deleteTimeFromDate(el.creationDate)}
                              </span>
                            </td>
                            <td
                              colSpan={2}
                              className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent"
                            >
                              <div className="flex justify-around gap-4">
                                <a
                                  className="p-3 text-xs bg-[#FB6340] rounded font-semibold leading-tight dark:text-white dark:opacity-80 text-white  cursor-pointer"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    goToPage(
                                      `/panel/edit-blogs?id=${el.blogPostID}`
                                    );
                                  }}
                                >
                                  {" "}
                                  Edit{" "}
                                </a>
                                <a
                                  className="p-3 rounded bg-[#8b0000] text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-white  cursor-pointer"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    changeDeleteModalVisibility(true);
                                    changeDeletedId(el.blogPostID);
                                  }}
                                >
                                  {" "}
                                  Delete{" "}
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
