import React, { useState, useEffect, useRef } from "react";
import ProgressLoading from "../progressLoading";
import { useRouter } from "next/router";
import { postLoginForm } from "../../apiFunctions";
import { Cookies, useCookies } from "react-cookie";
import { handleErrors } from "../../apiFunctions";
//@ts-ignore
import ReCAPTCHA from "react-google-recaptcha";
import { callAlertErrorPublic } from "../usefullFunctions";
import swal from "sweetalert";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
//@ts-ignore
// import Cookies from 'cookies'

const LoginForm = () => {
  const btnRef = useRef(null);
  // swal('hello')

  const MySwal = withReactContent(Swal);


  const [loading, setLoading] = useState(false);
  const router = useRouter();
  //link to pages

  const [showPassword, setShowPassword] = useState(false);

  //controlled component
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
    clientModel: "browser",
  });

  const [errors, setErrors] = useState([]);
  const [enableSubmitForm, setEnableSubmitForm] = useState(true);
   const [recaptchaResponse,setRecaptchaResponse]=useState(false)

  

  const changeSubmitFormAbility = (state: boolean) => {
    setEnableSubmitForm(state);
  };

  //to set inputs controlled
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const name = e.target.name;
    setFormData({ ...formdata, [name]: e.target.value });
  };

  const changePasswordVisibility = (visibility: boolean) => {
    setShowPassword(visibility);
  };

  const goToPage = async (title: string) => {
    setLoading(true);
    await router.replace(`${title}`);
    setLoading(false);
  };

  const validate = async () => {
    changeSubmitFormAbility(false);
    console.log('line 104',recaptchaResponse)
    if(recaptchaResponse===false){
      callAlertErrorPublic(["Please check the I'm not robot (recaptcha)"])
      return false
    }
    else{
      try {
        const response = await postLoginForm(formdata);
        console.log(response);
        window.localStorage.setItem("jwt", response.jwtToken);
  
        //  document.cookie=response.refreshToken
        //    setCookie("user",response.refreshToken, {
        //      //using withCreditional in axios to httponly
  
        //  //  httpOnly:true
        //      })
        goToPage("/panel");
      } catch (er: any) {
        console.log(er);
  
        const errorMessages = handleErrors(er);
        console.log(errorMessages);
        callAlertErrorPublic(errorMessages);
        // setErrors(errorMessages);
        return false;
      }
    }
  
  };
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await validate();
    changeSubmitFormAbility(true);
  };

  useEffect(() => {}, [errors]);


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

      {/* <button onClick={()=>fireSweetAlert()}>fds</button> */}
      {/* {console.log(document.cookie)} */}

      {/* {
   //@ts-ignore
   console.log(cookie.user)} */}
      {console.log(errors)}

      {loading && <ProgressLoading />}
{/* <button  onClick={verifyCallback}>fas</button> */}
      <section className="relative pb-20">
        {/* <img src="/assets/imgs/icons/error-icon.svg"/> */}
        <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto">
          <div
            className="flex items-center h-full wow animate__animated animate__fadeIn animated"
            data-wow-delay=".1s"
          >
            <img
              className="lg:max-w-lg mx-auto"
              src="assets/imgs/illustrations/space.svg"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <div className="relative flex flex-wrap pt-12">
            <div className="lg:flex lg:flex-col w-full lg:w-1/2 py-6 lg:pr-20">
              {errors.length > 0 && (
                <div className="flex flex-wrap rounded  justify-center items-center relative bottom-4">
                  {errors.map((el: any) => {
                    return (
                      <>
                        <div
                          className="text-white bg-color-alert-3 message-shadow flex font-bold px-4 py-3 rounded relative"
                          role="alert"
                        >
                          {el}!!
                        </div>
                      </>
                    );
                  })}
                </div>
              )}
              <form
          
              onSubmit={(e) => submitForm(e)}>
                <div
                  className="w-full max-w-lg mx-auto lg:mx-0 my-auto wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".3s"
                >
                  <span className="text-sm text-colorGray-400">Sign In</span>
                  <h4 className="mb-6 text-3xl">Join our community</h4>
                  <div className="flex mb-4 px-4 input-container bg-[#283036]">
                    <input
                      className="w-full py-4 text-xs placeholder-colorGray-400 font-semibold leading-none bg-colorGray-50 outline-none"
                      type="text"
                      name="email"
                   
                      placeholder="name@email.com"
                      required
                     
                      onChange={(e) => changeInput(e)}
                      value={formdata.email}
                      onInput={(e) =>
                        (e.target as HTMLInputElement).setCustomValidity("")
                      }
                      onInvalid={(e) =>
                        (e.target as HTMLInputElement).setCustomValidity(
                          "Enter your Email Here"
                        )
                      }
                    />
                    <svg
                      className="h-6 w-6 ml-4 my-auto text-colorGray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex mb-6 px-4  input-container bg-[#283036]">
                    <input
                      className="w-full py-4 text-xs placeholder-colorGray-400 font-semibold leading-none bg-colorGray-50 outline-none"
                      name="password"
                      type={`${showPassword ? "text" : "password"}`}
                      placeholder="Enter your password"
                      required
                      value={formdata.password}
                      onChange={(e) => changeInput(e)}
                      onInput={(e) =>
                        (e.target as HTMLInputElement).setCustomValidity("")
                      }
                      onInvalid={(e) =>
                        (e.target as HTMLInputElement).setCustomValidity(
                          "Enter your Password Here"
                        )
                      }
                    />
                    <button
                      className="ml-4"
                      onClick={(e) => {
                        e.preventDefault();
                        changePasswordVisibility(!showPassword);
                      }}
                    >
                      {showPassword ? (
                        <svg
                          className="h-6 w-6 my-auto text-colorGray-300"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          width="25px"
                          height="25px"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 502.738 502.738"
                          stroke-width="2"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            stroke-width="2"
                            d="M497.588,231.909c-25.616-44.8-63.561-81.419-109.958-106.194l61.042-61.042c2.929-2.929,2.929-7.678,0-10.606
                       c-2.929-2.929-7.678-2.929-10.606,0L212.179,279.953c-6.042-8.253-9.31-18.181-9.31-28.583c0-26.743,21.757-48.5,48.5-48.5
                       c4.719,0,9.381,0.675,13.855,2.006c3.971,1.181,8.146-1.08,9.327-5.05c1.181-3.97-1.08-8.146-5.05-9.327
                       c-5.863-1.744-11.964-2.628-18.132-2.628c-35.014,0-63.5,28.486-63.5,63.5c0,14.411,4.798,28.122,13.614,39.28l-23.437,23.437
                       c-14.976-17.475-23.177-39.531-23.177-62.717c0-53.21,43.29-96.5,96.5-96.5c15.708,0,30.683,3.652,44.511,10.854
                       c3.674,1.913,8.204,0.486,10.117-3.188c1.914-3.673,0.486-8.203-3.187-10.116c-15.764-8.211-33.552-12.551-51.44-12.551
                       c-61.481,0-111.5,50.019-111.5,111.5c0,27.182,9.74,53.032,27.533,73.361l-41.179,41.179
                       c-45.745-23.452-83.101-58.89-108.052-102.525c-4.237-7.41-4.241-16.61-0.01-24.011c46.724-81.731,136.083-132.504,233.208-132.504
                       c29.332,0,58.146,4.547,85.645,13.515c3.938,1.284,8.171-0.867,9.456-4.805c1.284-3.938-0.867-8.172-4.805-9.456
                       c-29.002-9.458-59.381-14.254-90.295-14.254c-102.493,0-196.842,53.667-246.23,140.06c-6.855,11.993-6.851,26.898,0.011,38.901
                       c25.616,44.8,63.562,81.419,109.958,106.194l-61.042,61.042c-2.929,2.929-2.929,7.678,0,10.606c1.464,1.464,3.384,2.197,5.303,2.197
                       s3.839-0.732,5.303-2.197l225.887-225.887c6.042,8.253,9.31,18.181,9.31,28.583c0,26.743-21.757,48.5-48.5,48.5
                       c-4.729,0-9.399-0.678-13.881-2.014c-3.969-1.184-8.146,1.076-9.33,5.045c-1.183,3.97,1.075,8.146,5.045,9.33
                       c5.874,1.751,11.985,2.639,18.167,2.639c35.014,0,63.5-28.486,63.5-63.5c0-14.412-4.798-28.122-13.613-39.28l23.437-23.437
                       c14.976,17.475,23.176,39.532,23.176,62.717c0,53.21-43.29,96.5-96.5,96.5c-15.707,0-30.683-3.652-44.511-10.854
                       c-3.672-1.914-8.203-0.486-10.116,3.188c-1.914,3.674-0.486,8.203,3.187,10.116c15.765,8.211,33.552,12.551,51.44,12.551
                       c61.481,0,111.5-50.019,111.5-111.5c0-27.182-9.741-53.032-27.532-73.361l41.179-41.179
                       c45.746,23.453,83.101,58.891,108.051,102.525c4.237,7.41,4.241,16.611,0.01,24.011c-46.723,81.731-136.083,132.504-233.208,132.504
                       c-31.541,0-62.401-5.241-91.722-15.577c-3.908-1.376-8.19,0.674-9.566,4.58c-1.377,3.907,0.673,8.19,4.58,9.567
                       c30.928,10.902,63.465,16.43,96.709,16.43c102.493,0,196.843-53.668,246.23-140.059
                       C504.455,258.818,504.451,243.911,497.588,231.909z"
                          />
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                        </svg>
                      )}
                    </button>
                  </div>

                  <div
                    className="float-left mb-6 wow animate__animated animate__fadeIn animated"
                    data-wow-delay=".1s"
                  >
                
                  </div>
                  <div className="flex mb-2">
                  <ReCAPTCHA
                      sitekey={"6LdT-e8jAAAAAFzJIjjmBMi8OfzRa49vuNulJnje"}
                      secretKey={"6LdT-e8jAAAAAGxZp8eQrOr-1BbLiEH8Gy8aa61Z"}
                     
                      onChange={verifyCallback}
                      onExpired={expiredCallback}
                    
                    />
                  </div>
                  <div className="w-full mb-6 mx-auto text-left">
                                <p>Have you forgotten password? <span className="inline-block duration-200 text-blue-600 hover:text-color-550  leading-none wow animate__animated animate__fadeIn animated cursor-pointer"  data-wow-delay=".1s" onClick={()=>goToPage('/forgotPassword')} >Click this!</span></p>
                            </div>
                  <button
                    type="submit"
                    value="Sign In"
                    className={`${
                      enableSubmitForm ? "cursor-pointer" : "cursor-not-allowed"
                    } transition duration-300 ease-in-out transform hover:-translate-y-1 block w-full p-4 text-center text-xs font-semibold leading-none custom-button`}
                    disabled={enableSubmitForm == false ? true : false}
                  >Sign in</button>
                </div>
                <div
                  className={`${
                    enableSubmitForm == false ? " " : "opacity-0"
                  } flex mt-5 w-full justify-center items-center`}
                >
                  <img
                    className="loading-button-login"
                    src="/assets/imgs/loading-button-public.gif"
                    alt="loading"
                  />
        
                            </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LoginForm;
