import { siteName, titleMerge } from '@/config/seo-config'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { onlyText } from '../string/clear-text'
import { IMeta } from './meta-interface'

const Meta = ({ title, description, image = '', children }: IMeta) => {
	const { asPath } = useRouter()

	const currentUrl = `${process.env.APP_URL}/${asPath}`
	return (
		<>
			<Head>
				<title itemProp="headline">{titleMerge(title)}</title>
				{description ? (
					<>
						<meta
							itemProp="description"
							name="description"
							content={onlyText(description, 152)}
						/>
						<link rel="canonical" href={currentUrl} />
						<meta property="og:locale" content="ru" />
						<meta property="og:title" content={titleMerge(title)} />
						<meta property="og:url" content={currentUrl} />
						<meta property="og:image" content={image||'../../assets/images/cinema.png'} />
						<meta property="og:site_name" content={siteName} />
						<meta
							property="og:description"
							content={onlyText(description, 197)}
						/>
					</>
				) : (
					<meta name="robots" content="noindex,nofollow" />
				)}
			</Head>
			{children}
		</>
	)
}

export default Meta
