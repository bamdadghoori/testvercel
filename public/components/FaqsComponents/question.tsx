import React,{useState} from 'react'

 const Question = ({qTitle,answer}:{qTitle:string,answer:string}) => {
    const[showAnswer,setShowAnswer]=useState(false);

  return (
    <>
    <div className="leading-loose text-lg mt-6 wow animate__animated animate__fadeInUp">
                  <button onClick={()=>setShowAnswer(!showAnswer)} className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4" id="headlessui-disclosure-button-17" type="button" aria-expanded="false">
                    <span>{qTitle}?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className={`w-6 h-6 ${showAnswer ? 'rotate-45':' '}`} ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    </button>
                    {showAnswer && (
 <div className="text-gray-700 text-sm mt-2" id="headlessui-disclosure-panel-6">{answer}</div>
                    )}
                   
                    
                  </div>
    </>
  )
}
export default Question

