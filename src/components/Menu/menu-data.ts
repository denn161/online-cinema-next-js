import { IMenu } from './menu-interface'

export const firstMenu:IMenu={
	  title:'Menu',
		items:[
			 {
				title:'Главная',
				icon:'MdHome',
				path:'/'
			 },
			 {
				title:'Коллекции',
				icon:'MdExplore',
				path:'/genres'
			 },
			 {
				title:'Недавно на сайте',
				icon:'MdRefresh',
				path:'/fresh'

			 },
			 {
				icon:'MdLocalFireDepartment',
				path:'/trending',
				title:'Популярные'
			 }
		]
}

export const userMenu:IMenu={
	 title:'Profile',
	 items:[]
}


export const menus:IMenu[]=[firstMenu,userMenu]