import React from 'react'
import NextNProgress from 'nextjs-progressbar';
 const ProgressLoading = () => {
  return (
    <>
    {/* blue mode */}
    {/* <NextNProgress color="#60a5fa" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} /> */}
    {/* purpleMode */}
    {/* <NextNProgress color="#c084fc" startPosition={0.3} stopDelayMs={100} height={3} showOnShallow={true} /> */}

    {/* dark mode */}
    <NextNProgress color="#ff6e30" startPosition={0.3} stopDelayMs={100} height={3} showOnShallow={true} />
    </>
  )
}
export default ProgressLoading
