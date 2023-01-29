import React from 'react'

 const KeyFeatures = () => {
  return (
   <>
   <section
        className="py-12 md:py-16 lg:py-32 overflow-x-hidden"
        id="key-features"
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/2">
              <div
                className="lg:py-6 lg:pr-32 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className="mb-4">
                  <span
                    className="text-xs py-1 px-3 text-color-550 font-semibold bg-color-50 rounded-xl wow animate__animated animate__fadeInDown"
                    data-wow-delay=".9s"
                    >Why choose us</span
                  >
                  <h2
                    className="text-4xl mt-5 font-bold font-heading wow animate__animated animate__fadeInUp"
                    data-wow-delay=".3s"
                  >
                 Key services
                  </h2>
                </div>
                <div
                  className="flex items-start py-4 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="w-8 mr-5 text-color-550">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold font-heading">
                      
Build your online business
                    </h3>
                    <p className="text-colorGray-400 leading-loose">
                    Whether you are a small business just launching your services or you are a large company wanting to step into the digital world, we cover all the software services that you'll need in the process
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-start py-4 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="w-8 mr-5 text-color-550">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold font-heading">
                     
Free consulting
                    </h3>
                    <p className="text-colorGray-400 leading-loose">
                    Isn't it confusing what to choose in the digital world? whether you should get a website or a mobile application? should you choose this technology or that, and everybody is suggesting something different...
well, we are here for you, we'll consult what's the best-tailored solution for your business, free of charge of course.
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-start py-4 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".9s"
                >
                  <div className="w-8 mr-5 text-color-550">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold font-heading">
                    Data Management
                    </h3>
                    <p className="text-colorGray-400 leading-loose">
                    Do you have a large dataset and need someone to make sense of it?
Do you need user-friendly human-form reports from your company's datasheets? we are here for you!
We have enhanced experience in modern data processing fields like Data mining, Business intelligence, and making sense of data in any way that you need.



                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
              <div
                className="wow animate__animated animate__fadeInRight"
                data-wow-delay=".5s"
              >
                <img
                  className="jump relative mx-auto rounded-xl w-full z-10"
                  src="assets/imgs/placeholders/img-1.png"
                  alt=""
                />
                <img
                  className="absolute top-0 left-0 w-40 -ml-12 -mt-12"
                  src="assets/imgs/elements/blob-tear-purple.svg"
                  alt=""
                />
                <img
                  className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12"
                  src="assets/imgs/elements/blob-tear-purple.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}
export default KeyFeatures