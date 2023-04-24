export interface IUserState{
	_id:string 	
	email:string 
	password:string
	createdAt:string,
	isAdmin:boolean
}


export interface ITokens{
	accessToken:string 
	refreshToken:string
}

export interface IInitialState{
	 user:IUserState|null 
	 isLoading:boolean 
}

export interface IFormData{
	 email:string 
	 password:string
}

export interface IAuthResponse extends ITokens{
	 user:IUserState
}

