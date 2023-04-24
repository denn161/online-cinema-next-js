import { NextPage } from 'next'
import { ReactNode } from 'react'

export type TypeRoles ={
	isOnlyAdmin?:boolean
	isOnlyUser?:boolean
}

export type NextAuthPage<P={}> = NextPage<P> & TypeRoles 

export type TypeComponentAuthFields = {Component:TypeRoles,children:ReactNode}