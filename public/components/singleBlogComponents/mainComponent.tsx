import React,{useEffect,useState} from 'react'
import Tags from './tags'
import DOMPurify from 'isomorphic-dompurify';
 const MainComponent = ({data}:{data:any}) => {
          
  let cleanData :any= DOMPurify.sanitize(data.fullText);
 console.log(data.fullText)


 function createMarkup() {
  return {__html:data.fullText};
}
console.log(createMarkup())
  return (
   
    <>
    
    <div>
      <div className="editor">
     <div dangerouslySetInnerHTML= {createMarkup()}></div>
     </div>
      <a
              href="#"
              target="_blank"
              className="inline-flex items-center text-gray-600 dark:text-gray-200 hover:underline mt-8 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".1s"
            >
              <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
                <title>Logo Twitter</title>
                <path
                  d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"
                ></path>
              </svg>
              <span className="mx-2">Share on twitter</span>
            </a>


   {/* author section */}
   <Tags tags={data.tags}/>
            <div className="flex flex-wrap mt-12 mb-12">
              <div className="w-full">
                <div
                  className="px-6 py-10 card border-none relative top-0 hover-up-5 top-0 relative ease duration-300 wow animate__ animate__fadeInUp animated  animated"
                  data-wow-delay=".1s"
                >
                  <div className="flex items-center mb-4">
                    <img
                      className="h-16 w-16 rounded-full object-cover"
                      src="/assets/imgs/placeholders/avatar-1.png"
                      alt=""
                    />
                    <div className="pl-4">
                      <strong className="mt-6 mb-1 text-md">Geraldine Tusoy</strong>
                      <p className="text-xs mt-3">CEO, Co Founders</p>
                    </div>
                  </div>
                  <p className="leading-loose mb-5 text-sm">
                    Donec consequat tortor risus, at auctor felis consequat a.
                    Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                    pulvinar. Vestibulum non quam velit.
                  </p>
                </div>
              </div>
            </div>
{/* {data!=null &&  data.title} */}
   
      {/* <p
              className="mb-6 leading-loose text-colorGray-400 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".1s"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              commodo est eget consequat imperdiet. Suspendisse laoreet
              scelerisque lobortis. Mauris facilisis hendrerit nulla at
              vehicula. Suspendisse potenti. Ut in nulla a purus bibendum
              convallis. Suspendisse id nunc maximus, suscipit nte ac, vulputate
              massa. Sed ut nunc suscipit, bibendum arcu a, interdum elit.
              Nullam laoreet mollis dictum. Ut suscipit, magna at elementum
              iaculis, erat erat fermentum justo, sit amet ultrices enim leo sit
              amet purus. Nulla sed erat molestie, auctor mauris lobortis,
              iaculis justo.
            </p>
            <div
              className="w-full mx-auto px-12 pt-5 pb-10 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".1s"
            >
              <div className="w-full mb-6 border-l-4 border-gray-100">
                <p className="text-lg text-gray-600 px-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                  obcaecati laudantium recusandae, debitis eum voluptatem ad,
                  illo voluptatibus temporibus odio provident.
                </p>
              </div>
              <div className="w-full pl-6">
                <p className="text-md text-indigo-500 font-bold">Scott Windon</p>
                <p className="text-xs text-gray-500">@scott.windon</p>
              </div>
            </div>
            <p
              className="mb-6 leading-loose text-colorGray-400 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".1s"
            >
              Duis hendrerit dui in dui ornare luctus. Nullam gravida tincidunt
              lorem cursus suscipit. Integer scelerisque sem et sem porta, eu
              volutpat mi tempor. Duis interdum sodales lacus non tempor. Nam
              mattis, sapien a commodo ultrices, nunc orci tincidunt ante,
              tempus tempus turpis metus laoreet lacus. Praesent condimentum,
              arcu ut fringilla tincidunt, augue diam pretium augue, sit amet
              vestibulum nunc felis vel metus. Duis dolor nulla, pellentesque
              non ultrices ut, convallis eu felis. Duis luctus tempor arcu,
              vitae elementum massa porta non. Morbi aliquet, neque ut volutpat
              sodales, dui enim facilisis enim, ut dictum lacus neque in urna.
              Nam metus elit, ullamcorper pretium nisi at, aliquet gravida
              lectus. Nullam id lectus pellentesque, suscipit dolor eget,
              consequat velit. Pellentesque finibus commodo nisl, id interdum
              leo. Maecenas aliquam felis justo, ut sagittis nunc maximus ut.
            </p>
            <p
              className="leading-loose text-colorGray-400 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".1s"
            >
              Duis dolor nulla, pellentesque non ultrices ut, convallis eu
              felis. Duis luctus tempor arcu, vitae elementum massa porta non.
              Morbi aliquet, neque ut volutpat sodales, dui enim facilisis enim,
              ut dictum lacus neque in urna. Nam metus elit, ullamcorper pretium
              nisi at, aliquet gravida lectus. Nullam id lectus pellentesque,
              suscipit dolor eget, consequat velit. Pellentesque finibus commodo
              nisl, id interdum leo. Maecenas aliquam felis justo, ut sagittis
              nunc maximus ut.
            </p>
            <a
              href="#"
              target="_blank"
              className="inline-flex items-center text-gray-600 dark:text-gray-200 hover:underline mt-8 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".1s"
            >
              <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
                <title>Logo Twitter</title>
                <path
                  d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"
                ></path>
              </svg>
              <span className="mx-2">Share on twitter</span>
            </a>
           
            <div className="flex flex-wrap mt-12 mb-12">
              <div className="w-full">
                <div
                  className="px-6 py-10 bg-white shadow rounded hover-up-5 top-0 relative wow animate__animated animate__fadeInUp animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <div className="flex items-center mb-4">
                    <img
                      className="h-16 w-16 rounded-full object-cover"
                      src="/assets/imgs/placeholders/avatar-1.png"
                      alt=""
                    />
                    <div className="pl-4">
                      <strong className="mt-6 mb-1 text-md">Geraldine Tusoy</strong>
                      <p className="text-xs mt-3">CEO, Co Founders</p>
                    </div>
                  </div>
                  <p className="leading-loose mb-5 text-sm">
                    Donec consequat tortor risus, at auctor felis consequat a.
                    Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                    pulvinar. Vestibulum non quam velit.
                  </p>
                </div>
              </div>
            </div> */}
            </div>
    </>
  )
}
export default MainComponent