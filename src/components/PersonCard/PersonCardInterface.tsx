interface Contact {
	type: string
	value: string
}

export interface PersonCardInterface {
	photo?: string
	position: string
	name: string
	description?: string
	contacts?: Contact[]
}

export interface PersonCardData {
	title: string
	data: PersonCardInterface[]
}
