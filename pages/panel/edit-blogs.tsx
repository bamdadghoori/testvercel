import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../public/components/panelComponents/addBlog/navbar";
import TopSection from "../../public/components/panelComponents/addBlog/topSection";
import EditBlogForm from "../../public/components/panelComponents/edit-blog/editBlogForm";
import { baseUrl, handleErrors } from "../../public/apiFunctions";
import Footer from "../../public/components/panelComponents/footer";
import { getBlogDetails } from "../../public/apiFunctions";
import { getBlogCategories } from "../../public/apiFunctions";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoadingForm from "./loading-form";
const EditBlogs = () => {
  const [blog, setBlog]: any = useState({});
  const [errors, setErrors] = useState([]);

  const router = useRouter();
  const id = Number(router.query.id);
  console.log(router.query.id);

  const setDataToUi = async () => {
    try {
      console.log(router.query.id);
      const response = await axios.get(
        `${baseUrl}/api/v1/Blog/${router.query.id}`
      );
      console.log(response.data);
      setBlog(response.data);
      setErrors([]);
      return response.data;
    } catch (er) {
      console.log(er);
      const error = handleErrors(er);
      setErrors(error);
      return er;
    }
  };

  const [categories, setCategories] = useState([]);
  const setCategoriesToUi = async () => {
    try {
      const response = await getBlogCategories();
      setCategories(response);
    } catch (er) {
      console.log(er);
    }
  };

  useEffect(() => {
    if (router.query.id != undefined) {
      setCategoriesToUi();
      setDataToUi();
    }
  }, [router.query]);
  return (
    <>
      {console.log(blog)}

      {blog.blogPostID != undefined && blog.fullText != undefined ? (
        <EditBlogForm blog={blog} categories={categories} />
      ) : errors.length > 0 ? (
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
      ) : (
        <LoadingForm />
      )}
    </>
  );
};
export default EditBlogs;

const getData = async (id: number) => {
  try {
    const response: any = await getBlogDetails(id);

    return response;
  } catch (er) {
    console.log(er);
    return er;
  }
};
