import React, { useState, useEffect } from "react";
import ProjectTable from "../../public/components/panelComponents/blogsManagement/projectTable";
import Table from "../../public/components/panelComponents/blogsManagement/table";
import ProgressLoading from "../../public/components/progressLoadingPanel";
import { useRouter } from "next/router";
import DeleteModal from "../../public/components/panelComponents/blogsManagement/deleteModal";
import { getAllBlogList } from "../../public/apiFunctions";
import LoadingToTable from "./loading-to-table";
import { handleErrors } from "../../public/apiFunctions";
import ErrorInTable from "../../public/components/panelComponents/errorInTable";
import axios from "axios";
import { jwtChecker } from "../../public/components/usefullFunctions";
import PaginationButtons from "../../public/components/paginations/paginationButtons";
const BlogsManagement = () => {
  const [loading, setLoading] = useState(false);


const[apiLoading,setApiLoading]=useState(false)
const [errors,setErrors]=useState([])

  const [blogs, setBlogs] = useState([]);

  //decide which blog should be deleted

  const [deletedId, setDeletedId] = useState(0);

  const changeDeletedId = (id: number) => {
    setDeletedId(id);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const changeDeleteModalVisibility = (state: boolean) => {
    setShowDeleteModal(state);
  };

  const goTopage = async (title: string) => {
    setLoading(true);
    await router.push(title);
    setLoading(false);
  };

  const checkLogin=()=>{
    if(jwtChecker()=='404'){
      router.push('/loginExpired')
    }
  }


  const getBlogsFromApi = async () => {
    setApiLoading(true)
    try {
      const response = await getAllBlogList();
      setBlogs(response);
    } catch (er: any) {
      console.log(er)
      const errors=handleErrors(er)
      if(errors=="Request failed with status code 401"){
        localStorage.removeItem('jwt')
        checkLogin();
       
        
 
}
      setErrors(errors)
      setApiLoading(false)
      return er;
    }
    setApiLoading(false)
  };

  const getTest=async()=>{
    
  
    var config = {
      method: 'get',
      url: 'https://api.flamincode.com/api/v1/Blog/11',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  useEffect(() => {
    // getTest()
   
    getBlogsFromApi();
  }, []);

  const router = useRouter();

  return (
    <>

      {showDeleteModal && (
        <DeleteModal
          deletedId={deletedId}
          changeDeletedId={changeDeletedId}
          changeDeleteModalVisibility={changeDeleteModalVisibility}
          showDeleteModal={showDeleteModal}
        />
      )}

      {loading && <ProgressLoading />}
      {/* <div className="flex justify-end mb-12">
        <button
          className="text-sm font-bold rounded-lg bg-white px-8 py-2 text-state-500"
          onClick={(e) => {
            e.preventDefault();
            goTopage("/panel/add-blog");
          }}
        >
          Add blog
        </button>
      </div> */}
      {apiLoading==true ? (
       <LoadingToTable/>
      ):(errors.length>0 ?(
<ErrorInTable errors={errors}/>
      ):(
        <>
        <Table
        changeDeletedId={changeDeletedId}
        blogs={blogs}
        changeDeleteModalVisibility={changeDeleteModalVisibility}
      />
     
      </>
      )
    
      ) }
      
      {/* <ProjectTable /> */}
    </>
  );
};
export default BlogsManagement;
