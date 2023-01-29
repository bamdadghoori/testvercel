import React, { useState, useEffect, useRef, useContext } from "react";
import Select from "react-select";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";


import { handleErrors,handleErrorsInSuccessMode } from "../../apiFunctions";



import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ForgotPasswordForm = () => {



  const router = useRouter();


  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmNewPassword, setShowconfirmNewPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  const changeShowPassword=()=>{
    setShowPassword(!showPassword)
  }

  const changeShowconfirmNewPassword=()=>{
    setShowconfirmNewPassword(!showconfirmNewPassword)
  }

  const changeShowCurrentPassword=()=>{
    setShowCurrentPassword(!showCurrentPassword)
  }



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


  const [selectedTag, setSelectedTag]: any = useState(null);

  const [enableSubmitForm, setEnableSubmitForm] = useState(true);

  //refrence to error or success message in page

  const messageRef = useRef(null);

  //refrence to form
  var formRef: any = useRef(null);

  //image rendering
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL]: any = useState(null);

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const changeSubmitFormAbility = (state: boolean) => {
    setEnableSubmitForm(state);
  };

  const initialData = {
   
   Email:'',
   
   
  };

  //data that should be sent to Api
  const [formData, setFormData] = useState(initialData);



  

  //to set inputs controlled
  const changeInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();

    var name = e.target.name;
    var value: string | number = e.target.value;
  

    setFormData({ ...formData, [name]: value });
  };

  //to set select boxes controlled


 




  var submited = false;



  const validate = async () => {


    //validate if password equals to confirm password
  
    // else{
    //     try {
    //         const { confirmNewPassword, ...rest } = formData;
    //         console.log(rest);
    //         const response = await addBlog(rest);
      
    //         submited = true;
    //         console.log(response);
    //         setSuccess(true);
          
      
    //         console.log('line 265',response)
      
    //         if(response.isSuccess===true){
    //           await router.replace({
    //             pathname: "/panel/loading-operation-table",
    //             query: { message: response.message },
    //           });
        
    //           setTimeout(async () => {
    //             await router.push("/panel/add-blog");
    //           }, 5000);
    //           setSuccess(true);
    //           setSuccessMessage(response.message);
    //           return true
    //         }
    //        else{
    //         const errors= handleErrorsInSuccessMode(response)
            
    //         callAlertError(errors)
    //         return false
    //        }
            
    //       } 
    //       catch (er: any) {
    //         console.log('line 269',er);
            
    //           const errorMessages = handleErrors(er);
    //           if (errorMessages == "Request failed with status code 401") {
    //             localStorage.removeItem("jwt");
    //             checkLogin();
    //             return false
    //           }
         
    //           else if(errorMessages[0]==="success"){
    //             await router.replace({
    //               pathname: "/panel/loading-operation-table",
    //               query: { message: errorMessages[1]},
    //             });
          
    //             setTimeout(async () => {
    //               await router.push("/panel/add-blog");
    //             }, 5000);
    //             setSuccess(true);
    //             setSuccessMessage(errorMessages[1]);
    //             return true
    //           }
    //           else{
    //             callAlertError(errorMessages);
    //             return false;
    //           }
             
            
    //       }
    // }
  
  };
  //@ts-ignore
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

    
  //   changeSubmitFormAbility(false);

  //   const isValid = await validate();
  //   if (isValid) {
  //     // setErrors([]);
  //   }
  //   if (messageRef.current != null) {
  //     //@ts-ignore
  //     messageRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //       inline: "nearest",
  //     });
  //   }
  //   changeSubmitFormAbility(true);

  //   if (messageRef.current != null) {
  //     //@ts-ignore
  //     messageRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //       inline: "nearest",
  //     });
  //   }
  // };


  useEffect(() => {
    setFormData(initialData);
  }, []);

  return (
    <>
      {console.log(formData)}

      <div className="container mb-32 mt-24">
        <div className="flex flex-wrap -mx-3 ">
          <div className="w-fit max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 ">
            <div className="relative z-0 card flex flex-col min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
              <div
                ref={messageRef}
                className="p-6 mb-0 text-center font-bold border-b-0 rounded-t-2xl"
              >
                <h5>We send new code to your mail</h5>
              </div>
            
              <div className="flex-auto p-6">
                <form
               
                  ref={(el) => (formRef = el)}
                  onSubmit={async (e) => {
                    changeSubmitFormAbility(false);
                    // await handleSubmit(e);
                    changeSubmitFormAbility(true);
                  }}
                  role="form text-left"
                  encType="multipart/form-data"
                >
                <div className="md:flex md:justify-around  w-full flex-wrap">
                <div className="flex relative md:justify-center w-full mb-4  flex-wrap">
                    
                      <div className="flex relative justify-center w-full">
                      <input
                        type="email"
                        className="md:w-full placeholder:text-gray-500 text-sm  leading-5.6
                        
                        ease block w-full appearance-none    bg-white bg-clip-padding py-2 px-3 font-normal  transition-all  "
                        placeholder="Email"
                        aria-label="Email"
                        name="Email"
                        value={formData.Email}
                        onChange={(e) => changeInput(e)}
                        required
                      />
                    
                      </div>
                    </div>

              
                </div>

               
                <div
                  className="flex relative justify-between items-center wow animate__animatedanimated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
            
                 

                
                     
                  <button
                    className={`${
                      enableSubmitForm
                        ? "cursor-pointer"
                        : "cursor-not-allowed"
                    } duration-500 py-4 px-4 text-sm  text-white font-semibold leading-none custom-button`}
                    type="submit"
                    value="Submit"
                  
                  >
                    Send
                  </button>
                  {enableSubmitForm == false && (
                      <div className="flex absolute right-0 justify-center items-center">
                        <img
                          className="loading-button-add-blog"
                          src="/assets/imgs/loading-button-public.gif"
                          alt="loading"
                        />
                      </div>
                    )}
                  
                </div>


                
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPasswordForm;
