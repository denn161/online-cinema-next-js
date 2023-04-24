import { AuthService } from '@/services/auth/auth-service'
import { errorCatch, errorNotification } from '@/utils/toast-error'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'
import { IAuthResponse, IFormData, ITokens } from './user-interface'


export const register =createAsyncThunk<IAuthResponse,IFormData>('auth/register',
async({email,password},thunkApi)=>{
   try {
		  const data = await AuthService.register(email,password)
			toastr.success('Регистрация','Вы зарегистрировались успешно')
			return data
	 } catch (error) {
		   errorNotification(error,'Ошибка при регистрации')
			 return thunkApi.rejectWithValue(error)
	 }
})

export const login =createAsyncThunk<IAuthResponse,IFormData>('auth/login',
async({email,password},thunkApi)=>{
   try {
		  const data = await AuthService.login(email,password)
			toastr.success('Вход','Вы вошли в систему')
			return data
	 } catch (error) {
		   errorNotification(error,'Ошибка при входе в систему')
			 return thunkApi.rejectWithValue(error)
	 }
})


export const logout = createAsyncThunk('auth/logout',async()=>{
     AuthService.logout()
	   
})

export const checkAuth =createAsyncThunk<IAuthResponse>('auth/check-auth',
async(_,thunkApi)=>{
   try {
		  const data = await AuthService.getNewSTokens()
			return data
	 } catch (error) {
		 if(errorCatch(error)==='jwt expired'){
		     toastr.error('Истек токен','Пожалйста войдите заново')
			 thunkApi.dispatch(logout())
		 }
		
	    return thunkApi.rejectWithValue(error)
	 }
})
