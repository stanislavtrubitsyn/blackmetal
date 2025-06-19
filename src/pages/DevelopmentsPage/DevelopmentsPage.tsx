import { Container, Box, Typography } from '@mui/material';
import { PresentationPlayer } from '../../components/PresentationPlayer';
import { useTranslation } from 'react-i18next';

const DevelopmentsPage = () => {
	const { t } = useTranslation();
	return (
		<Container maxWidth="lg" sx={{ py: 6 }}>
			<Box>
				<Typography variant="h4" align="center" sx={{ mb: 4 }}>
					{t('developments.title')}
				</Typography>
				<PresentationPlayer />
			</Box>
		</Container>
	);
};

export default DevelopmentsPage; 