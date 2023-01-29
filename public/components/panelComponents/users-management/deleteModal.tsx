import React from "react";
import { handleErrors,handleErrorsInSuccessMode } from "../../../apiFunctions";
import { useRouter } from "next/router";
import { jwtChecker } from "../../usefullFunctions";
import { deleteComment } from "../../../apiFunctions";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const DeleteModal = ({
  deletedId,
  changeDeletedId,
  showDeleteModal,
  changeDeleteModalVisibility,
}: {
  deletedId:number,
  changeDeletedId:(...args: any[]) => void,
  showDeleteModal:any,
  changeDeleteModalVisibility: (...args: any[]) => void;
}) => {
console.log(deletedId)
const router=useRouter();


const checkLogin=()=>{
  if(jwtChecker()=='404'){
    router.push('/loginExpired')
  }
}

const callAlertSuccess = (message: string) => {
  console.log(message);
  var htmlContent = "";

  console.log(htmlContent);
  // MySwal.fire('hello')
  MySwal.fire({
    title: <p>Success</p>,
    // icon:'error',
    imageUrl: "/assets/imgs/icons/success-alert-icon.svg",
    html: `
           
               
             
           
  <div
    class="bg-[#36CE89] flex justify-center text-white flex font-bold px-4 py-3 rounded relative"
    role="alert"
  >
    ${message}!
  </div>



`,
    confirmButtonText: "Ok",
    customClass: {
      confirmButton: "p-3 rounded bg-[#212329] text-white font-bold",
      icon: "icon-alert-login",
    },
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutDown",
    },

    buttonsStyling: false,
    imageHeight: 40,
    imageWidth: 40,
  });
};

// sweet alert
const MySwal = withReactContent(Swal)
const callAlertError = (message: string[]) => {
  console.log(message);
  var htmlContent = "";
  message.forEach((el: any) => {
    htmlContent += `<li>${el}</li>`;
  });
  console.log(htmlContent)
  // MySwal.fire('hello')
  MySwal.fire({
    title: <p>Error</p>,
    // icon:'error',
    imageUrl: "/assets/imgs/icons/warning-icon.svg",
    html: `<ul class='sweet-alert-html justify-center flex-wrap font-sans text-white bg-color-alert-3 message-shadow flex font-bold px-4 py-3 rounded relative'>${htmlContent}<ul>`,
    confirmButtonText: "Ok",
    customClass: {
      confirmButton: "p-3 rounded bg-[#212329] text-white font-bold",
      icon: "icon-alert-login",
    },
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutDown",
    },

    buttonsStyling: false,
    imageHeight: 40,
    imageWidth: 40,
  });
};

const callAlertLoading = (message: string) => {


 
  // MySwal.fire('hello')
  MySwal.fire({
    title: <p>{message}</p>,
    // icon:'error',
    imageUrl: "/assets/imgs/transparent-loader.gif",
   
    showConfirmButton:false,
    showCancelButton:false,
    timer:4000,
    customClass: {
      confirmButton: "p-3 rounded bg-[#212329] text-white font-bold",
      icon: "icon-alert-login",
    },
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutDown",
    },

    buttonsStyling: false,
    imageHeight: 40,
    imageWidth: 40,
  });
};

// const handleDelete=async(id:number)=>{
//   callAlertLoading('Please wait for operation to be completed')
//   try{
//     const response=await deleteComment(id);
//     console.log(response)
//     if(response.isSuccess===true){
//       await  router.replace('/panel/loading-operation-table')
//       router.replace('/panel/comments-management')
//       callAlertSuccess(response.message)
//     }
// else{
//    const errors=handleErrorsInSuccessMode(response)
//    callAlertError(errors)
// }

//   }
//   catch(er){
//     console.log(er)
//     const errors= handleErrors(er)
//     console.log(errors)
//     if(errors=="Request failed with status code 401")
//     {
//       localStorage.removeItem("jwt")
//       checkLogin();
//     }
//     else if(errors[0]==="success"){
//       await  router.replace('/panel/loading-operation-table')
//       router.replace('/panel/comments-management')
//       callAlertSuccess(errors[1])
//     }
//     else{
//       callAlertError(errors)
//     }
    
//   }
   
// }

  return (
    <>
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className="delete-modal h-full flex items-center justify-center fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className={`animate__animated ${showDeleteModal ? 'opacity-1 top-0 visible':'opacity-0 hidden'} animated animate__fadeInDown relative flex items-center h-full max-w-2xl md:h-auto`}>
          <div className="relative text-sm bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              <i className="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-orange-600 bg-x-25 bg-clip-text" aria-hidden="true"></i>
                Delete this item
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
                onClick={() => changeDeleteModalVisibility(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="flex items-center p-6 px-10 space-y-6">
              Are you sure you want delete this item?
            </div>

            <div className="flex gap-4 justify-center  items-center p-3 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button className="text-color-alert-2 bg-white hover:bg-gray-100 focus:ring-4 
               rounded-lg border-2 border-gray-200 text-sm font-medium
                px-5 py-2.5 focus:z-10 dark:bg-gray-700 dark:text-gray-300
                 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                 onClick={() => {changeDeleteModalVisibility(false);
                  
                  // handleDelete(deletedId);
                
                } }
                 >
                Delete
              </button>
              <button
                data-modal-toggle="defaultModal"
                onClick={() => {changeDeleteModalVisibility(false);changeDeletedId(0)}}
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border-2 border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeleteModal;
