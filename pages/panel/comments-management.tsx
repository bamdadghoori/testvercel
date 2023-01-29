import React,{useEffect,useState} from 'react'
import { getComments, handleErrors } from '../../public/apiFunctions'
import Table from '../../public/components/panelComponents/comments-management/table'
import DeleteModal from '../../public/components/panelComponents/comments-management/deleteModal'
import ProgressLoading from '../../public/components/progressLoading'
import LoadingToTable from './loading-to-table'
import { jwtChecker } from '../../public/components/usefullFunctions'
import { useRouter } from 'next/router'
import ErrorInTable from '../../public/components/panelComponents/errorInTable'
 const CommentsManagement = () => {


  const router=useRouter()
    const [comments,setComments]=useState([])
    const [loading, setLoading] = useState(false);
    const[apiLoading,setApiLoading]=useState(false)
    const [errors,setErrors]=useState([])


    const checkLogin=()=>{
      if(jwtChecker()=='404'){
        router.push('/loginExpired')
      }
    }

    const initialAllComments=async()=>{
            
        setApiLoading(true)
        try{
         const response=   await getComments();
           console.log(response)
           setComments(response)
           
        }
        catch(er:any){
            console.log(er)
           
              const errorMessages = handleErrors(er);
              console.log(errorMessages)
                   if(errorMessages=="Request failed with status code 401"){
                    localStorage.removeItem('jwt')
                    checkLogin();
                   
                    
             
            }
            setErrors(errorMessages)
            
            
        }
        setApiLoading(false)
    }
    useEffect(()=>{
 initialAllComments()
    },[])

    //decide which comment should be deleted

  const [deletedId, setDeletedId] = useState(0);

  const changeDeletedId = (id: number) => {
    setDeletedId(id);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const changeDeleteModalVisibility = (state: boolean) => {
    setShowDeleteModal(state);
  };
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

      {apiLoading ? (
        <LoadingToTable/>
      ):(errors.length>0 ? (
        <ErrorInTable errors={errors}/>
      ):(
        <Table comments={comments}
        changeDeletedId={changeDeletedId}
        changeDeleteModalVisibility={changeDeleteModalVisibility}
        />
      )

      )}
   
    </>
  )
}
export default CommentsManagement
