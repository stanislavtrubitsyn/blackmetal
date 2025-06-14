// components/LatestNews/LatestNews.tsx
import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import LatestNewsElement from './LatestNewsElement'
import newsData from '@pages/HomePage/components/News/news.json'

interface NewsItem {
	id: number
	title: string
	text: string
	imageUrl: string
	date: string
}

const parseDate = (str: string): Date => {
	const [day, month, year] = str.split('.').map(Number)
	return new Date(year, month - 1, day)
}

const LatestNews = () => {
	const [latestNews, setLatestNews] = useState<NewsItem[]>([])

	useEffect(() => {
		const sorted = [...newsData.news]
			.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
			.slice(0, 4)
		setLatestNews(sorted)
	}, [])

	return (
		<Box
			sx={{ display: 'flex', flexDirection: 'column', gap: '40px', flexWrap: 'wrap', mt: 5, ml: 5 }}
		>
			{latestNews.map(item => (
				<LatestNewsElement
					key={item.id}
					title={item.title}
					description={item.text}
					image={item.imageUrl}
					link={`/news/${item.id}`}
				/>
			))}
		</Box>
	)
}

export default LatestNews
