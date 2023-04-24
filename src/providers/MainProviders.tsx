import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import Layout from '@/components/layout/Layout'

import { store } from '@/store/store'

import HeadProvider from './HeadProvider/HeadProvider'
import ReduxToastify from './ReduxToastify'
import { TypeComponentAuthFields } from './AuthProvider/auth-types'
import AuthProvider from './AuthProvider/AuthProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})
const MainProviders = ({ children,Component }:TypeComponentAuthFields) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToastify />
				<AuthProvider Component={Component}>
				<Layout>{children}</Layout>
				</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProviders
