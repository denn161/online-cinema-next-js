
import type { AppProps } from 'next/app'
import { TypeComponentAuthFields } from 'providers/AuthProvider/auth-types'
import MainProviders from 'providers/MainProviders'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import '../styles/globals.css'
import '../styles/react-select.scss'



type TypeAppProps = AppProps & TypeComponentAuthFields

export default function App({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProviders Component={Component}>
			<Component {...pageProps} />
		</MainProviders>
	)
}
