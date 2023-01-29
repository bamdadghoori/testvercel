import React,{useState,useRef} from 'react'
import { useRouter } from 'next/router';
import { handleErrors } from '../../apiFunctions';
import { addComment } from '../../apiFunctions';
import { callAlertErrorPublic } from '../usefullFunctions';
//@ts-ignore
import ReCAPTCHA from "react-google-recaptcha";



 const ReplyModal = ({showReplyModal,data,parentComment,changeShowReplyState}:{showReplyModal:boolean,parentComment:any,data:any,changeShowReplyState:(...args:boolean[])=>void}) => {
  
  

const[commentText,setCommentText]=useState('')


const [success, setSuccess] = useState(false);
const [successMessage, setSuccessMessage] = useState("");
const [recaptchaResponse,setRecaptchaResponse]=useState(false)

const router=useRouter()

const initialData={
commentId: 0,
commentParentId: parentComment.commentId,
blogId: data.blogPostID,
text: "",
isAccepted:false,
writerName: ""
}

//refrence to error or success message in page

const messageRef = useRef(null);


const [formData,setFormData]=useState(initialData)
const [enableSubmitForm, setEnableSubmitForm] = useState(true);

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

  if(recaptchaResponse===false){
    callAlertErrorPublic(["Please check the I'm not robot (recaptcha)"])
    return false
  }
  else{
    try {
  
    
      const response = await addComment(formData);
  
      console.log(response);
  
      await router.replace({
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
  // setFormData(initialData)

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
     <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className={`reply-modal ${showReplyModal ? 'opacity-1 z-50 visible animate__fadeInDown':'opacity-0 z-0 hidden animate__fadeOutDown'}    flex items-center justify-center fixed top-0 left-0 right-0  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal`}
      >
        <div className={`duration-300  animate__animated   ${showReplyModal ? 'opacity-1 z-50 animate__fadeInDown':'opacity-0 animate__fadeOutDown'} card p-3 relative flex items-center max-w-2xl md:h-auto`}>
          <div className="relative text-sm  rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between  rounded-t ">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
         
                Reply to  this comment
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
             onClick={()=>changeShowReplyState(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="flex  flex-wrap items-center p-6 px-10 space-y-6">
         
                <form
                    onSubmit={async (e) => {
                        changeSubmitFormAbility(false);
                        await handleSubmit(e);
                        changeSubmitFormAbility(true);
                      }}

                className="flex w-full flex-wrap">
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
                  <div className="w-full">
                  <button
                  type='submit'
                    className="transition w-fit duration-300 ease-in-out transform hover:-translate-y-1 block p-4 text-center text-xs text-white font-semibold leading-none custom-button"
                  >
                    Post Comment
                  </button>
                  <div
                  className={`${
                    enableSubmitForm == false ? " " : "opacity-0"
                  } flex  w-full justify-center items-center`}
                >
                  <img
                    className="loading-button-login"
                    src="/assets/imgs/loading-button-public.gif"
                    alt="loading"
                  />
              
                </div>
                  </div>
                  </form>
            </div>

        
          </div>
        </div>
      </div>
    </>
  )
}
export default ReplyModal
