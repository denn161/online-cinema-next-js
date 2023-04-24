import { useEffect, useState } from 'react'

const useDebounce = (value: string, ms: number) => {
	
	const [debounceValue, setDebounceValue] = useState(value)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounceValue(value)
		}, ms)

		return () => {
			clearTimeout(handler)
		}
	}, [value, ms])

	return debounceValue
}

export default useDebounce
