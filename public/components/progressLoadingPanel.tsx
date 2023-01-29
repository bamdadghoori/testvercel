import React from 'react'
import NextNProgress from 'nextjs-progressbar';
 const ProgressLoading = () => {
  return (
    <>

    <NextNProgress color="rgb(52 71 103/var(--tw-bg-opacity))" startPosition={0.3} stopDelayMs={100} height={3} showOnShallow={true} />
    </>
  )
}
export default ProgressLoading
