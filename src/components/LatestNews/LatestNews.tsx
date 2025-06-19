import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import LatestNewsElement from './LatestNewsElement'

import { useTranslationData } from '@/hooks/useTranslationData'
import {
	NewsItem,
	TranslatedNewsData,
} from '@pages/HomePage/components/News/NewsTypes'

const parseDate = (dateString: string) => {
	const [day, month, year] = dateString.split('.')
	return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
}

const LatestNews = () => {
	const { i18n } = useTranslation()
	const [latestNews, setLatestNews] = useState<NewsItem[]>([])
	const { data: newsData } = useTranslationData<TranslatedNewsData>('news')

	useEffect(() => {
		if (newsData?.news) {
			const sorted = [...newsData.news]
				.sort(
					(a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
				)
				.slice(0, 4)
			setLatestNews(sorted)
		}
	}, [newsData])

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '40px',
				flexWrap: 'wrap',
				mt: 5,
				ml: 5,
			}}
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
