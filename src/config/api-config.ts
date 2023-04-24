export const API_URL=`${process.env.APP_URL}/api` 
export const API_SERVER_URL =`${process.env.APP_URL_SERVER}/api`

export const getGenresUrl = (str?:string)=> str?`/genres${str}`:'/genres'

export const getUsersUrl = (str?:string)=> str?`/users${str}`: '/users'

export const getAuthUrl = (str:string)=>`/auth${str}`

export const getMoviesUrl = (str?:string)=> str?`/movies${str}`:'/movies'

export const getActersUrl = (str:string)=>str?`/acters${str}`:'/acters'

export const getRatingsUrl = (str:string)=>`/ratings${str}`

export const getUploadFilesUrl = ()=>'/files'
