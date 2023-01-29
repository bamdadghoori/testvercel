import React from 'react'

 const TopSection = () => {
  return (
    <>
    <div
          className="pt-20 pb-8 mb-12 bg-cover  bg-no-repeat analyze-background"
          
        >
        
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <span className="text-base md:text-lg">
                  <a className="text-color-50 hover:underline" href="#"
                    ><span
                      className="inline-block py-1 px-3 text-xs font-semibold bg-color-50 text-color-550 rounded-xl mr-3"
                      >Bussiness</span
                    ></a
                  >
                  <span className="text-sm font-bold text-color-550">24 Jan, 2021</span>
                </span>
                <h2
                  className="text-4xl md:text-5xl mt-4 text-color-550 font-bold font-heading"
                >
                  Best Tailwind CSS template for your SASS landing site
                </h2>
              </div>
              <div className="flex justify-center mb-8">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src="/assets/imgs/placeholders/avatar-8.png"
                  alt=""
                />
                <div className="pl-4">
                  <p className="text-colorGray-100 mb-1">Alice Bradley</p>
                  <p className="text-xs text-colorGray-200 font-semibold">Author</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
export default TopSection
