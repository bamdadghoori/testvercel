import React,{useState,useRef,useContext} from "react";
import { addContactMessage } from "../../apiFunctions";
import { useRouter } from "next/router";
import { handleErrors } from "../../apiFunctions";
import { successMessageContext } from "../successMessageContext";
import { callAlertErrorPublic } from "../usefullFunctions";
//@ts-ignore
import ReCAPTCHA from "react-google-recaptcha";
const ContactForm = () => {
  // const { successmessage, setSuccessMessage } = useContext(successMessageContext);
  const [successMessage,setSuccessMessage]=useState('')
  const [enableSubmitForm, setEnableSubmitForm] = useState(true);
  const [recaptchaResponse,setRecaptchaResponse]=useState(false)
const router=useRouter()

  const initialData=
    {
      id: 0,
      subject: "",
      text: "",
      createdTime: "2022-12-29T06:20:53.167Z",
      email: "",
      phone: "",
      isRead: false
    }
  
      //refrence to error or success message in page

  const messageRef=useRef(null)



    const [success, setSuccess] = useState(false);
  const[formData,setFormData]=useState(initialData)


  const changeSubmitFormAbility = (state: boolean) => {
    setEnableSubmitForm(state);
  };

  //to set inputs controlled
     const changeInput=(e:(React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>))=>{
            e.preventDefault();
            setFormData({...formData,[e.target.name]:e.target.value})
     }


const validate=async()=>{
  if(recaptchaResponse===false){
    callAlertErrorPublic(["Please check the I'm not robot (recaptcha)"])
    return false
  }
   else{
    try {
        
      const response :any= await addContactMessage(formData);
  
    
      console.log(response.message);
    await  router.push({pathname:'/loading-operation-public',query:{message:response.message}})
    //  await router.push({pathname:'/contact#contactUs',query:{message:response.message}},'/contact')
  
    await router.push('/contact#contactUs')
    
     setSuccess(true)
     setSuccessMessage(response.message)
       
      return true
      
    } catch (er: any) {
      console.log(er);
      if(er.response!=undefined){
        const errorMessages= handleErrors(er)
        callAlertErrorPublic(errorMessages)
        
        return false
      }
    
      
    }
   }
 
 
}

    //@ts-ignore
    const handleSubmit = async (e) => {
      e.preventDefault();
      changeSubmitFormAbility(false)
              
     const isValid=await validate();
     if(isValid){
      
     }
      if(messageRef.current!=null){
        //@ts-ignore
        messageRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
      changeSubmitFormAbility(true)
      
    };

    const verifyCallback=()=>{
      console.log('line 144')
  setRecaptchaResponse(true)
  console.log('verifyCallback',recaptchaResponse)
    }
    const expiredCallback=()=>{
      console.log('line 144')
      setRecaptchaResponse(false)
    }

  return (
    <>
{console.log(success)}
      <section className="py-20" id="contactUs">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="max-w-md mb-8 mx-auto">
              <span
                className="inline-block py-1 px-3 text-xs font-semibold bg-color-50 text-color-550 rounded-xl wow animate__animatedanimated animate__fadeInUp"
                data-wow-delay=".1s"
              ref={messageRef}
              >
                Contact Us
              </span>
              <h2
                className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeInUp"
                data-wow-delay=".s"
              >
                We will <span className="text-color-550">be glad</span> to hear
                from you!
              </h2>
            </div>
            <div>
        

              <form
                onSubmit={(e)=>handleSubmit(e)}
              >
              
                <div
                  className="mb-4 wow animate__animatedanimated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <input
                    className="w-full p-4 text-xs font-semibold leading-none bg-colorGray-50 rounded outline-none"
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    onChange={(e)=>changeInput(e)}
                    value={formData.subject}
                    required
                  />
                </div>
                <div
                  className="mb-4 wow animate__animatedanimated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <input
                    className="w-full p-4 text-xs font-semibold leading-none bg-colorGray-50 rounded outline-none"
                    type="text"
                    name="phone"
                    placeholder="Phone number (optional)"
                    onChange={(e)=>changeInput(e)}
                    value={formData.phone}
                   
                  />
                </div>
                <div
                  className="mb-4 wow animate__animatedanimated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <input
                    className="w-full p-4 text-xs font-semibold leading-none bg-colorGray-50 rounded outline-none"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e)=>changeInput(e)}
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div
                  className="mb-4 wow animate__animatedanimated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <textarea
                    className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-colorGray-50 rounded outline-none"
                    placeholder="Message..."
                    name="text"
                    onChange={(e)=>changeInput(e)}
                    value={formData.text}
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center mb-2">
                  <ReCAPTCHA
                      sitekey={"6LdT-e8jAAAAAFzJIjjmBMi8OfzRa49vuNulJnje"}
                      secretKey={"6LdT-e8jAAAAAGxZp8eQrOr-1BbLiEH8Gy8aa61Z"}
                     
                      onChange={verifyCallback}
                      onExpired={expiredCallback}
                    
                    />
                  </div>
                
                <div
                  className="flex relative justify-between items-center wow animate__animatedanimated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
            
                 

                
                     
                  <button
                    className={`${
                      enableSubmitForm
                        ? "cursor-pointer"
                        : "cursor-not-allowed"
                    } duration-500 py-4 px-8 text-sm text-white font-semibold leading-none custom-button`}
                    type="submit"
                    value="Submit"
                  
                  >
                    Submit
                  </button>
                  {enableSubmitForm == false && (
                      <div className="flex absolute right-0 justify-center items-center">
                        <img
                          className="loading-button-add-blog"
                          src="/assets/imgs/loading-button-public.gif"
                          alt="loading"
                        />
                      </div>
                    )}
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactForm;
