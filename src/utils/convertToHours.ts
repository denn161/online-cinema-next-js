export const getHours = (minutes: number) => {
	const m = minutes % 60
	const h = (minutes - m) / 60
	const HHMM =
		(h < 10 ? '0' : '') +
		h.toString() +
		'ч' +
		':' +
		(m < 10 ? '0' : '') +
		m.toString() +
		'мин.'

	return HHMM
}

//  const minutes = 120
//  const m = minutes%60
//  const h = (minutes-m)/60
//  const hhmm = (h<10?"0":"")+h.toString()+":"+(m<10?"0":"")+m.toString()
