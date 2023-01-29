import React from 'react'
import Comment from './comment'
 const Comments = ({data}:{data:any}) => {
 

  // mainComments are comments that are not replies to other comments
  const mainComments=data.comments.filter((el:any)=>el.commentParentId==null)

  return (
    <>
    {console.log(data.comments)}
     <div  className="antialiased mx-auto max-w-screen-sm">
              <h3 className="mb-6 text-3xl font-semibold text-gray-900">
                Comments
              </h3>
              <div className="">
                {mainComments.map((el:any,i:number)=>{
   return (
    <>
        <Comment data={data} key={el.commentId} comment={el}/>
    </>
   )
                })}
               
               
              </div>
            </div>
    </>
  )
}
export default Comments
