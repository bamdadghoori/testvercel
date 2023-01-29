import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

import { useState } from 'react'

export default function Document() {
       

  return (
    
    <Html  lang="en_US" className='sizes websockets customelements history postmessage webworkers picture pointerevents webanimations webgl srcset flexbox cssanimations csscolumns csscolumns-width csscolumns-span csscolumns-fill csscolumns-gap csscolumns-rule csscolumns-rulecolor csscolumns-rulestyle csscolumns-rulewidth csscolumns-breakbefore csscolumns-breakafter csscolumns-breakinside'  style={{'overflow': 'visible'}}>
      
          <Head>
      <meta charSet="UTF-8" />
      <meta property="og:locale" content="en_US"/>
      <meta property="og:site_name" content="Flamincode"/> 
      <meta property="og:article:publisher" content="flamincode.com"/> 
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.0/css/all.min.css" integrity="sha512-3PN6gfRNZEX4YFyz+sIyTF6pGlQiryJu9NlGhu9LrLMQ7eDjNgudQoFDK3WSNAayeIKc6B8WXXpo4a7HqxjKwg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    
   </Head>
   <body onLoadedData={()=>{setIsLoading(false)}} className='bg-white text-body font-body' style={{'overflow': 'visible'}}>
    {/* {isLoading &&   <div id="preloader-active">
      <div className="preloader flex-1 content-center">
    
        <div className="logo absolute inset-y-2/4 jump">
          <img src="../public/assets/imgs/logos/favicon.svg" alt="" />
          <h1 className="text-lg font-semibold">Monst</h1>
        </div>
      </div>
    </div>} */}
   <Main />
  
   <NextScript />
   {/* <Script src="https://www.recaptcha.net/recaptcha/api.js" async defer></Script> */}
 </body>
 
    </Html>

  )
}