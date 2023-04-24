import { IUser } from '@/shared/types/user-types'

export interface IEditUserInput extends Omit<IUser, '_id'|'createdAt'> {}
