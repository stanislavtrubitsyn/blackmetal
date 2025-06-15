import { Box, Button, Link as MUILink, Typography } from '@mui/material'

type DocumentCardProps = {
	title: string
	link: string
}

const DocumentCard = ({ title, link }: DocumentCardProps) => {
	const getFileNameFromUrl = (url: string): string => {
		if (!url) return 'document'
		const parts = url.split('/')
		return parts[parts.length - 1] || 'document'
	}

	const getFileExtensionFromUrl = (url: string): string => {
		if (!url) return 'docx'
		const parts = url.split('.')
		return parts[parts.length - 1] || 'document'
	}

	const fileName = getFileNameFromUrl(link)
	const fileExtension = getFileExtensionFromUrl(fileName)
	const fileLink = `/blackmetal${link}`

	return (
		<Box
			sx={{
				maxWidth: '390px',
				width: '100%',
				minHeight: '171px',
				m: '0px auto',
				py: '25px',
				px: '20px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				gap: '40px',
				border: '1px solid #DFDFDF',
				bgcolor: '#FFFFFF',
			}}
		>
			<Typography
				sx={{
					maxWidth: '304px',
					m: '0px auto',
					mt: '-4px',
					fontSize: '18px',
					fontWeight: 600,
					color: '#242424',
					textAlign: 'center',
				}}
			>
				{title}
			</Typography>
			<Box
				sx={{
					maxWidth: '304px',
					width: '100%',
					m: '0px auto',
					display: 'flex',
					justifyContent: 'center',
					gap: '20px',
					flexWrap: 'wrap',
				}}
			>
				{['docx', 'doc'].includes(fileExtension) ? (
					<>
						<MUILink
							href={link}
							rel='noopener noreferrer'
							sx={{ width: '100%' }}
						>
							<Button
								variant='outlined'
								sx={{
									width: '100%',
									height: '42px',
									borderRadius: 0,
									textTransform: 'none',
									color: '#000000',
								}}
							>
								Скачати
							</Button>
						</MUILink>
					</>
				) : (
					<>
						<MUILink
							href={fileLink}
							rel='noopener noreferrer'
							sx={{ width: '100%' }}
						>
							<Button
								variant='contained'
								sx={{
									width: '100%',
									height: '42px',
									borderRadius: 0,
									boxShadow: 'none',
									textTransform: 'none',
								}}
							>
								Подивитись
							</Button>
						</MUILink>
						<MUILink
							href={fileLink}
							rel='noopener noreferrer'
							download={fileName}
							sx={{ width: '100%' }}
						>
							<Button
								variant='outlined'
								sx={{
									width: '100%',
									height: '42px',
									borderRadius: 0,
									textTransform: 'none',
									color: '#000000',
								}}
							>
								Скачати
							</Button>
						</MUILink>
					</>
				)}
			</Box>
		</Box>
	)
}

export default DocumentCard
