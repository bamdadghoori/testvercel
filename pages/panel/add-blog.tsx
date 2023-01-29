import React, { useEffect, useState } from "react";
import Navbar from "../../public/components/panelComponents/addBlog/navbar";
import TopSection from "../../public/components/panelComponents/addBlog/topSection";
import AddBlogForm from "../../public/components/panelComponents/addBlog/addBlogForm";
import Footer from "../../public/components/panelComponents/footer";
import { getBlogCategories } from "../../public/apiFunctions";
import LoadingMiddlePage from "../../public/components/loadingMiddlePage";
import { handleErrors } from "../../public/apiFunctions";
import LoadingForm from "./loading-form";
const AddBlog = () => {
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState([]);
  const setCategoriesToUi = async () => {
    try {
      const response = await getBlogCategories();
      setCategories(response);
      setErrors([])
    } catch (er) {
      console.log(er);
      const error=handleErrors(er)
      setErrors(error)
    }
  };
  useEffect(() => {
    setCategoriesToUi();
  }, []);
  return (
    <>
      {console.log(categories)}

      {categories.length > 0 ? (
        <AddBlogForm categories={categories} />
      ) : (
        errors.length > 0 ? (
          errors.map((el: any) => {
            return (
              <>
                <div className="flex justify-center">
                  <div
                    className="text-[#fff] bg-color-alert-3 mb-admin-form-alert message-shadow  flex font-bold px-4 py-3 rounded relative"
                    role="alert"
                  >
                    {el}!!
                  </div>
                </div>
              </>
            );
          })
        ):(<LoadingForm/>)
      )}

      {/* <div className='w-full px-6 py-6 mx-auto'>
    <main className='relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl  ps--active-y'> */}
    </>
  );
};
export default AddBlog;
