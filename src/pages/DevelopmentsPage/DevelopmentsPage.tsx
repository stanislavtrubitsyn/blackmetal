import { Container, Box, Typography } from '@mui/material';
import { PresentationPlayer } from '../../components/PresentationPlayer';

const DevelopmentsPage = () => (
	<Container maxWidth="lg" sx={{ py: 6 }}>
		<Box>
			<Typography variant="h4" align="center" sx={{ mb: 4 }}>
				Основні розробки
			</Typography>
			<PresentationPlayer />
		</Box>
	</Container>
);

export default DevelopmentsPage; 