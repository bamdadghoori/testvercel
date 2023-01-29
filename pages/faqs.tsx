import React,{useState,useEffect,useRef} from 'react'
import TopSection from '../public/components/FaqsComponents/topSection'
import KeyFeatures from '../public/components/FaqsComponents/keyFeatures'
import Navbar from '../public/components/navbar'
import Footer from '../public/components/footer'
import Questions from '../public/components/FaqsComponents/questions'
import GetInTouch from '../public/components/FaqsComponents/getInTouch'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { baseUrlPages } from '../public/apiFunctions'
 const Faqs = () => {
  const router=useRouter()

  
const searchQuery=router.query.search


const questionsRef = useRef()


    //data below contains questions and answers 
    const questionAnswersAll=[{
      qTitle:'Where is my order? Quisque molestie',
      answer:`
      Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
      `
  },
  {
  qTitle:'I have promotional or discount code',
  answer:`
  Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
  `
  },
  {
  qTitle:'Can I cancel or change my order',
  answer:`
  Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
  `
  },
  {
  qTitle:'What are the delivery types you use',
  answer:`
  Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
  `
  },
  {
  qTitle:'How can I pay for my purchases',
  answer:`
  Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
  `
  },
  {
  qTitle:'Can I cancel my order',
  answer:`
  Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
  `
  },
  
  
  
  
  
  ]
  const [questionAnswers,setQuestionAnswers]=useState(questionAnswersAll)
  const [searchMode,SetSearchMode]=useState(false)
   var searchBoxDefaultValue:string|string[]='';
//set search box controlled
  const [searchText,setSearchText]:any=useState()
  const [finalSearchText,setFinalSearchText]:any=useState()
  const changeSearchText=(e:React.ChangeEvent<HTMLInputElement>)=>{
    
    const value:any=e.target.value
    
   setSearchText(value)
   if(value.length==0){
    setFinalSearchText('')
   }
  }
   
   

  useEffect(()=>{
 console.log(questionAnswers)
    if(finalSearchText!=undefined && finalSearchText.length!=0){
      console.log(searchText)
      const filteredQA=questionAnswersAll.filter((el:any)=>{return el.qTitle.includes(finalSearchText.trim())||el.answer.includes(finalSearchText.trim())})
      console.log(filteredQA)
      setQuestionAnswers(filteredQA)
      // SetSearchMode(false)
    }

      //when we have search query on refresh
  //  else if(search!=undefined && search.length>0){
  //   console.log(search.length)
  //     searchBoxDefaultValue=search
            
  //    }

    else{
      setQuestionAnswers(questionAnswersAll)
    }
   
  },[finalSearchText])

  return (
    <>
    <Head>
    <title>Faqs</title>
    <meta name="robots" content="index,follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
      <meta property="og:title" content='Faqs'/>
      <meta name="description" content="Commited to people and future" />
      <link rel="canonical" href={`${baseUrlPages}/faqs`}/>
      <meta property="og:description" content="امروز میخوایم در مورد نوعی برنامه‌نویس مرموز به نام عشقِ پترن صحبت کنیم و مصائبی که همنشینی با این شخص برای ما به وجود میاره رو بررسی کنیم..."/>
      <meta property="og:image:height" content="100"/> 
      <meta property="og:image:width" content="100"/> 
    </Head>
    <Navbar marginLessNavbar={true} shadowBottom={true}/>
    <main className='public'>
    <section className='pt-12 pb-20  background-shadow bg-top bg-repeat' style={{"backgroundImage": "url('/assets/imgs/backgrounds/intersect-purple.svg')"
       ,"backgroundPositionY":"-10px","overflow":"visible" }}>
       <div className="container">
        <TopSection questionRef={questionsRef} searchText={searchText} setFinalSearchText={setFinalSearchText} setSearchText={setSearchText} searchQuery={searchQuery} changeSearchText={changeSearchText}/>
        {/* <KeyFeatures/> */}
        <Questions questionRef={questionsRef}  questionAnswers={questionAnswers}/>
        </div>
    </section>
  
    <GetInTouch/>
    </main>
   <Footer/>
    </>
  )
}
export default Faqs
