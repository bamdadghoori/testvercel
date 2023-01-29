// tailwind.config.js



 module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./public/components/**/*.{js,ts,jsx,tsx}'] ,
   
  
  darkMode:'class', // or 'media' or 'class'
  theme: {
      colors: {
    
        //dark mode
        "color-50": "#f6efff",
          "color-100": "#748FB5",
           "color-200": "#ffffffbf",
          "color-300": "#fc4b00",
          "color-400": "#bac3ca",
          "color-500": "#ff4e6d",
          "color-550": "#ff6e30",
          "color-600": "#bc3e69",
          "color-650": "#6E757C",
          "color-700": "#bc3e69",
          "color-800": "#6E757C",
          "color-900": "#6a1e8a",
          "color-alert":"#a21caf",
          "color-alert-public":"#ff4e6d",
          "color-alert-2":"#953553 ",
          'color-alert-3':'#F5365C ',
         'slate-900':'rgb(5 17 57 )'

          //    blue-mode
        //   "color-50": "#f6efff",
        //   "color-100": "#e5dbfe",
        //    "color-200": "#d8bffe",
        //   "color-300": "#de93fd",
        //   "color-400": "#d060fa",
        //   "color-550": "#8f3bf6",
        // "color-550": "#8f3bf6",
        //   "color-600": "#a508d8",
        //   "color-650": "#8c08d8",
        //   "color-700": "#a11dd8",
        //   "color-800": "#7a1eaf",
        //   "color-900": "#6a1e8a",
        //   "color-alert":"#a21caf",
        //   "color-alert-2":"#953553 ",
        //   'color-alert-3':'#F5365C ',
        //  'slate-900':'rgb(5 17 57 )'
          
         
          // purple mode
           //"color-50": "#faf5ff",
         //  "color-100": "#f3e8ff",
         //  "color-200": "#e9d5ff",
         //  "color-300": "#d8b4fe",
         //  "color-400": "#c084fc",
         //  "color-550": "#a855f7",
        //  "color-550": "#a855f7",
         //  "color-600": "#9333ea",
         //   "color-650": "#9333ea",
         //  "color-700": "#7e22ce",
         //  "color-800": "#6b21a8",
         //  "color-900": "#581c87"
          

      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1200px",
        "3xl":"1400px"
    },
      container: {
          center: true,
          padding: "1rem"
      },
      fontFamily: {
          heading: ["Poppins, sans-serif"],
          body: ["Montserrat, sans-serif"]
      },
      boxShadow: {
          sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          DEFAULT: "0px 2px 4px rgba(148, 163, 184, 0.05), 0px 6px 24px rgba(235, 238, 251, 0.4)",
          md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
          inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
          none: "none"
      },
      fontSize: {
          xs: ".75rem",
          sm: ".875rem",
          tiny: ".875rem",
          base: "1rem",
          lg: "1.125rem",
          xl: "1.25rem",
          "2xl": "1.5rem",
          "3xl": "1.875rem",
          "4xl": ["2.25rem", "3.2rem"],
          "5xl": ["3rem", "4rem"],
          "6xl": ["4rem", "1rem"],
          "7xl": ["5rem", "1rem"],
        
      },
      extend: {
          keyframes:{
              modalDown:{
                  '0%,50%':{marginTop:-300},
                  '50%,100%':{marginTop:0}
              }
          
          },
          animation:{
              modalDown:'modalDown 0.5s linear'
          },
          width: {
              '3/4': '75%',
            },
          colors: {
              white: "#ffffff",
              body: "#1e293b",


                 //dark-mode
                 "colorGray-50": "#f8fafc",
                 "colorGray-100": "#fff",
                 "colorGray-200": "#e2e8f0",
                 "colorGray-300": "#cbd5e1",
                 "colorGray-400": "#fff",
                 "colorGray-500": "#64748b",
                 "colorGray-600": "#4d4769",
                 "colorGray-700": "#3f3355",
                 "colorGray-800": "#fff",
                 "colorGray-900": "#1f0f2a",
                "primary": "rgb(172,96,250)",
   

//blue-mode
            //    "colorGray-50": "#f8fafc",
            //   "colorGray-100": "#f1f5f9",
            //   "colorGray-200": "#e2e8f0",
            //   "colorGray-300": "#cbd5e1",
            //   "colorGray-400": "#94a3b8",
            //   "colorGray-500": "#64748b",
            //   "colorGray-600": "#4d4769",
            //   "colorGray-700": "#3f3355",
            //   "colorGray-800": "#2d1e3b",
            //   "colorGray-900": "#1f0f2a",
            //  "primary": "rgb(172,96,250)",

              //purple mode
             //  "colorGray-50": "#f5f3ff",
             //  "colorGray-100": "#ede9fe",
             //  "colorGray-200": "#ddd6fe",
            //   "colorGray-300": "#cbd5e1",
             //  "colorGray-400": "#94a3b8",
             //  "colorGray-500": "#64748b",
            //   "colorGray-600": "#475569",
             //  "colorGray-700": "#6d28d9",
             //  "colorGray-800": "#1e293b",
             //  "colorGray-900": "#4c1d95",
             //  "primary":"#c084fc"


          },
          height: {
              "128": "32rem",
              "fit":"fit-content"
          },
      }
  },
  important: true,
  
  variants: {
      extend: {}
  },
  plugins: []
};
