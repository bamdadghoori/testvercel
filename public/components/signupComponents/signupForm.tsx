import React,{useState} from 'react'
import ProgressLoading from '../progressLoading'
import { useRouter } from 'next/router'
 const SignupForm = () => {
  const router=useRouter();

  const[loading,setLoading]=useState(false)
 
  //link to pages
     const goToPage=async(title:string)=>{
      setLoading(true)
     await router.push(`${title}`)
      setLoading(false)
     }

  return (
    <>
    {loading && <ProgressLoading/>}
      <section className="py-12 bg-colorGray-50  wow animate__animated animate__fadeIn animated">
        <div className="container">
          <div className="flex max-w-md mx-auto flex-col text-center">
            <div className="mt-12 mb-8 p-8 bg-white rounded shadow">
              <h4 className="mb-6 text-3xl">Create an Account</h4>
              <div
                className="flex mb-4 px-4 bg-colorGray-50 rounded border border-gray-200  wow animate__animated animate__fadeIn animated"
              >
                <input
                  className="w-full py-4 text-xs placeholder-colorGray-400 font-semibold leading-none bg-colorGray-50 outline-none"
                  type="email"
                  placeholder="Username"
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
              <div
                className="flex mb-4 px-4 bg-colorGray-50 rounded border border-gray-200  wow animate__animated animate__fadeIn animated"
              >
                <input
                  className="w-full py-4 text-xs placeholder-colorGray-400 font-semibold leading-none bg-colorGray-50 outline-none"
                  type="email"
                  placeholder="Email"
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
              <div
                className="flex mb-6 px-4 bg-colorGray-50 rounded border border-gray-200  wow animate__animated animate__fadeIn animated"
              >
                <input
                  className="w-full py-4 text-xs placeholder-colorGray-400 font-semibold leading-none bg-colorGray-50 outline-none"
                  type="password"
                  placeholder="Enter your password"
                />
                <button className="ml-4">
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
                </button>
              </div>
            
             
                <div
                  className="flex mb-6 px-4 bg-colorGray-50 rounded border border-gray-200  wow animate__animated animate__fadeIn animated"
                >
                  <input
                    className="w-full py-4 text-xs placeholder-colorGray-400 font-semibold leading-none bg-colorGray-50 outline-none"
                    type="password"
                    placeholder="Confirm password"
                  />
                  <button className="ml-4">
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
                  </button>
                </div>
              

              <div
                className="float-left mb-8 wow animate__animated animate__fadeIn animated"
                data-wow-delay=".1s"
              >
                <label className="inline-flex text-xs">
                  <input type="checkbox" className="form-checkbox"  />
                  <span className="ml-2"
                    >I agree to
                    <a className="underline hover:text-colorGray-500" href="#"
                      >Police privacy</a
                    >
                    and
                    <a className="underline hover:text-colorGray-500" href="#"
                      >Terms of Use</a
                    ></span
                  >
                </label>
              </div>

              <button
                className="transition duration-300 ease-in-out transform hover:-translate-y-1 block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-color-550 hover:bg-color-700 rounded"
              >
                Sign Up Now
              </button>
              <p
                className="my-6 text-xs text-colorGray-400 text-center font-semibold"
              >
                or continue with
              </p>
              <button
                className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center w-full px-4 py-3 mb-2 text-xs text-colorGray-500 font-semibold leading-none border border-gray-200 hover:bg-colorGray-50 rounded"
                
              >
                <img
                  className="h-6 pr-10"
                  src="assets/imgs/logos/facebook-sign.svg"
                />
                <span>Sign Up with Facebook</span>
              </button>
              <button
                className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center px-4 py-3 w-full text-xs text-colorGray-500 font-semibold leading-none border border-gray-200 hover:bg-colorGray-50 rounded"
              
              >
                <img
                  className="h-6 pr-10"
                  src="assets/imgs/logos/google-sign.svg"
                />
                <span>Sign Up with Google</span>
              </button>

              <div className="w-full mt-12 mx-auto text-center">
                <p className="text-sm">
                  Already have an account?
                  <a
                    className="inline-block text-xs text-color-600 hover:text-color-700 font-semibold leading-none wow animate__animated animate__fadeIn animated cursor-pointer"
                    data-wow-delay=".1s"
                  onClick={(e)=>{e.preventDefault();goToPage('/login')}}
                    >Sign in now</a
                  >
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs text-colorGray-400 text-center">
                <a className="underline hover:text-colorGray-500" href="#"
                  >Police privacy</a
                >
                and
                <a className="underline hover:text-colorGray-500" href="#"
                  >Terms of Use</a
                >
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default SignupForm