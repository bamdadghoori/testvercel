import React, { useEffect, useState } from "react";
import Navbar from "../../public/components/panelComponents/addBlog/navbar";
import TopSection from "../../public/components/panelComponents/addBlog/topSection";
import AddBlogForm from "../../public/components/panelComponents/addBlog/addBlogForm";
import Footer from "../../public/components/panelComponents/footer";
import { getBlogCategories } from "../../public/apiFunctions";
import LoadingMiddlePage from "../../public/components/loadingMiddlePage";
import { handleErrors } from "../../public/apiFunctions";
import LoadingForm from "./loading-form";
import AddUserForm from "../../public/components/panelComponents/addUser/addUserForm";
const AddUser = () => {

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    
  }, []);
  return (
    <>
      
<AddUserForm/>
 

      {/* <div className='w-full px-6 py-6 mx-auto'>
    <main className='relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl  ps--active-y'> */}
    </>
  );
};
export default AddUser;
