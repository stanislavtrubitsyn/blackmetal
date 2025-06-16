import { Box, Button, Link as MUILink, Typography } from '@mui/material'

type DocumentCardProps = {
	title: string
	link: string
	date?: string
}

const DocumentCard = ({ title, link, date }: DocumentCardProps) => {
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
				position: 'relative',
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
					position: 'absolute',
					top: '5px',
					right: '5px',
					fontSize: '12px',
					color: '#8A8A8A',
				}}
			>
				{date}
			</Typography>
			<Typography
				sx={{
					position: 'absolute',
					top: '5px',
					left: '5px',
					fontSize: '12px',
					fontWeight: 700,
					textTransform: 'uppercase',
					color:
						fileExtension === 'pdf'
							? 'red'
							: fileExtension === 'docx' || fileExtension === 'doc'
							? 'blue'
							: '#8A8A8A',
				}}
			>
				{fileExtension}
			</Typography>
			<Typography
				sx={{
					maxWidth: '304px',
					m: '0px auto',
					mt: '-4px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: '18px',
					fontWeight: 600,
					color: '#242424',
					textAlign: 'center',
					flex: 1,
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
					// flexDirection: { xxs: 'column', xs: 'row' },
					justifyContent: 'center',
					gap: '20px',
					flexWrap: 'wrap',
				}}
			>
				{['docx', 'doc'].includes(fileExtension) ? (
					<>
						<MUILink
							href={fileLink}
							rel='noopener noreferrer'
							sx={{ width: { xxs: '100%', xs: '142px' } }}
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
							sx={{ width: { xxs: '100%', xs: '142px' } }}
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
							sx={{ width: { xxs: '100%', xs: '142px' } }}
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
