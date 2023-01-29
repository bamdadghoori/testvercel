/**
 * @type {import('next').NextConfig}
 */
const path = require('path')
 const nextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  devIndicators: {
      buildActivity: false
  
},
compress: true,
typescript: {
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has type errors.
  // !! WARN !!
  ignoreBuildErrors: true,
},
}

module.exports = nextConfig