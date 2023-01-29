import React from 'react'
import LoginForm from '../public/components/loginComponents/loginForm'
import Head from 'next/head'
import { baseUrlPages } from '../public/apiFunctions'
 const Login = () => {
  return (
    <>
    <Head>
    <title>Login</title>
    <meta name="robots" content="index,follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
      <meta property="og:title" content='Login'/>
      <meta name="description" content="Commited to people and future" />
      <link rel="canonical" href={`${baseUrlPages}/login`}/>
      <meta property="og:description" content="امروز میخوایم در مورد نوعی برنامه‌نویس مرموز به نام عشقِ پترن صحبت کنیم و مصائبی که همنشینی با این شخص برای ما به وجود میاره رو بررسی کنیم..."/>
      <meta property="og:image:height" content="100"/> 
      <meta property="og:image:width" content="100"/> 
    </Head>
   <LoginForm/>
    </>
  )
}
export default Login
