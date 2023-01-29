import React,{useState,useRef} from 'react'
import { handleErrors } from '../../apiFunctions';
import { addComment } from '../../apiFunctions';
import { useRouter } from 'next/router';
import { callAlertErrorPublic } from '../usefullFunctions';
//@ts-ignore
import ReCAPTCHA from "react-google-recaptcha";
 const CommentForm = ({data}:{data:any}) => {

  const[commentText,setCommentText]=useState('')
 

  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const router=useRouter()

const initialData={
  commentId: 0,
  commentParentId: 0,
  blogId: data.blogPostID,
  text: "",
  isAccepted:false,
  writerName: ""
}

  //refrence to error or success message in page

  const messageRef = useRef(null);


const [formData,setFormData]=useState(initialData)
const [enableSubmitForm, setEnableSubmitForm] = useState(true);
const [recaptchaResponse,setRecaptchaResponse]=useState(false)
const changeSubmitFormAbility = (state: boolean) => {
  setEnableSubmitForm(state);
};

const changeInput = (
  e:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>
) => {
  const name = e.target.name;
  setFormData({ ...formData, [name]: e.target.value });
};


  //@ts-ignore
  const validate = async () => {

    console.log('line 104',recaptchaResponse)
    if(recaptchaResponse===false){
      callAlertErrorPublic(["Please check the I'm not robot (recaptcha)"])
      return false
    }
    else{
      try {
    
      
        const response = await addComment(formData);
  
        console.log(response);
  
        await router.push({
          pathname: "/loading-operation-public",
          query: { message: response.message },
        });
  
        
          await router.replace(`/single-blog?id=${data.blogPostID}#commentForm`);
       
  
        setSuccess(true);
        setSuccessMessage(response.message);
      } catch (er: any) {
        console.log(er);
        if (er.response != undefined) {
          const errorMessages = handleErrors(er);
           callAlertErrorPublic(errorMessages)
          return false;
        }
      }
    }
    
  };


//@ts-ignore
const handleSubmit = async (e) => {
  e.preventDefault();
  changeSubmitFormAbility(false);

  const isValid = await validate();
  if (isValid) {
    setFormData(initialData)
  
  }
  if (messageRef.current != null) {
    //@ts-ignore
    messageRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
  changeSubmitFormAbility(true);

  if (messageRef.current != null) {
    //@ts-ignore
    messageRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
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
    {console.log(formData)}
     <div className="mb-4 mt-12" id="commentForm">
  
 
              <form 
               onSubmit={async (e) => {
                changeSubmitFormAbility(false);
                await handleSubmit(e);
                changeSubmitFormAbility(true);
              }}
              className="w-full max-w-xl bg-white rounded-lg">
                <div className="flex flex-wrap mb-6">
                  <h2 className="pt-3 pb-2 text-gray-800 text-lg font-bold">
                    Add a new comment
                  </h2>
                  <div className="w-full md:w-full mb-2 mt-2">
                    <input type="text"
                      className="  leading-normal resize-none w-1/2 h-10 py-4 px-3 focus:outline-none text-sm"
                      name="writerName"
                      placeholder="Name"
                      onChange={(e) => changeInput(e)}
                      value={formData.writerName}
                      required
                    />
                  </div>
                  <div className="w-full md:w-full mb-2 mt-2">
                    <textarea
                      className="leading-normal resize-none w-full h-32 py-4 px-3 focus:outline-none  text-sm"
                      name="text"
                      onChange={(e) => changeInput(e)}
                      placeholder="Type Your Comment"
                      required
                      value={formData.text}
                    ></textarea>
                  </div>
                  <div className="flex mb-2">
                  <ReCAPTCHA
                      sitekey={"6LdT-e8jAAAAAFzJIjjmBMi8OfzRa49vuNulJnje"}
                      secretKey={"6LdT-e8jAAAAAGxZp8eQrOr-1BbLiEH8Gy8aa61Z"}
                     
                      onChange={verifyCallback}
                      onExpired={expiredCallback}
                    
                    />
                  </div>
                
                
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
                    Post Comment 
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
          
    </>
  )
}
export default CommentForm
