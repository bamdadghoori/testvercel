import React,{useEffect} from 'react'
import axios from 'axios'
 const ProjectPlans = () => {
  
   
  return (
    <>
    <section className="py-20 bg-colorGray-50" id="how-we-work">
        <div className="container px-4 mx-auto">
          <div
            className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12"
          >
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <h2
                className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown"
              >
                <span>How does it</span>
                <span className="text-color-550"><>&nbsp;</>all </span>
                
                <span>work?</span>
              </h2>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-16">
              <p
                className="text-colorGray-400 leading-loose wow animate__animated animate__fadeInUp"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis. Quisque vitae nulla malesuada,
                auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id
                imperdiet.
              </p>
            </div>
          </div>
          <div className="flex  flex-wrap -mx-3 -mb-6 text-center">
            <div
              className="flex flex-1 hover-up-5   top-0 relative w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="p-12 bg-whites card shadows roundeds">
                <div
                  className="flex w-12 h-12 mx-auto items-center justify-center text-color-800 font-bold font-heading bg-color-200 rounded-full"
                >
                  1
                </div>
                <img
                  className="h-48 mx-auto my-4"
                  src="assets/imgs/illustrations/eating.svg"
                  alt=""
                />
                <h3 className="mb-2 font-bold font-heading">
                Customized solution
                </h3>
                <p className="text-sm text-colorGray-800 leading-relaxed text-left">
                We'll get to the bottom of your request, we analyze your needs, data structures, competitions, and the targets that bring you the best value, and we'll offer the best solution for your problem.
                </p>
              </div>
            </div>
            <div
              className="flex flex-1  hover-up-5 top-0 relative w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="p-12 bg-whites card shadows roundeds">
                <div
                  className="flex w-12 h-12 mx-auto items-center justify-center text-color-800 font-bold font-heading bg-color-200 rounded-full"
                >
                  2
                </div>
                <img
                  className="h-48 mx-auto my-4"
                  src="assets/imgs/illustrations/space.svg"
                  alt=""
                />
                <h3 className="mb-2 font-bold font-heading">
                Dedicated team assignation
                </h3>
                <p className="text-sm text-colorGray-800 leading-relaxed text-left text-left">
                a dedicated team of professional software developers and your project manager will be assigned to you. 
                </p>
              </div>
            </div>
            <div className="flex flex-1 hover-up-5 top-0 relative w-full lg:w-1/3 px-3 mb-6">
              <div
                className="p-12 bg-whites shadows card roundeds wow animate__animated animate__fadeInUp"
                data-wow-delay=".7s"
              >
                <div
                  className="flex  w-12 h-12 mx-auto items-center justify-center text-color-800 font-bold font-heading bg-color-200 rounded-full"
                >
                  3
                </div>
                <img
                  className="h-48 mx-auto my-4"
                  src="assets/imgs/illustrations/tasks.svg"
                  alt=""
                />
                <h3 className="mb-2 font-bold font-heading">Development begins</h3>
                <p className="text-sm text-colorGray-800 leading-relaxed text-left text-left">
                We'll start the project ASAP based on the agreed-upon schedule and you will have a dedicated contact who will inform you about the project's status anytime you want. 
To ensure your satisfaction we'll give you many prototypes so if you came up with any new ideas we'll be the first to know and tailor the outcome to your business's needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ProjectPlans
