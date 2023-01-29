import React,{useEffect,useState,useRef} from 'react'
import TopSection from '../public/components/singleBlogComponents/topSection'
import MainComponent from '../public/components/singleBlogComponents/mainComponent'
import Comments from '../public/components/singleBlogComponents/comments'
import CommentForm from '../public/components/singleBlogComponents/commentForm'
import NewsLetterSubscribe from '../public/components/newsLetterSubscribe'
import axios from 'axios';
import https from "https"
import { useRouter } from 'next/router'
import { baseUrl } from '../public/apiFunctions'
import { handleErrors } from '../public/apiFunctions'


import Head from 'next/head'
import LoadingMiddlePage from '../public/components/loadingMiddlePagePublic'

// axios.defaults.httpsAgent=new https.Agent({
//     rejectUnauthorized:false,
//   })
  
 const SingleBlog = ({data}:{data:any}) => {
  const[apiLoading,setApiLoading]=useState(false)
const [errors,setErrors]:any=useState([])
console.log(data)
  // data=JSON.parse(data)
  const[blog,setBlog]:any=useState({})



  const router=useRouter();
    const id=Number(router.query.id)
console.log(router.query.id)

const setDataToUi=async()=>{
  setApiLoading(true)
try{
  console.log(router.query.id)
  const response= await axios.get(`${baseUrl}/api/v1/Blog/${router.query.id}`)
console.log(response.data)
setBlog(response.data)
setApiLoading(false)
  
 
}
catch(er){
  const errors=handleErrors(er)
  console.log(er)
  setErrors(errors)
  setApiLoading(false)
  return er
}
   
  }
    useEffect(()=>{
      if(router.query.id!=undefined){
        setDataToUi();
      }
     
    },[router.query])
 
  

  return (
    <>
    
    {/* <Head>
      <title>{data.title}</title>
    
      <meta name="author" content={data.authorName}/>
      <meta property="og:image" content={`${baseUrl}${data.coverImageUrl}`}/>
      <meta name="description" content={data.metaDescription} />
      <link rel="canonical" href={`${baseUrlPages}/blog/${data.title}`}/>
      <meta name="robots" content={`${data.isNoFollow ? 'nofollow':'follow'},${data.isNoIndex ? 'noindex':'index'},max-image-preview:large, max-snippet:-1, max-video-preview:-1`}></meta>
      <meta property="og:description" content={data.metaDescription}/>
      <meta property="article:published_time" content={data.creationDate} />
      <meta property="article:modified_time" content={data.lastModifiedDate}/>
      <meta name="twitter:label1" content="Est. reading time" />
      <meta name="twitter:data1" content={data.estimatedReadingTime} />
      
      <meta property="og:image:height" content={imgSizeBlogs.width}/> 
      <meta property="og:image:width" content={imgSizeBlogs.height}/> 
     
    </Head> */}
    <section className='pb-20'>
     {apiLoading==false  ? errors.length>0 ? (
      <div className="flex  w-full justify-center items-center">
 {errors.map((el: any) => {
  return (
    <>
      <div
        className="text-[#fff] bg-color-alert-3 flex w-fit font-bold mt-32  px-4 py-3 rounded relative"
        role="alert"
      >
        {el}!!
      </div>
      
    </>
  );
  
})}
</div>
      ):(
      blog.blogPostID!=undefined &&(
        <>
        {console.log('blog is',blog)}
        <TopSection data={blog}/>
          <div className="container">
            <div className='max-w-2xl mx-auto'>
             <MainComponent data={blog}/>
             <Comments  data={blog}/>
             <CommentForm  data={blog}/>
             </div>
            </div>
        </>
      )
        
     
     ):(
      <LoadingMiddlePage/>
     )}
       
        
    </section>
    <NewsLetterSubscribe/>
    </>
  )
}





export default SingleBlog