import React,{useEffect} from 'react'
import axios from 'axios'
import { baseUrl } from '../../apiFunctions'
 const TopSection = ({data}:{data:any}) => {
  console.log(data)
  const id=data.cateogryId
  var creationDate=data.creationDate;
 
  var convertedStartDate = new Date(creationDate);
  convertedStartDate.toLocaleDateString('en-US')
  var month = convertedStartDate.getMonth() + 1
  var day = convertedStartDate.getDay();
  var year = convertedStartDate.getFullYear();
   creationDate= year + "/" + month + "/" + day;
   console.log(creationDate)
    const getBlogsInCategory=async()=>{
     await axios.get('http://localhost:81/api/v1/Blog/GetByCategory?categoryId=2&count=1')
    }
  return (
    <>
     <div
          className="pt-20 pb-8 mb-12 bg-cover bg-no-repeat"
          style={{"backgroundImage": `url(${baseUrl}${data.coverImageUrl})`}}
        >
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <span className="text-base md:text-lg">
                  <a className="text-colorGray-200 hover:underline" href="#"
                    ><span
                      className="inline-block py-1 px-3 text-xs font-semibold bg-color-50 text-color-550 rounded-xl mr-3"
                      >{data.categoryName}</span
                    ></a
                  >
                  <span className="text-colorGray-200 text-sm">{creationDate}</span>
                </span>
                <h2
                  className="text-4xl md:text-5xl mt-4 text-white font-bold font-heading"
                >
                 {data.title}
                </h2>
              </div>
              <div className="flex justify-center mb-8">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src={`${baseUrl}${data.authorProfilePicUrl}`}
                  alt=""
                />
                <div className="pl-4">
                  <p className="text-colorGray-100 mb-1">{data.authorName}</p>
                  <p className="text-xs text-colorGray-200 font-semibold">Author</p>
                </div>
              </div>
            </div>
          </div>
       
          
        </div>
    </>
  )
}
export default TopSection
