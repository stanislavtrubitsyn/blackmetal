// components/LatestNews/LatestNews.tsx
import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import LatestNewsElement from './LatestNewsElement'
import newsDataUA from '../../i18n/data/news-ua.json'
import newsDataEN from '../../i18n/data/news-en.json'

interface NewsItem {
	id: number
	title: string
	text: string
	imageUrl: string
	date: string
}

const parseDate = (dateString: string) => {
	const [day, month, year] = dateString.split('.')
	return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
}

const LatestNews = () => {
	const { i18n } = useTranslation()
	const [latestNews, setLatestNews] = useState<NewsItem[]>([])

	useEffect(() => {
		// Choose news data based on current language
		const currentNewsData = i18n.language === 'en' ? newsDataEN : newsDataUA
		
		const sorted = [...currentNewsData.news]
			.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
			.slice(0, 4)
		setLatestNews(sorted)
	}, [i18n.language])

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
