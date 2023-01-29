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

const AddUserForm = () => {



  const router = useRouter();


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const changeShowPassword=()=>{
    setShowPassword(!showPassword)
  }

  const changeShowConfirmPassword=()=>{
    setShowConfirmPassword(!showConfirmPassword)
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
   Email:'',
   Name:'',
   LastName:'',
   Password:'',
   confirmPassword:'',
   Phone:'',
   HomePhone:'',
   ProfilePicUrl:'',
   UserDescription:'',
  };

  //data that should be sent to Api
  const [formData, setFormData] = useState(initialData);

  //@ts-ignore
  const changeHandler = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, ProfilePicUrl: e.target.files[0] });
    setFile(file);
  };

  const { confirmPassword, ...rest } = formData;

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
  //@ts-ignore
  const changeSelect = (e, name: string) => {
    console.log(e.value);
    var value: string | boolean = e.value;
    //converting string to boolean
    if (e.value === "true") {
      value = true;
    } else {
      value = false;
    }
    setFormData({ ...formData, [name]: value });
  };

 



  const loadFile = () => {
    let fileReader: any,
      isCancel = false;
    console.log(fileReader);
    if (file) {
      fileReader = new FileReader();

      //@ts-ignore
      fileReader.onload = (e) => {
        const result = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.onloadend = () => {
        console.log("Encoded Base 64 File String:", fileReader.result);

        /******************* for Binary ***********************/
        // const binary = binEncode(fileReader.result);
        // console.log(binary);
      };

      const url = fileReader.readAsDataURL(file);
    }

    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  };
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
    if(formData.Password!=formData.confirmPassword){
        callAlertError(['Password and Confirm password are not match!'])
      return false;
    }
    else{
        try {
            const { confirmPassword, ...rest } = formData;
            console.log(rest);
            const response = await addBlog(rest);
      
            submited = true;
            console.log(response);
            setSuccess(true);
          
      
            console.log('line 265',response)
      
            if(response.isSuccess===true){
              await router.replace({
                pathname: "/panel/loading-operation-table",
                query: { message: response.message },
              });
        
              setTimeout(async () => {
                await router.push("/panel/add-blog");
              }, 5000);
              setSuccess(true);
              setSuccessMessage(response.message);
              return true
            }
           else{
            const errors= handleErrorsInSuccessMode(response)
            
            callAlertError(errors)
            return false
           }
            
          } 
          catch (er: any) {
            console.log('line 269',er);
            
              const errorMessages = handleErrors(er);
              if (errorMessages == "Request failed with status code 401") {
                localStorage.removeItem("jwt");
                checkLogin();
                return false
              }
         
              else if(errorMessages[0]==="success"){
                await router.replace({
                  pathname: "/panel/loading-operation-table",
                  query: { message: errorMessages[1]},
                });
          
                setTimeout(async () => {
                  await router.push("/panel/add-blog");
                }, 5000);
                setSuccess(true);
                setSuccessMessage(errorMessages[1]);
                return true
              }
              else{
                callAlertError(errorMessages);
                return false;
              }
             
            
          }
    }
  
  };
  //@ts-ignore
//   const handleSubmit = async (e) => {
//     e.preventDefault();

    
//     changeSubmitFormAbility(false);

//     const isValid = await validate();
//     if (isValid) {
//       // setErrors([]);
//     }
//     if (messageRef.current != null) {
//       //@ts-ignore
//       messageRef.current.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//         inline: "nearest",
//       });
//     }
//     changeSubmitFormAbility(true);

