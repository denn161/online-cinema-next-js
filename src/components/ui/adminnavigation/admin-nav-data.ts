import { getAdminHomeUrl, getAdminUrl } from '@/config/url-config'
import { INavItem } from './admin-nav-interface'

export const navItems:Array<INavItem> =[
   {
		title:'Статистика',
		path:getAdminHomeUrl
	 },
	 {
		title:'Пользователи',
		path:getAdminUrl('users')
	 },
	 {
		title:'Фильмы',
		path:getAdminUrl('movies')
	 },
	 {
		title:'Актеры',
		path:getAdminUrl('acters')
	 },
	 {
		title:'Жанры',
		path:getAdminUrl('genres')
	 },


]