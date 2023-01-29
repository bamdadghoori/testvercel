import React from 'react'

 const ContactUsForm = () => {
  return (
    <>
     <section className="pb-20 mt-10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="max-w-md mb-8 mx-auto">
              <span
                className="text-xs py-1 px-3 text-color-550 font-semibold bg-color-50 rounded-xl wow animate__animated animate__fadeInDown"
                data-wow-delay=".9s"
                >Contact Us</span
              >
              <h2
                className="mt-2 text-4xl font-bold font-heading wow animate__animated animate__fadeInUp"
                data-wow-delay=".3s"
              >
                We will <span className="text-color-550">be glad</span> to hear from
                you!
              </h2>
            </div>
            <div>
              <form>
               
                <div
                  className="mb-4 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <input
                    className="w-full p-4 text-xs font-semibold leading-none bg-colorGray-50 rounded outline-none"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <div
                  className="mb-4 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <input
                    className="w-full p-4 text-xs font-semibold leading-none bg-colorGray-50 rounded outline-none"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div
                  className="mb-4 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <input
                    className="w-full p-4 text-xs font-semibold leading-none bg-colorGray-50 rounded outline-none"
                    type="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div
                  className="mb-4 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <textarea
                    className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-colorGray-50 rounded outline-none"
                    placeholder="Message..."
                  ></textarea>
                </div>
              
                <div
                  className="flex justify-between items-center wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                
                  <button
                    className="duration-500 custom-button py-4 px-8 text-sm text-white font-semibold leading-none "
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ContactUsForm