//     if (messageRef.current != null) {
//       //@ts-ignore
//       messageRef.current.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//         inline: "nearest",
//       });
//     }
//   };

  useEffect(() => {
    loadFile();
  }, [file]);
  useEffect(() => {
    setFormData(initialData);
  }, []);

  return (
    <>
      {console.log(formData)}

      <div className="container">
        <div className="flex flex-wrap -mx-3 ">
          <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-8/12 xl:w-8/12">
            <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
              <div
                ref={messageRef}
                className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl"
              >
                <h5>Add User</h5>
              </div>
              {errors.length > 0 && (
                <div className="flex flex-wrap rounded  justify-center items-center relative bottom-4">
                  {errors.map((el: any) => {
                    return (
                      <>
                        <div
                          className="text-[#fff] bg-color-alert-3 flex font-bold px-4 py-3 rounded relative"
                          role="alert"
                        >
                          {el}!!
                        </div>
                      </>
                    );
                  })}
                </div>
              )}
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
                  <div className="flex  md:justify-center w-full mb-4  flex-wrap">
                      <div className="flex w-full  md:justify-center">
                        <label className="relative left-10 md:left-0">Email</label>
                      </div>
                      <input
                        type="email"
                        className="md:w-1/2 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Email"
                        aria-label="Email"
                        name="Email"
                        value={formData.Email}
                        onChange={(e) => changeInput(e)}
                        required
                      />
                    </div>
                    <div className="flex  md:justify-around w-full mb-4 lg:w-1/2 flex-wrap">
                      <div className="flex w-full ">
                        <label className="relative left-10">First name</label>
                      </div>
                      <input
                        type="text"
                        className="md:w-4/5 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Name"
                        aria-label="Name"
                        name="Name"
                        value={formData.Name}
                        onChange={(e) => changeInput(e)}
                        required
                      />
                    </div>
                  
                  
                    <div className="flex  md:justify-around w-full mb-4 lg:w-1/2 flex-wrap">
                      <div className="flex w-full ">
                        <label className="relative left-10">
                          Last name
                        </label>
                      </div>
                      <input
                        type="text"
                        className="md:w-4/5 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="LastName"
                        aria-label="LastName"
                        name="LastName"
                        value={formData.LastName}
                        onChange={(e) => changeInput(e)}
                        required
                      />
                    </div>

                   

                    <div className="flex relative  md:justify-around w-full mb-4 lg:w-1/2 flex-wrap">
                      <div className="flex w-full ">
                        <label className="relative left-10">Password</label>
                      </div>
                      <input
                        type={`${showPassword ? "text" : "password"}`}
                        className="md:w-4/5 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="password"
                        aria-label="password"
                        name="Password"
                        value={formData.Password}
                        onChange={(e) => changeInput(e)}
                        required
                      />
                       
                       {showPassword ? (
                     <img onClick={changeShowPassword} className="absolute top-50 right-10 h-6 w-6 my-auto text-colorGray-300"  src="/assets/imgs/icons/opened-eye.svg"/>
                      ) : (
                        
                        <img   onClick={changeShowPassword} className="absolute top-50 right-10  h-6 w-6 my-auto " src="/assets/imgs/icons/eye-closed-svgrepo-com.svg"/>
                      )}
                    </div>

                    <div className="flex relative md:justify-around w-full mb-4 lg:w-1/2 flex-wrap">
                      <div className="flex w-full ">
                        <label className="relative left-10">Confirm password</label>
                      </div>
                      <input
                        type={`${showConfirmPassword ? "text" : "password"}`}
                        className="md:w-4/5 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Confirm password"
                        aria-label="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={(e) => changeInput(e)}
                        required
                      />
                         {showConfirmPassword ? (
                     <img onClick={changeShowConfirmPassword} className="absolute top-50 right-10 h-6 w-6 my-auto text-colorGray-300"  src="/assets/imgs/icons/opened-eye.svg"/>
                      ) : (
                        
                        <img   onClick={changeShowConfirmPassword} className="absolute top-50 right-10  h-6 w-6 my-auto " src="/assets/imgs/icons/eye-closed-svgrepo-com.svg"/>
                      )}
                    </div>
                    

                    <div className="flex  md:justify-around w-full mb-4 lg:w-1/2 flex-wrap">
                      <div className="flex w-full ">
                        <label className="relative left-10">Phone</label>
                      </div>
                      <input
                        type="text"
                        className="md:w-4/5 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Phone"
                        aria-label="Phone"
                        name="Phone"
                        value={formData.Phone}
                        onChange={(e) => changeInput(e)}
                        required
                      />
                    </div>

                    <div className="flex  md:justify-around w-full mb-4 lg:w-1/2 flex-wrap">
                      <div className="flex w-full ">
                        <label className="relative left-10">Home Phone</label>
                      </div>
                      <input
                        type="text"
                        className="md:w-4/5 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Home Phone"
                        aria-label="HomePhone"
                        name="HomePhone"
                        value={formData.HomePhone}
                        onChange={(e) => changeInput(e)}
                        required
                      />
                    </div>

                 

                    <div className="w-full mb-4 md:justify-around  w-full flex-wrap">
                    <label className="flex justify-center mt-4 ">
                      Profile picture
                    </label>

                    <div className="flex items-align  md:justify-center w-full mb-4 lg:w-full">
                      <input
                        type="file"
                        className="pt-2 md:w-4/5 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        onChange={changeHandler}
                      />
                    </div>
                  </div>


                  <div className="flex justify-center">
                    {fileDataURL && (
                      <img
                        className="img-previewer"
                        src={fileDataURL.result}
                        alt="preview"
                      />
                    )}
                  </div>
                  <div className="w-full mb-4 flex justify-center flex-wrap">
                      <div className="flex w-full lg:justify-center flex-wrap">
                        <label className="lg:left-0 left-10 relative justify-center lg:left-0 left-10">
                          User description
                        </label>
                      </div>
                      <textarea
                        className="md:w-4/5  placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="User description"
                        name="UserDescription"
                        id="userDescription"
                        cols={30}
                        rows={3}
                        onChange={(e) => changeInput(e)}
                        value={formData.UserDescription}
                      />
                    </div>







                   

                    {/* <div className="w-full gap-6 flex-wrap mt-2 flex justify-center">
                      <div className="flex items-center mb-4">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          onChange={(e) => hanldeCheckBox(e, "IsVip")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-colorGray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="ml-2 text-sm font-medium ">
                          Is vip
                        </label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          onChange={(e) => hanldeCheckBox(e, "IsArchived")}
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-colorGray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="ml-2 text-sm font-medium ">
                          Is archived
                        </label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          onChange={(e) => hanldeCheckBox(e, "IsNoFollow")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-colorGray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="ml-2 text-sm font-medium ">
                          Is no follow
                        </label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          onChange={(e) => hanldeCheckBox(e, "IsNoIndex")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-colorGray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="ml-2 text-sm font-medium ">
                          Is no index
                        </label>
                      </div>
                    </div> */}
                  
                 
                   
                  </div>

               
                  

                
                
                  <div className="text-center">
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

                    <input
                      type="submit"
                      className={`${
                        enableSubmitForm
                          ? "cursor-pointer"
                          : "cursor-not-allowed"
                      } inline-block w-full px-5 py-2.5 mt-6 mb-2 font-bold text-center text-white align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:-translate-y-px hover:shadow-xs leading-normal text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 bg-gradient-to-tl from-zinc-800 to-zinc-700 hover:border-slate-700 hover:bg-slate-700 hover:text-white`}
                      disabled={!enableSubmitForm}
                      value=" Add User"
                    />
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
export default AddUserForm;
