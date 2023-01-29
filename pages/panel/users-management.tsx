import React,{useState,useEffect} from 'react'
import Contact from '../contact'
import Table from '../../public/components/panelComponents/users-management/table'
import { getContactMessages, handleErrors } from '../../public/apiFunctions'
import LoadingToTable from './loading-to-table'
import LoadingForm from './loading-form'
import ErrorInTable from '../../public/components/panelComponents/errorInTable'
import { useRouter } from 'next/router'
import { jwtChecker } from '../../public/components/usefullFunctions'
import DeleteModal from '../../public/components/panelComponents/users-management/deleteModal'
const users=[{
  id:1,
  Email:'a@b.com',
  Name:'sohrab',
  LastName:'sohrabi',
  Phone:'09121234567'
},
{
  id:2,
  Email:'b@a.com',
  Name:'amir',
  LastName:'gerai',
  Phone:'09121234562'
},
{
  id:3,
  Email:'a@c.com',
  Name:'mehdi',
  LastName:'goodarzi',
  Phone:'09121244567'
},
{
  id:4,
  Email:'d@z.com',
  Name:'mamad',
  LastName:'nobari',
  Phone:'09174561234'
},
{
  id:5,
  Email:'w@w.com',
  Name:'mamad2',
  LastName:'nozari',
  Phone:'09174562234'
}
]

 const UsersManagement = () => {
    




//   const router=useRouter()
// const[users,setUsers]:any=useState([])
// const [apiLoading,setApiLoading]=useState(false)
// const [errors,setErrors]=useState([])
 
const [deletedId, setDeletedId] = useState(0);

  const changeDeletedId = (id: number) => {
    setDeletedId(id);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const changeDeleteModalVisibility = (state: boolean) => {
    setShowDeleteModal(state);
  };

// const checkLogin=()=>{
//   if(jwtChecker()=='404'){
//     router.push('/loginExpired')
//   }
// }

// const getUsersFromApi=async()=>{
//   setApiLoading(true)
//   try{
//     const response=await getUsers();
//     console.log(response)
//     setMessages(response)
//   }
//   catch(er){
//     const errors= handleErrors(er)
    
//     console.log(errors)
//     if(errors=="Request failed with status code 401"){
//       localStorage.removeItem('jwt')
//       checkLogin();
     
      

// }
// setErrors(errors)
//     setApiLoading(false)
//   }
// setApiLoading(false)
// }
//   useEffect(()=>{
//     getUsersFromApi();
//   },[])
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

   {/* {console.log(users)} */}
   {/* {apiLoading ? (
    <LoadingToTable/>
   ):(
    errors.length >0 ? (
      <ErrorInTable errors={errors}/>
    ):( */}
      <Table changeDeletedId={changeDeletedId} users={users}
      changeDeleteModalVisibility={changeDeleteModalVisibility}
      />
    {/* )

   ) } */}
   
   </>
  )
}
export default UsersManagement

export const getSingleUserTest=(id:number)=>{
return users.filter((el:any)=>el.id===id)[0]
}