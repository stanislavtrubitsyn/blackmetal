export interface NewsItem {
	id: number
	title: string
	text: string
	imageUrl: string
	date: string

	onClick?: () => void
}
