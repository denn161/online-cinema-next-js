
export function sklonenie(num:number|undefined, txt:string[]) {
	let cases = [2, 0, 1, 1, 1, 2];
	  if(num)
	return txt[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]];
}