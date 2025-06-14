import PersonCard from '@/components/PersonCard'
import { Box } from '@mui/material'

const ServicePage = () => {
	return (
		<Box
			sx={{
				minHeight: '500px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<PersonCard />
		</Box>
	)
}

export default ServicePage
