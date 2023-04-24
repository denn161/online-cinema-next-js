
export const getGenreUrl = (slug:string)=>`/genre/${slug}`
export const getMovieUrl = (slug:string)=>`/movie/${slug}`
export const getActersUrl = (slug:string)=>`/acter/${slug}`

export const getAdminUrl = (url:string)=>`/menage/${url}` 

export const getAdminHomeUrl = getAdminUrl('').slice(0,-1)