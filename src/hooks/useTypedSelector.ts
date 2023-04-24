import {TypedUseSelectorHook,useSelector as selectorUse} from 'react-redux'
import { TypeRootState } from '@/store/store'

export const useSelector:TypedUseSelectorHook<TypeRootState>=selectorUse