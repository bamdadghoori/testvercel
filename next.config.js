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
compress: true
}

module.exports = nextConfig