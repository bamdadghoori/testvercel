import React, { useEffect, useState } from "react";
import MainSection from "../public/components/blogsComponents/mainSection";
import NewsLetterSubscribe from "../public/components/newsLetterSubscribe";
import Head from "next/head";
import { getAllBlogList, getBlogCategories } from "../public/apiFunctions";
import { handleErrors } from "../public/apiFunctions";
import { baseUrlPages } from "../public/apiFunctions";
import { useRouter } from "next/router";
import { getBlogsByCategory, getBlogDetails } from "../public/apiFunctions";
import LoadingMiddlePage from "../public/components/loadingMiddlePagePublic";


const Blogs = () => {
  



  const count = 100;
    const skip=0
  const [loading, setLoading] = useState(false);
  const [apiLoading, setApiLoading] = useState(false);
  const [blogs, setBlogs]: any[] = useState([]);
  const [emptyCategory, setEmptyCategory] = useState(false);
  const [errors,setErrors]=useState([])

  const [latestCategoryId, setLatestCategoryId]: any = useState(undefined);

  const [categoriesList, setCategoriesList]: any[] = useState([]);

  const router = useRouter();

  var categoryQuery = router.query.id as string;

  const showLoadingGifForBlogs = () => {
    setApiLoading(true);
  };

  const hideLoadingGifForBlogs = () => {
    setApiLoading(false);
  };

  console.log(categoryQuery);

  //the count of blogs that should be shown in first render

  const fillCategoriesToUi = async () => {
    try{
      const categoriesListResult: any = await getBlogCategories();

      setCategoriesList([...categoriesListResult]);
    }
   
    catch(er){
      console.log(er)
      const errors=handleErrors(er)
      setErrors(errors)
      setApiLoading(false)
    }
  };

  const getBlogs = async (categoriesList: any[]) => {
    console.log(categoriesList);
    //here we dont have query
    await getAllBlogList()
      .then(async (response: any) => {
        console.log(response);

        setBlogs(response.data);
       
      })
      .catch((er) =>{
        console.log(er)
      
      } );
  };

  const hideOopsText = () => {
    setEmptyCategory(false);
  };
  const unhideOopsText = () => {
    setEmptyCategory(true);
  };

  const setBlogListVariable = (blogList: any[]) => {
    console.log("settingVariable");
    setBlogs(blogList);
  };
  const getCategorizedBlogsFromApi = async (
    count: number,
    skip: number,
    categoryQuery: number
  ) => {
  try{
    const result = await getBlogsByCategory(count, skip, categoryQuery);
    return result;
  }
    
    catch(er){
      console.log(er)
      const errors=handleErrors(er)
      setErrors(errors)
      setApiLoading(false)
      return er;
    }
  };
  const getBlogsFromApi = async (count: number, skip: number) => {
    try{
      const result: any = await getAllBlogList();
      return result;
    }
   

    catch(er){
      console.log(er)
      const errors=handleErrors(er)
      setErrors(errors)
      setApiLoading(false)
      return er;
    }
  };
  const fillBlogsToUi = async () => {
    var blogList = [];
    setLatestCategoryId(categoryQuery);
    const categoryQueryNumber=Number(categoryQuery)
    console.log(categoryQueryNumber)
    if (categoryQuery != undefined) {
      
      blogList = await getCategorizedBlogsFromApi(
        count,
        skip,
        categoryQueryNumber
      );
    } else {
      blogList = await getBlogsFromApi(count, skip);
    }
    if (blogList.length == 0) {
      unhideOopsText();
    } else {
      setBlogListVariable(blogList);
   
      var adad = count + skip;
    
    }
    hideLoadingGifForBlogs();
  };
  useEffect(() => {
    //  getData();
     showLoadingGifForBlogs();
    hideOopsText();
    fillCategoriesToUi();
    fillBlogsToUi();
  }, [categoryQuery]);
  return (
    <>
      {console.log(blogs)}
      {console.log(emptyCategory)}
      <Head>
        <title>Blogs</title>
        <meta
          name="robots"
          content="index,follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta property="og:title" content="Blogs" />
        <meta
          name="description"
          content="See our the latest blogs in categories"
        />
        <link rel="canonical" href={`${baseUrlPages}/blogs`} />

        <meta
          property="og:description"
          content="امروز میخوایم در مورد نوعی برنامه‌نویس مرموز به نام عشقِ پترن صحبت کنیم و مصائبی که همنشینی با این شخص برای ما به وجود میاره رو بررسی کنیم..."
        />
      </Head>
      <section className="py-20 min-h-blogs-section ">
        <div className="container  min-h-96">
          <h2 className="text-3xl lg:text-4xl mb-8 font-bold font-heading">
            Our Blog
          </h2>
          {apiLoading == true ? (
            <>
              <LoadingMiddlePage />
            </>
          ) : (errors.length>0 ? (<>
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
          </>):(
            <>
            {categoriesList != undefined && categoriesList.length > 0 && (
              <ul className="flex flex-wrap justify-center gap-10 flex  items-center  py-3 text-sm font-bold ">
                <li
                  className="cursor-pointer text-color-550 hover:text-color-550 mb-8"
                  onClick={async () => {
                 
                    setLoading(true);

                    await router.push("/blogs");
                    setLoading(false);
                  }}
                >
                  All
                </li>
                {categoriesList.map((el: any) => {
                  return (
                    <li
                      key={el.id}
                      className="cursor-pointer text-color-550  mb-8"
                      onClick={async () => {
                      
                        setLoading(true);
                        await router.push({
                          pathname: "/blogs",
                          query: { id: el.categoryId },
                        });
                      }}
                    >
                      {el.categoryName}
                    </li>
                  );
                })}
              </ul>
            )}

            {emptyCategory ? (
              <>
                <div className="relative top-32 flex items-center justify-center">
                  <div className="flex justify-center items-center bg-color-550 font-semibold rounded-16 px-4 py-3  relative">
                    <div className="text text-[#fff] ">
                     This category does not have any blogs yet
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
             
                {blogs.length > 0 && (
                  <>
                  
                    <MainSection categories={categoriesList} blogs={blogs} />
                  </>
                )}
              </>
            )}
          </>
          )
          
          )}
        </div>
      </section>
      <div>
      <NewsLetterSubscribe />
      </div>
    </>
  );
};
export default Blogs;
