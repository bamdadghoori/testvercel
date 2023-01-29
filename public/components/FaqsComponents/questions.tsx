 import React from 'react'
import Question from './question'
import { useRouter } from 'next/router'
 const Questions = ({questionAnswers,questionRef}:{questionAnswers:any[],questionRef:any}) => {
const router=useRouter();
 
   console.log(router.query)
 
  return (
    <>
     <div  className="max-w-4xl mx-auto">
            <div
              className="flex-1 wow animate__animated animate__fadeInUp"
              data-wow-delay=".3s"
              ref={questionRef}
            >
              <div className="px-4 mx-auto lg:ml-0">
                <h3 
                  className="mb-8 text-4xl font-bold font-heading wow animate__animated animate__fadeInUp"
                >
                  Faqs
                </h3>
               
               
                 
                 {questionAnswers.length==0 ? (
                  <>
                  <div className="flex justify-center bg-color-alert-public px-4 py-3 shadow-alert-public rounded-16 relative" >
                    <div className="text text-[#fff] ">
                  Oops!! No question matches with your search
                    </div>
                    
                  </div>
                  </>
                 ) :(
                  questionAnswers.map((el:any,i:number)=>{
                    return <Question key={i} qTitle={el.qTitle} answer={el.answer}/>
                   }
                  )
                 )
                  }
                  
                
                </div>
              </div>
            </div>
          
    </>
  )
}
export default Questions
