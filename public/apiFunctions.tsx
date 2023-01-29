import React from "react"
import axios from "axios"



export const axiosConfig=(token:string|null)=>{
    return {
        headers: { "Authorization":`Bearer ${token}`}
    }
   
}

export const axiosConfigWithFiles=(token:string|null)=>{
    return {
        headers: {  "Content-Type": "multipart/form-data","Authorization":`Bearer ${token}`}
    }
}

// export interface dataModel{
//     authorName
// : 
// string,
// blogPostID
// : 
// number,
// categoryId
// : 
// number,
// categoryName
// : 
// string,
// coverImageDescription
// : 
// string,
// coverImageUrl
// : 
// string,
// creationDate
// : 
// string,
// estimatedReadingTime
// : 
// string,
// fullText
// : 
// string
// ,isArchived
// : 
// boolean,
// isNoFollow
// : 
// boolean,
// isNoIndex
// : 
// false,
// isVip
// : 
// false,
// lastModifiedDate
// : 
// string,
// likesCount
// : 
// number,
// metaDescription
// : 
// string,
// shortDescription
// : 
// string,
// title
// : 
// string,
// userID
// : 
// number,
// viewCount
// : 
// number
// }

export   const getBlogList=async(count:number,skip:number)=>{
    
    //to get a blog with all details
    
   try{
    const response= await axios.get(`${baseUrl}/api/v1/Blog?skip=${skip}&count=${count}`)
    console.log(response)
   return response.data
   }
   catch(er){
    return er
   }
   
    }

    //to get all blogs list
    export   const getAllBlogList=async()=>{
    
        //to get a blog with all details
        
      
        const response= await axios.get(`${baseUrl}/api/v1/Blog`,{headers:{'content-type':'application/json'}})
        console.log(response)
       return response.data
       
      
       
        }
    
    //to get blog with all details
    export const getBlogDetails=async(id:number)=>{
        try{
            const response=  await axios.get(`${baseUrl}/api/v1/Blog/${id}`)
            console.log(response)
            return response.data
        }
        catch(er){
            return er
           }
     
    }

    //to get blog categories
    export const getBlogCategories=async()=>{
        // const token=localStorage.getItem('jwt')
        //
            const response=  await axios.get(`${baseUrl}/api/v1/BlogCategory`)
            console.log(response)
            return response.data
        
      
     
    }

      //to get blogs in specific category
      export const getBlogsByCategory=async(count:number,skip:number,id:number)=>{
            const response=  await axios.get(`${baseUrl}/api/v1/Blog/GetByCategory?categoryId=${id}&skip=${skip}&count=${count}`)
            console.log(response)
            return response.data
       
     
    }

         //to get contact messages
         export const getContactMessages=async()=>{
            const token=localStorage.getItem('jwt')
    
            const response=  await axios.get(`${baseUrl}/api/v1/ContactMessage`,{
       
                headers: { "Content-Type": "multipart/form-data","Authorization":`Bearer ${token}`}
            })
            console.log(response)
            return response.data
       
     
    }
    export const getContactMessage=async(id:any)=>{
        const token=localStorage.getItem('jwt')

        const response=  await axios.get(`${baseUrl}/api/v1/ContactMessage/${id}`,{
   
            headers: { "Content-Type": "multipart/form-data","Authorization":`Bearer ${token}`}
        })
        console.log(response)
        return response.data
   
 
}

          //to post login form
          export const postLoginForm=async(model:any)=>{
            console.log(model)
           
            const response=await axios.post(`${baseUrl}/api/v1/Account?email=${model.email}&password=${model.password}&clientModel=${model.clientModel}`)
            console.log(response)
            return response.data
     
    }

    //to add a blog
   export const addBlog=async(blog:any)=>{

    const token=localStorage.getItem('jwt')
   
        const response=await axios.post(`${baseUrl}/api/v1/Blog`,blog,axiosConfigWithFiles(token))
        console.log(response)
        return response.data
    }

     //to add a contact message
   export const addContactMessage=async(message:any)=>{
    const response=await axios.post(`${baseUrl}/api/v1/ContactMessage`,message)
    console.log(response)
    return response.data
}

//to add comment
export const addComment=async(comment:any)=>{
    const response=await axios.post(`${baseUrl}/api/v1/Comment`,comment)
    console.log(response)
    return response.data
}

      


    //to edit a blog
   export const editBlog=async(blog:any)=>{
            console.log(blog)
    var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append('BlogPostId',blog.BlogPostID);
data.append('title',blog.Title)
data.append('MetaDescription', blog.MetaDescription);
data.append('FullText', blog.FullText);
data.append('AuthorName', blog.AuthorName);
data.append('ShortDescription', blog.ShortDescription);
data.append('EstimatedReadingTime',blog.EstimatedReadingTime);
data.append('UserId',blog.UserID);
data.append('CategoryId', blog.CategoryId);
data.append('CoverImageDescription',blog.CoverImageDescription);
data.append('CoverImage', blog.CoverImage);
data.append('Tags',blog.Tags)
data.append('IsArchived',blog.IsArchived)
data.append('IsVip',blog.IsVip)
data.append('IsNoFollow',blog.IsNoFollow)
data.append('IsNoIndex',blog.IsNoIndex)
var config = {
  method: 'put',
  url: `${baseUrl}/api/v1/blog`,
  data : data
};
console.log('x')
const response=await  axios(config)
console.log(response)
  console.log(JSON.stringify(response.data));
  return response.data


//     const token=localStorage.getItem('jwt')
   
//     const response=await axios.put(`${baseUrl}/api/v1/Blog`,blog,{
   
    
//         headers: { "Authorization":`Bearer ${token}`}
// })
//     console.log(response)
//     return response.data
}
   

