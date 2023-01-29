import React, { useState, useEffect, useRef, useContext } from "react";
import Select from "react-select";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { UserContext } from "../userContext";
import { parseJwt } from "../../usefullFunctions";
import { handleErrors, handleErrorsInSuccessMode } from "../../../apiFunctions";
import { jwtChecker } from "../../usefullFunctions";

import { addBlog } from "../../../apiFunctions";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ChangePasswordForm = () => {



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


  const getUserID = () => {
    if (typeof window !== "undefined") {
      if (
        localStorage.getItem("jwt") != null &&
        localStorage.getItem("jwt") != undefined
      ) {
        var jwt = localStorage.getItem("jwt");
        const decodedJwt = parseJwt(jwt);
        console.log(decodedJwt);
        const userID = Number(decodedJwt.UserId);
        return userID;
      }
    }
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

  const checkLogin = () => {
    if (jwtChecker() == "404") {
      router.push("/loginExpired");
    }
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
   
   NewPassword:'',
   confirmNewPassword:'',
   currentPassword:'',
   
  };

  //data that should be sent to Api
  const [formData, setFormData] = useState(initialData);



  const { confirmNewPassword, ...rest } = formData;

  //to set inputs controlled
  const changeInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();

    var name = e.target.name;
    var value: string | number = e.target.value;
    if (name === "CategoryId" || name == "UserID") {
      value = Number(value);
    }

    setFormData({ ...formData, [name]: value });
  };

  //to set select boxes controlled


 




  var submited = false;

  const hanldeCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    console.log(e.target.checked);
    setFormData({ ...formData, [value]: e.target.checked });
  };

  const validate = async () => {


    //validate if password equals to confirm password
    if(formData.NewPassword!=formData.confirmNewPassword){
        callAlertError(['New Password and Confirm new password are not match!'])
      return false;
    }
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    changeSubmitFormAbility(false);

    const isValid = await validate();
    if (isValid) {
      // setErrors([]);
    }
    if (messageRef.current != null) {
      //@ts-ignore
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    changeSubmitFormAbility(true);

    if (messageRef.current != null) {
      //@ts-ignore
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

 
  useEffect(() => {
    setFormData(initialData);
  }, []);

  return (
    <>
      {console.log(formData)}

      <div className="container mb-64">
        <div className="flex flex-wrap -mx-3 ">
          <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-8/12 xl:w-8/12">
            <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
              <div
                ref={messageRef}
                className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl"
              >
                <h5>Change Password</h5>
              </div>
            
              <div className="flex-auto p-6">
                <form
                  ref={(el) => (formRef = el)}
                  onSubmit={async (e) => {
                    changeSubmitFormAbility(false);
                    await handleSubmit(e);
                    changeSubmitFormAbility(true);
                  }}
                  role="form text-left"
                  encType="multipart/form-data"
                >
                <div className="md:flex md:justify-around  w-full flex-wrap">
                <div className="flex relative md:justify-center w-full mb-4  flex-wrap">
                      <div className="flex w-full justify-center flex-wrap">
                        <label className="relative">Current password</label>
                      </div>
                      <div className="flex relative justify-center w-full md:w-1/2">
                      <input
                        type={`${showCurrentPassword ? "text" : "password"}`}
                        className="md:w-full placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Current password"
                        aria-label="currentPassword"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={(e) => changeInput(e)}
                        required
                      />
                         {showCurrentPassword ? (
                     <img onClick={changeShowCurrentPassword} className="absolute top-2 right-2 lg:right-6 h-6 w-6 my-auto text-colorGray-300"  src="/assets/imgs/icons/opened-eye.svg"/>
                      ) : (
                        
                        <img   onClick={changeShowCurrentPassword} className="absolute top-2 right-2 lg:right-6 h-6 w-6 my-auto " src="/assets/imgs/icons/eye-closed-svgrepo-com.svg"/>
                      )}
                      </div>
                    </div>

                <div className="flex relative  md:justify-center w-full  mb-4  flex-wrap">
                      <div className="flex w-full justify-center">
                        <label className="relative ">New password</label>
                      </div>
                      <div className="flex relative justify-center w-full md:w-1/2">
                      <input
                        type={`${showPassword ? "text" : "password"}`}
                        className=" placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="New Password"
                        aria-label="password"
                        name="NewPassword"
                        value={formData.NewPassword}
                        onChange={(e) => changeInput(e)}
                        required
                      />
                       
                       {showPassword ? (
                     <img onClick={changeShowPassword} className="absolute top-2 right-2 lg:right-6 h-6 w-6 my-auto"  src="/assets/imgs/icons/opened-eye.svg"/>
                      ) : (
                        
                        <img   onClick={changeShowPassword} className="absolute top-2 right-2 lg:right-6  h-6 w-6 my-auto " src="/assets/imgs/icons/eye-closed-svgrepo-com.svg"/>
                      )}
                      </div>
                    </div>
                       
                    <div className="flex relative md:justify-center w-full mb-4  flex-wrap">
                      <div className="flex w-full justify-center">
                        <label className="relative ">Confirm new password</label>
                      </div>
                      <div className="flex relative justify-center w-full md:w-1/2">
                      <input
                        type={`${showconfirmNewPassword ? "text" : "password"}`}
                        className=" placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Confirm new password"
                        aria-label="confirmNewPassword"
                        name="confirmNewPassword"
                        value={formData.confirmNewPassword}
                        onChange={(e) => changeInput(e)}
                        required
                      />
                         {showconfirmNewPassword ? (
                     <img onClick={changeShowconfirmNewPassword} className="absolute top-2 right-2 lg:right-6 h-6 w-6 my-auto"  src="/assets/imgs/icons/opened-eye.svg"/>
                      ) : (
                        
                        <img   onClick={changeShowconfirmNewPassword} className="absolute top-2 right-2 lg:right-6 h-6 w-6 my-auto" src="/assets/imgs/icons/eye-closed-svgrepo-com.svg"/>
                      )}
                      </div>
                    </div>
                </div>

               
                <div className="text-center">
                  

                    <input
                      type="submit"
                      className={`${
                        enableSubmitForm
                          ? "cursor-pointer"
                          : "cursor-not-allowed"
                      } inline-block w-full px-5 py-2.5 mt-6 mb-2 font-bold text-center text-white align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:-translate-y-px hover:shadow-xs leading-normal text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 bg-gradient-to-tl from-zinc-800 to-zinc-700 hover:border-slate-700 hover:bg-slate-700 hover:text-white`}
                      disabled={!enableSubmitForm}
                      value="Change Password"
                    />
                      <div
                      className={`${
                        enableSubmitForm == false ? "opacity-1" : "opacity-0"
                      } flex justify-center items-center`}
                    >
                      <img
                        className="loading-button-add-blog"
                        src="/assets/imgs/loading-black-button.gif"
                        alt="loading"
                      />
                    </div>
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
export default ChangePasswordForm;
