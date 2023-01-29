import React, { useState,useRef } from "react";
import { useRouter } from "next/router";
import ProgressLoading from "../progressLoading";
import Items from "../paginations/items";
import PaginationButtons from "../paginations/paginationButtons";
const MainSection = ({
  blogs,
  categories,
}: {
  blogs: any[];
  categories: any[];
}) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

 
  const scrollRef=useRef(null)

       //pagination variables
       let [currentPage,setCurrentPage]=useState(1)
       const totalCount=blogs.length;
       const itemsPerPage=4;
       const pagesNumber=Math.ceil(totalCount/itemsPerPage)
       const endOfItems=itemsPerPage*currentPage
       const startOfItems=endOfItems-itemsPerPage
      const currentItems=blogs.slice(startOfItems,endOfItems);
       const paginationButtons=[]
       let i;
       for(i=1;i<=pagesNumber;i++){
        paginationButtons.push(i)
       }
       //end of pagination variables


  //link to specific blog
  const goToPage = async (id: number) => {
    setLoading(true);
    console.log(id);
    await router.push(`/blog/${id}`);
    setLoading(false);
  };

  const changePage=(cp:any)=>{
    setCurrentPage(cp)
    
    if(scrollRef.current!=null){
      //@ts-ignore
      scrollRef.current.scrollIntoView()
    }
   
  }


  const goToPrevPage=(cp:any)=>{
    cp==1 ? (setCurrentPage(pagesNumber)):(setCurrentPage(cp-1))
    if(scrollRef.current!=null){
      //@ts-ignore
      scrollRef.current.scrollIntoView()
    }
    
  }


  const goToNextPage=(cp:any)=>{
    cp==pagesNumber ? (setCurrentPage(1)):(setCurrentPage(cp+1))
    if(scrollRef.current!=null){
      //@ts-ignore
      scrollRef.current.scrollIntoView()
    }
  }

  

  return (
    <>
      {loading == true && <ProgressLoading />}

      <div className="pb-5 relative">
        <div ref={scrollRef} className="flex  min-h-96 flex-wrap -mx-3">
            {currentItems.length>0 &&    <Items blogs={currentItems}  goToPage={goToPage}/>}
     
        </div>
        <div className="text-center flex  justify-center">
          
        <PaginationButtons adminStyle={false} currentPage={currentPage} paginationButtons={paginationButtons} changePage={changePage} goToPrevPage={goToPrevPage} goToNextPage={goToNextPage}/>
        

        </div>
      </div>
   
    </>
  );
};
export default MainSection;
