import { useRouter } from "next/router";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const deleteTimeFromDate=(creationDate:string)=>{
    var convertedStartDate = new Date(creationDate);
    var testDate=new Date('2/6/5')
    console.log(testDate.getMonth()+1)
    convertedStartDate.toDateString()
    convertedStartDate.toLocaleDateString('en-US')
    console.log(convertedStartDate.toLocaleDateString('en-US'))

    var month = convertedStartDate.getMonth() + 1
    var day = convertedStartDate.getDate();
    var year = convertedStartDate.getFullYear();
     creationDate= year + "/" + month + "/" + day;
     console.log(month)
     console.log(creationDate)
     return creationDate
}

//encode base64 image to binary

export const binEncode=(data:any[])=> {
    var binArray = []
    var datEncode = "";

    for (var i=0; i < data.length; i++) {
        binArray.push(data[i].charCodeAt(0).toString(2)); 
    } 
    for (var j=0; j < binArray.length; j++) {
        var pad = padding_left(binArray[j], '0', 8);
        datEncode += pad + ' '; 
    }
    function padding_left(s:any[]|string, c:string, n:number) { if (! s || ! c || s.length >= n) {
        return s;
    }
    var max = (n - s.length)/c.length;
    for (var i = 0; i < max; i++) {
        s = c + s; } return s;
    }
    console.log(binArray);
    return binArray
}

// get jwt payload 

export const parseJwt= (token:string|null)=> {
    if(token){
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }
   
}

export const jwtChecker=()=>{
   
    if(localStorage.getItem('jwt')==null||localStorage.getItem('jwt')==undefined){
       
             console.log('unauthorized')
      return '404'
    }
    else{
        return ''
    }

}

//for sortable table or array
export const sortArrayOfObject=(data:any[],sortedField:string,isDescending:false)=>{
    console.log(data,sortedField,isDescending)

    if(sortedField==="lastModifiedDate"||sortedField=="createdTime" || sortedField==="creationDate"){
        console.log(data,sortedField,isDescending)
       const sortedData= sortArrayOfObjectsByDate(data,sortedField,isDescending);
       return sortedData
    }
   
    else{
       
        const sortedData= data.sort((a:any,b:any)=>{
                        console.log(a[sortedField].toLowerCase().trim().replace(/ +/g, ""), b[sortedField].toLowerCase().trim().replace(/ +/g, ""))
            if(typeof(a[sortedField])==='number'){
                if (a[sortedField] < b[sortedField]) {
                    return   isDescending==false ?   -1:1
                   
                  }
                  else if (a[sortedField] > b[sortedField]) {
                    return   isDescending==false ?  1:-1;
                  }
            }

           else if (a[sortedField].toLowerCase().trim().replace(/ +/g, "") < b[sortedField].toLowerCase().trim().replace(/ +/g, "")) {
                return   isDescending==false ?   -1:1
               
              }
             else if (a[sortedField].toLowerCase().trim().replace(/ +/g, "") > b[sortedField].toLowerCase().trim().replace(/ +/g, "")) {
                return   isDescending==false ?  1:-1;
              }
              return 0;
           })
           console.log(sortedData)
           return sortedData
    }
 

 
}

const sortArrayOfObjectsByDate=(data:any[],sortedField:string,isDescending:false)=>{
   const sortedData= data.sort((a:any,b:any)=>{
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        
                const aDate=new Date(a[sortedField])
                 const bDate=new Date(b[sortedField])

       if(isDescending===false){
       
        return aDate.getTime()-bDate.getTime();
       }
       else{
        return bDate.getTime()-aDate.getTime();
       }
         
      
        
      });
      console.log(sortedData)
      return sortedData
}


// sweet alert
const MySwal = withReactContent(Swal)
export const callAlertErrorPublic = (message: string[]) => {
  console.log(message);
  var htmlContent = "";
  message.forEach((el: any) => {
    htmlContent += `<li>${el}</li>`;
  });
  console.log(htmlContent)
  // MySwal.fire('hello')
  MySwal.fire({
    title: <p>Error</p>,
    // icon:'error',
    imageUrl: "/assets/imgs/icons/warning-icon.svg",
    html: `<ul class='sweet-alert-html justify-center flex-wrap font-sans text-white bg-color-alert-3 message-shadow flex font-bold px-4 py-3 rounded relative'>${htmlContent}<ul>`,
    confirmButtonText: "Ok",
    customClass: {
      confirmButton: "p-3 rounded bg-[#212329] text-white font-bold",
      icon: "icon-alert-login",
      popup:'card'
    },
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutDown",
    },
    showCloseButton: true,
    buttonsStyling: false,
    imageHeight: 40,
    imageWidth: 40,
  });
};


export  const callAlertSuccessPublic = (message: string|string[]|undefined) => {
    console.log(message);
    var htmlContent = "";

    console.log(htmlContent);
    // MySwal.fire('hello')
    MySwal.fire({
      title: <p>Success</p>,
      // icon:'error',
      imageUrl: "/assets/imgs/icons/success-alert-icon.svg",
      html: `
             
                 
               
             
    <div
      class="bg-[#36CE89] flex justify-center text-white flex font-bold px-4 py-3 rounded relative"
      role="alert"
    >
      ${message}
    </div>
 


`,

      confirmButtonText: "Ok",
      
      customClass: {
        confirmButton: "p-3 rounded bg-[#212329] text-white font-bold",
        icon: "icon-alert-login",
        popup:'card',
      },
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutDown",
      },

      buttonsStyling: false,
      imageHeight: 40,
      imageWidth: 40,
    
    },
  
    );
  };

 
