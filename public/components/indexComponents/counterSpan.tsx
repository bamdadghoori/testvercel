import React from 'react'
import {useEffect,useState} from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
interface props {
    endNumber:number;
    delay:number;
    unit?:string

}

 const CounterSpan = ({endNumber,unit,delay}:props) => {
    
    const [count,setCount]=useState(0)
     const endTime=2000/endNumber



    useEffect(()=>{
      let timeOut;
      if(count<endNumber){
            timeOut= setTimeout(()=>{
              
            setCount(count+1)
          }
            ,endTime)
        }
        // else if(count==0){
        //   timeOut= setTimeout(()=>{
              
        //     setCount(count+1)
        //   }
        //     ,10)
        // }
          
       
          
        
            
          },[count]
          )
       
  return (
   <>
    <span className="sm:text-2xl font-bold font-heading">+ </span>
                <span className="sm:text-2xl font-bold font-heading count"
                  ><CountUp end={endNumber}  duration={2} delay={0.1} scrollSpyOnce={false} enableScrollSpy={true} >
                    {({ countUpRef, start }) => (
                      //manually start
            <VisibilitySensor onChange={start} delayedCall>
             <>
             {console.log(countUpRef)}
                <span ref={countUpRef} />
             </> 
              
            </VisibilitySensor>
            )}
                    </CountUp></span
                >
                {unit!=undefined &&(
 <span className="sm:text-2xl font-bold font-heading"> k </span>
                )}
               
   </>
  )
}
export default CounterSpan;
