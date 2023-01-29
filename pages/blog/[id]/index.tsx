import React, { useEffect, useState, useRef } from "react";
import TopSection from "../../../public/components/singleBlogComponents/topSection";
import MainComponent from "../../../public/components/singleBlogComponents/mainComponent";
import Comments from "../../../public/components/singleBlogComponents/comments";
import CommentForm from "../../../public/components/singleBlogComponents/commentForm";
import NewsLetterSubscribe from "../../../public/components/newsLetterSubscribe";
import axios from "axios";
import https from "https";
import http from "http"
import { baseUrl } from "../../../public/apiFunctions";

import Head from "next/head";





// axios.defaults.httpsAgent = new https.Agent({
//   rejectUnauthorized: false,
// });

const SingleBlog = ({ data }: { data: any }) => {

  console.log(data);
  // data=JSON.parse(data)

  return (
    <>
     {/* <TopSection data={data}/>
        <div className="container">
          <div className='max-w-2xl mx-auto'>
           <MainComponent data={data}/>
           <Comments  data={data}/>
           <CommentForm  data={data}/>y
           </div>
          </div> */}
      <NewsLetterSubscribe />
    </>
  );
};

// export const getStaticPaths=async(context:any)=> {
//   //to get all blogs
//   var data:any=[]
//   var paths:any[]=[]
//    await getBlogList(20,0).then(async(response:any)=>{

//       data=response
//       paths=await data.map((el:any)=>{return {params:{title:el.title.replace(/\s+/g, '-').toLowerCase()}}} )
//    }).catch((er)=>{return er})

//      return {

//        paths:paths ,
//        fallback: false, // can also be true or 'blocking'
//      }
//    }

//  export const  getStaticProps=async(context:any)=> {
//  var data:any=[]
//     //to get a blog with all details
//     const title=context.params.title
//     var id=0
//       await getBlogList(20,0).then((response:any)=>{

//      const filteredData= response.filter((el:any)=>{return el.title.replace(/\s+/g, '-').toLowerCase()==title})
//      id=filteredData[0].blogPostID
//    }).catch((er)=>{return er})

//      await getBlogDetails(id).then((response:any)=>{

//         data=response
//      }).catch((er)=>{return er})

//   data= JSON.stringify(data)

//      return {
//        props: {data}, // will be passed to the page component as props
//      }
//    }


export default SingleBlog;
export async function getServerSideProps(context: any) {
  var id: number = context.params.id;
  console.log(context.params.id);
  var data: any = {};
  var axios = require('axios');

var config = {
  method: 'get',
  url: `https://api.flamincode.com/api/v1/Blog/${id}`,
  headers: {"Accept-Encoding": "gzip,deflate,compress" },
  // timeout:10000
};

axios(config)
.then(function (response:any) {
  console.log('test postman',JSON.stringify(response.data));
  data=JSON.stringify(response.data)
})
.catch(function (error:any) {
  console.log(error);
});
console.log('line 96',data)
 return {
    props: { data }, // will be passed to the page component as props
  };
}
//   const controller = new AbortController();
//   const getData = async () => {
//     console.log('line 78 is',data)
//     console.log('id is:',id)
//     console.log('url is:',`https://api.flamincode.com/api/v1/Blog/${id}`)
//     const response: any = await axios.get(`https://api.flamincode.com/api/v1/Blog/${id}`,{  httpAgent: new http.Agent({ keepAlive: true }),  signal: controller.signal});
//     console.log('line 79 is',data)
//     controller.abort()
//     data = response.data;
//     console.log('line 81',data)
//     return data;
//   };
//   try {
//     data = await getData();
//   } catch (er) {
//     console.log(er);
//   }
// console.log('line 89 is',data)
 
// }
