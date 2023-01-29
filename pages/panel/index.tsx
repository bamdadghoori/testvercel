import React,{useState,useEffect,useCallback} from 'react'
import Navbar from '../../public/components/panelComponents/navbar'
import TestComponent from '../../public/components/panelComponents/testComponent'
import Cards from '../../public/components/panelComponents/index/cards'
import GetStarted from '../../public/components/panelComponents/index/getStarted'
import Table from '../../public/components/panelComponents/blogsManagement/table'
import Chart from '../../public/components/panelComponents/index/chart'
import SalesByCountries from '../../public/components/panelComponents/index/salesByCountries'
import DeleteModal from '../../public/components/panelComponents/blogsManagement/deleteModal'
import ProgressLoading from '../../public/components/progressLoading'
import Categories from '../../public/components/panelComponents/index/categories'
import { useRouter } from 'next/router'
import { getAllBlogList } from '../../public/apiFunctions'
import LoadingToTable from './loading-to-table'
import { handleErrors,handleErrorsInSuccessMode } from '../../public/apiFunctions'
import ErrorInTable from '../../public/components/panelComponents/errorInTable'

 const Index = () => {


const router=useRouter()
  const [deletedId, setDeletedId] = useState(0);
const[apiLoading,setApiLoading]=useState(false)

const [errors,setErrors]=useState([])
  const changeDeletedId = (id: number) => {
    setDeletedId(id);
  };


  const goTopage = async (title: string) => {
    setLoading(true);
    await router.push(title);
    setLoading(false);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const changeDeleteModalVisibility = (state: boolean) => {
    setShowDeleteModal(state);
  };

  const [blogs,setBlogs]=useState([])
  const getBlogsFromApi=async()=>{
    setApiLoading(true)
    try{
     var response=await getAllBlogList();
     console.log(response)

      setBlogs(response)
     
      
     
    }
    catch(er:any){
      const ers=handleErrors(er)
      setErrors(ers)
     
    }
    setApiLoading(false)
  }
  var jwt:string|null|undefined=null
   





  useEffect(()=>{
  getBlogsFromApi();
  },[])

  return (
    <>
    {console.log('error75',errors)}
       {showDeleteModal && (
        <DeleteModal
          deletedId={deletedId}
          changeDeletedId={changeDeletedId}
          changeDeleteModalVisibility={changeDeleteModalVisibility}
          showDeleteModal={showDeleteModal}
        />
      )}
       {loading && <ProgressLoading />}

   <Cards/>
   <div className="flex flex-wrap mt-6 -mx-3">
   {/* <Chart/>
   <GetStarted/> */}
   </div>
   
    {apiLoading ? (
      <LoadingToTable/>
    ):(errors.length>0 ? (
      <ErrorInTable errors={errors}/>

    ):(
      <div className="flex justify-center flex-wrap mt-6 -mx-3">
      <Table
      changeDeletedId={changeDeletedId}
      blogs={blogs}
      wFull={true}
      changeDeleteModalVisibility={changeDeleteModalVisibility}
     />
     </div>
    )

  
    )}
  
  {/* <SalesByCountries/> */}
  {/* <Categories/> */}

   
   
  {/* <TestComponent/> */}

    </>
  )
}
export default Index