export const deleteBlog=async(id:number)=>{
    const token=localStorage.getItem('jwt')
   
    const response=await axios.delete(`${baseUrl}/api/v1/Blog?blogId=${id}`,axiosConfig(token))
    return response.data

}

export const deleteComment=async(id:number)=>{
    const token=localStorage.getItem('jwt')
   
    const response=await axios.delete(`${baseUrl}/api/v1/Comment?commentId=${id}`,axiosConfig(token))
    return response.data

}

//customized functions

//to get last blog id 

export const getLastBlogId=async()=>{
    
        const response=await getAllBlogList()
        const data=response
        console.log(response)
        const lastValue=data[data.length-1]
        const id=lastValue.blogPostID
        return id
    
    
  
}

//handleErrors
export const handleErrors=(er:any)=>{
   
        var errorMessage:any=[]
     console.log('he')
        if(er.message === 'Network Error' ||er.message==='timeout exceeded'){
            // alert('no internet connection');
            errorMessage.push('Oops! No internet connection or slow network')
            console.log('api function line 273',er.message)
            return errorMessage
        }
        else if(er.message==="Request failed with status code 401"||er.message==="Request failed with status code 500"){
                   errorMessage.push(er.message)
                   return errorMessage
        }
        else{
            if(er.response!=undefined){
                if(er.response.data.isSuccess===true){
                    console.log('api function line 276',er.message)
                    errorMessage.push("success",er.message)
                }
                if(er.response.data.hasErrors===true){
                    errorMessage.push(er.response.data.errors)
                    console.log('api function line 280',er.message)
                }
                else{
                    
                    console.log('api function line 284',er.message)
                    errorMessage.push(er.response.data.message)
                }
            }
          
            return errorMessage
        }
       
        
        
    //    else if(er.response!=undefined && er.response.data!=undefined){
    //     if(er.response.data.errors!=undefined && er.response.data.errors.length>0){
    //         console.log('api function line 257',er.message)
    //         return er.response.data.errors
    //     }
    //     else{
    //         console.log('api function line 261',er.message)

    //         //indicate data is string not object
    //         if(er.response.data.length!=undefined && er.response.data.length>0){
    //             console.log('api function line 261',er.response.data)
    //             errorMessage.push(er.response.data)
    //         }

    //         //when data is object not string
    //         else{
    //             errorMessage.push(er.message)
    //         }
           
    //         return errorMessage
    //     }
              
    //     }
    //     else{
            
    //         console.log('api function line 266',er.message)
           
    //         errorMessage.push(er.message)
    //         return errorMessage
    //     }
    // }
//    else{
//     const errorMessage=[]
//     errorMessage.push(er.response.data.message)
//     return errorMessage
//    }

}

export const handleErrorsInSuccessMode=(er:any)=>{
  console.log(er)
        var errorMessage=[]
        if(er.hasErrors===true){
           errorMessage= er.data.errors
        }
        else{
            errorMessage.push(er.message)
        }
      return errorMessage

}

export const getCountOfBlogs=async()=>{
    try{
        const data=await getAllBlogList();
        console.log(data.length)
        return data.length
    }
    catch(er){
        console.log(er)
        return 0
    }
  
}

//to get blog categories count

export const getBlogCategoriesCount=async()=>{
    try{
        const data=await getBlogCategories();
        console.log(data.length)
        return data.length
    }
    catch(er){
        console.log(er)
        return 0
    }

}

//to get comments
export const getComments=async()=>{
    const token=localStorage.getItem('jwt')
   
const response=await axios.get('https://api.flamincode.com/api/v1/Comment/GetUnAcceptedComments',axiosConfig(token))
return response.data
}

// to edit comments
export const editComment=async(comment:any)=>{
    const token=localStorage.getItem('jwt')
   
const response=await axios.put('https://api.flamincode.com/api/v1/Comment',comment,axiosConfig(token))
return response.data
}

export const getCommentWithId=async(id:any)=>{
  const response= await getComments();
const filteredResponse=response.filter((el:any)=>el.commentId==id)[0]
return filteredResponse
}
export const getCategoryNameById=async(id:number)=>{
 const response=await getBlogCategories()
 const filteredCategory=response.filter((el:any)=>el.categoryId==id)[0]
 return filteredCategory.categoryName
}

 addContactMessage










    export const baseUrl='https://api.flamincode.com'
    export const baseUrlPages='http://localhost:3000'

    