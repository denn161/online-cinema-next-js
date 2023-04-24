/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: ['gsap']
});

const nextConfig = {
  poweredByHeader:false,
  optimizeFonts:false,
  env:{
   APP_URL:process.env.REACT_APP_URL,
   APP_ENV:process.env.REACT_APP_ENV,
   APP_URL_SERVER:process.env.REACT_APP_URL_SERVER

  },  
  async rewrites(){
    return[
       {
        source:'/api/:path*',
        destination:'http://localhost:4200/api/:path*'
       },
       {
        source:'/uploads/:path*',
        destination:'http://localhost:4200/uploads/:path*'
       }
    ]

  },
 
}

module.exports =nextConfig
