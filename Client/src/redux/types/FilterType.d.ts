interface FilterState {
	categories: Array<string>,
	colors: Array<string>,
	price: {
		min: number,
		max: number
	}
}

interface FilterAction {
	type: string
	categories: Array<string>,
	colors: Array<string>,
	price: {
		min: number,
		max: number
	}
}