import React from 'react'

 const PricingPlans = () => {
  return (
    <>
     <section
        className="py-20 xl:bg-contain bg-top bg-no-repeat"
        style=
        {{"backgroundImage": "url('assets/imgs/backgrounds/intersect-purple.svg')"}}
        
      >
        <div className="container">
          <div className="text-center mb-8">
            <h2
              className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeInUp animated"
            >
              <span>Choose Your </span>
              <br />
              <span className="text-color-550">Best </span>
              <span>Pricing Plan</span>
            </h2>
            <p
              className="max-w-sm mx-auto text-lg text-colorGray-400 wow animate__animated animate__fadeInUp animated"
              data-wow-delay=".3s"
            >
              Great Things In Business Are Never Done By One Person
            </p>
          </div>
          <div className="flex flex-wrap sm:justify-center mb-10">
            <label
              className="flex items-center mr-8 mb-2 wow animate__animated animate__fadeInUp animated"
              data-wow-delay=".3s"
            >
              <input type="radio" name="billing" value="1" />
              <span className="mx-2 font-semibold">Monthly Billing</span>
              <span
                className="inline-flex items-center justify-center w-12 h-10 bg-color-550 text-white font-semibold rounded"
                >$59</span
              >
            </label>
            <label
              className="flex items-center mb-2 wow animate__animated animate__fadeInUp animated"
              data-wow-delay=".5s"
            >
              <input type="radio" name="billing" value="2" />
              <span className="mx-2 font-semibold">Annual Billing</span>
              <span
                className="inline-flex items-center justify-center w-12 h-10 bg-color-550 text-white font-semibold rounded"
                >$99</span
              >
            </label>
          </div>
          <div
            className="flex flex-wrap bg-white rounded shadow wow animate__animated animate__fadeInUp animated"
          >
            <div className="w-full md:w-1/2 lg:w-2/5 px-3">
              <div className="p-8 text-center">
                <span className="text-colorGray-400">Sign In</span>
                <h4 className="mb-6 text-2xl">Setup your payment</h4>
                <div className="flex mb-4 px-4 bg-[#283036] rounded">
                  <input
                    className="w-full py-4 text-xs placeholder-colorGray-400 font-semibold leading-none bg-colorGray-100 outline-none"
                    type="email"
                    placeholder="name@email.com"
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
                <div className="flex mb-6 px-4 bg-[#283036] rounded-4 rounded">
                  <input
                    className="w-full py-4 text-xs placeholder-colorGray-400 font-semibold leading-none  outline-none"
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
                <div className="text-left mb-5 text-sm text-colorGray-400">
                  <label>
                    <input type="checkbox" name="terms" value="1" />
                    <span className="ml-1">I agree to terms and conditions.</span>
                  </label>
                </div>
                <button
                  className="duration-500 custom-button block w-full p-4 text-center text-xs  font-semibold leading-none"
                >
                  Purchase now
                </button>
              </div>
            </div>
            <div
              className="relative w-full md:w-1/2 lg:w-3/5 px-3 bg-color-550 rounded-r overflow-hidden"
            >
              <div className="max-w-sm px-12 pt-12">
                <span className="text-xs text-color-200"
                  >Various Analysis Options</span
                >
                <h3 className="mb-4 text-4xl font-bold font-heading text-white">
                  Techno Provides Realtime Best Data Solutions.
                </h3>
              </div>
              <div className="absolute right-0 bottom-0">
                <div className="flex items-center h-full">
                  <img
                    className="h-80"
                    src="assets/imgs/illustrations/online-shopping.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default PricingPlans