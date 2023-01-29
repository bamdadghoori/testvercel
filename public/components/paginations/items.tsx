import React from 'react'
import { baseUrl } from "../../apiFunctions";
 const Items = ({blogs,goToPage}:{blogs:any[],goToPage:(...args:any[])=>Promise<void>}) => {


    const convertDate = (myDate: string) => {
        var convertedStartDate = new Date(myDate);
        convertedStartDate.toLocaleDateString("en-US");
        var month = convertedStartDate.getMonth() + 1;
        var day = convertedStartDate.getDay();
        var year = convertedStartDate.getFullYear();
        myDate = year + "/" + month + "/" + day;
        return myDate;
      };


  return (
    <>
            <div
              onClick={(e) => {
                e.preventDefault();
                goToPage(blogs[0].blogPostID);
              }}
              className="cursor-pointer w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeInUp animated hover-up-5 top-0 relative"
              blogs-wow-delay=".1s"
            >
              <img
                className="h-80 w-full object-cover rounded"
                src={`${baseUrl}${blogs[0].coverImageUrl}`}
                alt=""
              />
              <p className="mt-6 text-sm text-color-400">
                <span className="inline-block py-1 px-3 text-xs font-semibold bg-color-50 text-color-550 rounded-xl mr-3">
                  {blogs[0].categoryName}
                </span>
                <span className="text-colorGray-400 text-xs">
                  {convertDate(blogs[0].creationDate)}
                </span>
              </p>
              <h3 className="my-2 text-2xl font-bold font-heading">
                <a className="hover:text-color-550 cursor-pointer">
                  {blogs[0].title}
                </a>
              </h3>
              <p className="text-colorGray-400 leading-loose">
                {blogs[0].description}
              </p>
            </div>
            {blogs.length > 1 && (
              <>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    goToPage(blogs[1].blogPostID);
                  }}
                  className="cursor-pointer w-full lg:w-2/3 px-3 mb-12 wow animate__animated animate__fadeInUp animated hover-up-5 top-0 relative"
                  blogs-wow-delay=".3s"
                >
                  <img
                    className="h-80 w-full object-cover rounded"
                    src={`${baseUrl}${blogs[1].coverImageUrl}`}
                    alt=""
                  />
                  <p className="mt-6 text-sm text-color-400">
                    <span className="inline-block py-1 px-3 text-xs font-semibold bg-color-50 text-color-550 rounded-xl mr-3">
                      {blogs[1].categoryName}
                    </span>
                    <span className="text-colorGray-400 text-xs">
                      {" "}
                      {convertDate(blogs[1].creationDate)}
                    </span>
                  </p>
                  <h3 className="my-2 text-2xl font-bold font-heading">
                    <a className="hover:text-color-550 cursor-pointer">
                      {blogs[1].title}
                    </a>
                  </h3>
                  <p className="text-colorGray-400 leading-loose">
                    {blogs[1].description}
                  </p>
                </div>
              </>
            )}

            {blogs.length > 2 &&
              blogs.slice(2, blogs.length).map((el: any, i: number) => {
                return (
                  <div
                    key={i}
                    onClick={(e) => {
                      e.preventDefault();
                      goToPage(el.blogPostID);
                    }}
                    className="cursor-pointer w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeInUp animated hover-up-5 top-0 relative"
                    blogs-wow-delay=".1s"
                  >
                    <img
                      className="h-80 w-full object-cover rounded"
                      src={`${baseUrl}${el.coverImageUrl}`}
                      alt=""
                    />
                    <p className="mt-6 text-sm text-color-400">
                      <span className="inline-block py-1 px-3 text-xs font-semibold bg-color-50 text-color-550 rounded-xl mr-3">
                        {el.categoryName}
                      </span>
                      <span className="text-colorGray-400 text-xs">
                        {" "}
                        {convertDate(el.creationDate)}
                      </span>
                    </p>
                    <h3 className="my-2 text-2xl font-bold font-heading">
                      <a className="hover:text-color-550 cursor-pointer">
                        {el.title}
                      </a>
                    </h3>
                    <p className="text-colorGray-400 leading-loose">
                      {el.description}
                    </p>
                  </div>
                );
              })}
          </>
  )
}
export default Items;

