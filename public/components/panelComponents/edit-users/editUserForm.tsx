import React, { useState, useRef, useEffect } from "react";
import Select from "react-select";
import dynamic from "next/dynamic";
// import { edituser } from "../../../apiFunctions";
import { useRouter } from "next/router";
import { handleErrors, handleErrorsInSuccessMode } from "../../../apiFunctions";
import { jwtChecker } from "../../usefullFunctions";

import {
  tags,
  defaultTag,
  booleanOptions,
  defaultArchived,
  defaultNoIndex,
  defaultNofollow,
  capitalizeFirstLetter,
  defaultVip,
} from "../../select2-options";
import { baseUrl } from "../../../apiFunctions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const EditUserForm = ({ user }: { user: any }) => {
  const [selectedTag, setSelectedTag]: any = useState(null);

  const [errors, setErrors] = useState([]);

  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [enableSubmitForm, setEnableSubmitForm] = useState(true);

  const checkLogin = () => {
    if (jwtChecker() == "404") {
      router.push("/loginExpired");
    }
  };

  const changeSubmitFormAbility = (state: boolean) => {
    setEnableSubmitForm(state);
  };

  const handleCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    console.log(e.target.checked);
    console.log(value);
    // console.log(formData.isAccepted)
    setFormData({ ...formData, isAccepted: e.target.checked });
  };

  console.log(user);
  const initialData = { ...user,ProfilePicUrl:null };

  //controlled input state
  const [formData, setFormData] = useState(initialData);

  const prevImgRef = useRef(null);

  //refrence to error or success message in page

  const messageRef = useRef(null);

  //refrence to form
  var formRef: any = useRef(null);

  //make inputs controlled

  const changeInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    setFormData({ ...formData, [name]: e.target.value });
  };

  //image rendering
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL]: any = useState(null);

  const setCkEditorDataToFullText = (data: string) => {
    setFormData({ ...formData, FullText: data });
  };

  // sweet alert
  const MySwal = withReactContent(Swal);
  const callAlertError = (message: string[]) => {
    console.log(message);
    var htmlContent = "";
    message.forEach((el: any) => {
      htmlContent += `<li>${el}</li>`;
    });
    console.log(htmlContent);
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

  //@ts-ignore
  const changeHandler = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, ProfilePicUrl: e.target.files[0] });
    setFile(file);
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

  useEffect(() => {
   
    loadFile();
  }, [file]);
 

  const router = useRouter();
  // //@ts-ignore
  // const validate = async () => {
  //   try {
  //     const response = await edituser(formData);
  //     console.log(response);
  //     if (response.isSuccess === true) {
  //       callAlertSuccess(response.message);
  //       return true;
  //     } else {
  //       const errors = handleErrorsInSuccessMode(response);
  //       console.log("line 218", errors);
  //       callAlertError(errors);
  //       return false;
  //     }
  //   } catch (er: any) {
  //     console.log(er);

  //     const errorMessages:string[] = handleErrors(er);
  //     if (errorMessages[0] == "Request failed with status code 401") {
  //       localStorage.removeItem("jwt");
  //       checkLogin();

  //       // setErrors(errorMessages);
  //       return false;
  //     }
  //     else if(errorMessages[0]==="success"){
  //       callAlertSuccess(errorMessages[1]);
  //       return true;
  //     }
  //     else{
  //       callAlertError(errorMessages);
  //     }
      
  //   }
  // };
  // //@ts-ignore
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   changeSubmitFormAbility(false);

  //   const isValid = await validate();
  //   if (isValid) {
  //     // setErrors([])
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



  //   useEffect(() => {
  //     // getInitialuser();
  //   }, [user]);

  return (
    <>
      {console.log(formData)}
      {console.log(selectedTag)}
      <div className="container mb-32">
        <div className="flex flex-wrap -mx-3 ">
          <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-6/12 lg:w-6/12 xl:w-6/12">
            <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
              <div
                ref={messageRef}
                className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl"
              >
                <h5>Edit user</h5>
              </div>
              {errors.length > 0 ? (
                <div className="flex flex-wrap rounded   justify-center items-center relative bottom-4">
                  {errors.map((el: any) => {
                    return (
                      <>
                        <div
                          className="text-[#fff] message-shadow bg-color-alert-3 flex font-bold px-4 py-3 rounded relative"
                          role="alert"
                        >
                          {el}!!
                        </div>
                      </>
                    );
                  })}
                </div>
              ) : (
                success && (
                  <>
                    <div className="flex flex-wrap rounded  justify-center items-center relative bottom-4">
                      <div
                        className="bg-[#36CE89] text-white flex font-bold px-4 py-3 rounded relative"
                        role="alert"
                      >
                        {successMessage}!
                      </div>
                    </div>
                  </>
                )
              )}

              <div className="flex-auto p-6">
                <form
                  onSubmit={async (e) => {
                    changeSubmitFormAbility(false);
                    // await handleSubmit(e);
                    changeSubmitFormAbility(true);
                  }}
                  role="form text-left"
                  encType="multipart/form-data"
                >
                  <div className="md:flex md:justify-around  w-full flex-wrap">
                    <div className="flex  flex-wrap md:justify-start w-full mb-4 lg:w-full">
                      <div className="flex justify-start w-full flex-wrap">
                        <label className="relative " htmlFor="title">
                          Email
                        </label>
                      </div>

                      <input
                        onChange={(e) => changeInput(e)}
                        type="email"
                        className="md:w-full placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Email"
                        aria-label="Email"
                        name="Email"
                        value={formData.Email}
                        required
                      />
                    </div>

                    <div className="flex  flex-wrap md:justify-start w-full mb-4 lg:w-full">
                      <div className="flex justify-start w-full flex-wrap">
                        <label className="relative " htmlFor="title">
                          Name
                        </label>
                      </div>

                      <input
                        onChange={(e) => changeInput(e)}
                        type="text"
                        className="md:w-full placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Name"
                        aria-label="Name"
                        name="Name"
                        value={formData.Name}
                        required
                      />
                    </div>
                    
                    <div className="flex  flex-wrap md:justify-start w-full mb-4 lg:w-full">
                      <div className="flex justify-start w-full flex-wrap">
                        <label className="relative " htmlFor="title">
                         Last name
                        </label>
                      </div>

                      <input
                        onChange={(e) => changeInput(e)}
                        type="text"
                        className="md:w-full placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="LastName"
                        aria-label="LastName"
                        name="LastName"
                        value={formData.LastName}
                        required
                      />
                    </div>

                    <div className="flex  flex-wrap md:justify-start w-full mb-4 lg:w-full">
                      <div className="flex justify-start w-full flex-wrap">
                        <label className="relative " htmlFor="title">
                         Phone
                        </label>
                      </div>

                      <input
                        onChange={(e) => changeInput(e)}
                        type="text"
                        className="md:w-full placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Phone"
                        aria-label="Phone"
                        name="Phone"
                        value={formData.Phone}
                        required
                      />
                    </div>
                  
                  </div>

                  <div className="w-full mb-4">
                    <label className="flex justify-center mt-4 ">
                     Profile Picture
                    </label>
                      
                    <div className="flex items-align  md:justify-center w-full mb-4 lg:w-full">
                      <input
                        type="file"
                        className="pt-2 md:w-4/5 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        onChange={changeHandler}
                        //  value={blog.coverImageUrl}
                      />
                    </div>
                    <div className="flex justify-center mb-20">
                    <img
                      ref={prevImgRef}
                      style={{ display: "none" }}
                      src={initialData.ProfilePicUrl}
                    />
                    {fileDataURL ? (
                      <img
                        className="absolute img-previewer"
                        src={fileDataURL.result}
                        alt="preview"
                      />
                    ) : (
                      <>
                        <img
                          className="absolute img-previewer"
                          alt="preview"
                          src={`${baseUrl}${initialData.ProfilePicUrl}`}
                        />
                      </>
                    )}
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
                     value="save"
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
export default EditUserForm;
