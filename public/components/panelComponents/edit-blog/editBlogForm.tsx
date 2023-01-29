import React, { useState, useRef, useEffect } from "react";
import Select from "react-select";
import dynamic from "next/dynamic";
import { editBlog } from "../../../apiFunctions";
import { useRouter } from "next/router";
import { handleErrors,handleErrorsInSuccessMode } from "../../../apiFunctions";
import { getCategoryNameById } from "../../../apiFunctions";
import { jwtChecker } from "../../usefullFunctions";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CreatableSelect from 'react-select/creatable';
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

const CustomEditor = dynamic(() => import("../editor"), { ssr: false });
const EditBlogForm = ({
  blog,
  categories,
}: {
  blog: any;
  categories: any[];
}) => {
  const [selectedTag, setSelectedTag]: any = useState(null);

  const [errors, setErrors] = useState([]);

  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [enableSubmitForm, setEnableSubmitForm] = useState(true);

  const changeSubmitFormAbility = (state: boolean) => {
    setEnableSubmitForm(state);
  };
  const [categoryName, setCategoryName]: any = useState("");

  const getCategory = async () => {
    console.log(blog.cateogryId);
    try {
      const response = await getCategoryNameById(blog.cateogryId);
      setFormData({ ...formData, CategoryName: response });
      
      return response;
    } catch (er) {
      console.log(er);
      return "";
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

  const handleCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    console.log(e.target.checked);
    setFormData({ ...formData, [value]: e.target.checked });
  };


  console.log(blog);
  const initialData = {
  
    AuthorName: blog.authorName,
    BlogPostID: blog.blogPostID,
    CategoryId: blog.cateogryId,
    CategoryName: "",
    CoverImageDescription: blog.coverImageDescription,
    CoverImage: null,
    // CreationDate
    // :
    // 'fds',
    EstimatedReadingTime: blog.estimatedReadingTime,
    FullText: blog.fullText,
    IsArchived: blog.isArchived,
    IsNoFollow: blog.isNoFollow,
    IsNoIndex: blog.isNoIndex,
    IsVip: blog.isVip,
    // LastModifiedDate
    // :
    // 'dfs',
    LikesCount: blog.likesCount,
    MetaDescription: blog.metaDescription,
    ShortDescription: blog.shortDescription,
    Title: blog.title,
    UserID: blog.userID,
    ViewCount: blog.viewCount,
    Tags:blog.tags.length>1 ? blog.tags : blog.tags[0].split(","),
  };

  //@ts-ignore
  const changeCategory = (e) => {
    console.log(e.label);
    const value = Number(e.value);
    setFormData({ ...formData, CategoryId: value, CategoryName: e.label });
  };

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

  //@ts-ignore

  const changeSelected = (option) => {
    // const tag=e.target.checked
    setSelectedTag(option);
  };

  //@ts-ignore
  const changeSelectMultiple = (e) => {
    var values = e.map((el: any) => {
      return el.value;
    });
    values = values.filter((el: any) => el != "Tags");
    console.log(values);

    setFormData({ ...formData, Tags: values });
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

  //@ts-ignore
  const changeHandler = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, CoverImage: e.target.files[0] });
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


  const checkLogin=()=>{
    if(jwtChecker()=='404'){
      router.push('/loginExpired')
    }
  }

  const router = useRouter();
  //@ts-ignore
  const validate = async () => {
    //remove html taggs from full text to check if it's empty
    const realFullText=formData.FullText.replace( /(<([^>]+)>)/ig, '');
    if(realFullText.length===0){
      callAlertError(['Full text field is required'])
      return false
    }
    const {CategoryName,...rest}=formData
    console.log('rest is',rest)
    try {
     
      const response = await editBlog(rest);

      console.log(response);
      if(response!=undefined && response.isSuccess!=undefined && response.isSuccess===true){


   
      callAlertSuccess(response.message)
       return true

    }
    else{
     const errors= handleErrorsInSuccessMode(response)
      callAlertError(errors)
      return false
    }
    } catch (er: any) {
      console.log(er);
    
        const errorMessages = handleErrors(er);
        if(errorMessages[0]=="Request failed with status code 401"){
          localStorage.removeItem('jwt')
          checkLogin();
        }
        else if(errorMessages[0]==="success"){
          callAlertSuccess(errorMessages[1])
          return true
        }
        else{
          callAlertError(errorMessages);
          // setErrors(errorMessages);
          return false;
        }
       
      
    }
  };
  //@ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();
    changeSubmitFormAbility(false);

    const isValid = await validate();
    if (isValid) {
      setErrors([]);
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
   
    loadFile();
  }, [file]);

  const getInitialBlog = async() => {
    if (formData.BlogPostID != undefined) {
       const response=await getCategory();
       console.log(response)
      const {CategoryName,...rest}=initialData
      setFormData({...initialData,CategoryName:response});
    }
  };

  useEffect(() => {
    getInitialBlog();
  }, [blog]);

  return (
    <>
      {console.log(formData)}
      {console.log(fileDataURL)}
      {console.log(selectedTag)}
      <div className="container">
        <div className="flex flex-wrap -mx-3 ">
          <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-8/12 xl:w-8/12">
      

            <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
              <div
                ref={messageRef}
                className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl"
              >
                <h5>Edit blog</h5>
              </div>
              {errors.length > 0 && (
                <div className="flex flex-wrap rounded  justify-center items-center relative bottom-4">
                  {errors.map((el: any) => {
                    return (
                      <>
                        <div
                          className="text-[#fff] bg-color-alert-3 message-shadow  flex font-bold px-4 py-3 rounded relative"
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
                  onSubmit={async (e) => {
                    changeSubmitFormAbility(false);
                    await handleSubmit(e);
                    changeSubmitFormAbility(true);
                  }}
                  role="form text-left"
                  encType="multipart/form-data"
                >
                  <div className="md:flex md:justify-around  w-full flex-wrap">
                    <div className="flex  flex-wrap md:justify-around w-full mb-4 lg:w-1/2">
                      <div className="flex w-full flex-wrap">
                        <label className="relative left-10" htmlFor="title">
                          Title
                        </label>
                      </div>

                      <input
                        onChange={(e) => changeInput(e)}
                        type="text"
                        className="md:w-4/5 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Title"
                        aria-label="Title"
                        name="Title"
                        value={formData.Title}
                        required
                      />
                    </div>
                    <div className="flex  md:justify-around  w-full mb-4 lg:w-1/2 flex-wrap">
                      <div className="flex w-full ">
                        <label className="relative left-10">Category</label>
                      </div>
                      <Select
                        value={{
                          label:formData.CategoryName ,
                          value: formData.CategoryId,
                        }}
                        onChange={(e) => {
                          changeSelected;
                          changeCategory(e);
                        }}
                        isMulti={false}
                        options={categories.map((el: any) => {
                          return {
                            value: el.categoryId,
                            label: el.categoryName,
                          };
                        })}
                        isSearchable={true}
                        className="md:w-4/5 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                      />
                    </div>

                    <div className="flex flex-wrap md:justify-around w-full mb-4 lg:w-1/2">
                      <div className="flex w-full justify-center">
                        <label
                          className="relative "
                          htmlFor="estimatedReadingTime"
                        >
                          Estimated reading time
                        </label>
                      </div>
                      <input
                        onChange={(e) => changeInput(e)}
                        type="text"
                        className="md:w-4/5 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Estimated reading time "
                        aria-label="Estimated reading time"
                        name="EstimatedReadingTime"
                        value={formData.EstimatedReadingTime}
                        required
                      />
                    </div>

                    <div className="flex flex-wrap md:justify-center w-full mb-4 ">
                      <div className="flex w-full justify-center flex-wrap">
                        <label className=" relative ">Tags</label>
                      </div>
                      <CreatableSelect
                        defaultValue={
                          formData.Tags != undefined
                            ? formData.Tags.map((el: any) => {
                                return { value: el, label: el };
                              })
                            : ""
                        }
                        onChange={(e) => {
                          changeSelected;
                          changeSelectMultiple(e);
                        }}
                        isMulti={true}
                        options={tags}
                        isSearchable={true}
                        className="md:w-4/5  placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                      />
                    </div>

                    <div className="w-full gap-6 flex-wrap mt-2 flex justify-center">
                      <div className="flex items-center mb-4">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          checked={formData.IsVip}
                          onChange={(e) => handleCheckBox(e, "IsVip")}
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
                          onChange={(e) => handleCheckBox(e, "IsArchived")}
                          value=""
                          checked={formData.IsArchived}
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
                          onChange={(e) => handleCheckBox(e, "IsNoFollow")}
                          checked={formData.IsNoFollow}
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
                          onChange={(e) => handleCheckBox(e, "IsNoIndex")}
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-colorGray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          checked={formData.IsNoIndex}
                        />
                        <label className="ml-2 text-sm font-medium ">
                          Is no index
                        </label>
                      </div>
                    </div>
                    <div className="w-full flex-wrap mb-4 flex justify-center">
                      <div className="flex w-full lg:justify-center flex-wrap">
                        <label className="lg:left-0 left-10 relative justify-center lg:left-0 left-10">
                          short description
                        </label>
                      </div>
                      <textarea
                        className="md:w-4/5  placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="short desctiption"
                        name="ShortDesctiption"
                        id="shortDesctiption"
                        onChange={(e) => changeInput(e)}
                        cols={30}
                        rows={3}
                        required
                      >
                        {formData.ShortDescription}
                      </textarea>
                    </div>
                    <div className="w-full flex-wrap mb-4 flex justify-center">
                      <div className="flex  w-full lg:justify-center flex-wrap">
                        <label className="lg:left-0 left-10 relative justify-center">
                          Meta description
                        </label>
                      </div>
                      <textarea
                        className="md:w-4/5   placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="meta desctiption"
                        name="MetaDesctiption"
                        id="metaDesctiption"
                        cols={30}
                        rows={3}
                        onChange={(e) => changeInput(e)}
                        required
                      >
                        {formData.MetaDescription}
                      </textarea>
                    </div>
                    <div className="w-full mb-4">
                      <label className="flex w-full justify-center ">
                        Full text
                      </label>

                      <CustomEditor
                        setCkEditorDataToFullText={setCkEditorDataToFullText}
                        data={formData.FullText}
                      />
                    </div>
                  </div>

                  <div className="w-full mb-4">
                    <label className="flex justify-center mt-4 mb-4">
                      Cover Image
                    </label>

                    <div className="flex items-align  md:justify-center w-full mb-4 lg:w-full">
                      <input
                        type="file"
                        className="pt-2 md:w-4/5 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        onChange={changeHandler}
                        //  value={blog.coverImageUrl}
                      />
                    </div>
                  </div>
                  <div className="w-full mb-4 flex justify-center flex-wrap">
                    <div className="flex w-full lg:justify-center flex-wrap">
                      <label className="lg:left-0 left-10 relative justify-center lg:left-0 left-10">
                        Cover image description
                      </label>
                    </div>
                    <textarea
                      className="md:w-4/5  placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                      placeholder="Cover image description"
                      name="CoverImageDescription"
                      onChange={(e) => changeInput(e)}
                      id="CoverImageDescription"
                      cols={30}
                      rows={3}
                      value={formData.CoverImageDescription}
                      required
                    />
                  </div>
                  <div className="flex justify-center mb-4">
                    <img
                      ref={prevImgRef}
                      style={{ display: "none" }}
                      src={blog.coverImageUrl}
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
                          src={`${baseUrl}${blog.coverImageUrl}`}
                        />
                      </>
                    )}
                  </div>

                  <div className="text-center">
                   
                      <div className={`${enableSubmitForm == false ? 'opacity-1':'opacity-0'} flex justify-center items-center`}>
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
                      value="save"
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
export default EditBlogForm;
