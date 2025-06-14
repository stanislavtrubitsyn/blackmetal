import { Box, Button, Link as MUILink, Typography } from '@mui/material'
import data from './data.json'

const DocumentCard = () => {
	return (
		<Box
			sx={{
				maxWidth: '390px',
				width: '100%',
				minHeight: '171px',
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
				{data.title}
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
				<MUILink
					href={data.seeLink}
					target='_blank'
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
					href={data.downloadLink}
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
			</Box>
		</Box>
	)
}

export default DocumentCard
