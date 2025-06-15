import { Container, Box, Typography, Divider, Link as MUILink, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PresentationPlayer } from '../../components/PresentationPlayer';
import slides from './slides.json';

function DevelopmentsPage() {
	return (
		<Container maxWidth="lg" sx={{ py: 6 }}>
			<Box sx={{ display: 'flex', gap: 0 }}>
				{/* Левая колонка*/}
				<Box sx={{ flex: 2, pr: 4 }}>
					<Typography variant="h4" align="center" sx={{ mb: 4 }}>
						Основні розробки
					</Typography>
					<PresentationPlayer slides={slides} />
				</Box>
				<Divider orientation="vertical" flexItem sx={{ mx: 0, borderRightWidth: 2, bgcolor: '#e0e0e0' }} />
				{/* Правая колонка */}
				<Box
					sx={{
						flex: 1,
						minWidth: 320,
						pl: 4,
						display: 'flex',
						flexDirection: 'column',
						color: '#444',
					}}
				>
					<Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
						Новини
					</Typography>
					<Box component="ul" sx={{ listStyle: 'none', pl: 0, ml: 0, mb: 2, fontSize: 16, lineHeight: 1.6 }}>
						<li><MUILink href="#" underline="none" color="inherit">Навчання по інструментах європейської грантової підтримки</MUILink></li>
						<li><MUILink href="#" underline="none" color="inherit">Набір в аспірантуру</MUILink></li>
						<li><MUILink href="#" underline="none" color="inherit">Вакансія завідуючого Відділом фізико-технічних проблем металургії сталі</MUILink></li>
						<li><MUILink href="#" underline="none" color="inherit">Закупівлі</MUILink></li>
					</Box>
					<Typography variant="h6" sx={{ fontWeight: 500, mb: 1, mt: 2 }}>
						Запрошення
					</Typography>
					<Box component="ul" sx={{ listStyle: 'none', pl: 0, ml: 0, mb: 2, fontSize: 16, lineHeight: 1.6 }}>
						<li><MUILink href="#" underline="none" color="inherit">Конференція "Наука і металургія" 2022</MUILink></li>
						<li><MUILink href="#" underline="none" color="inherit">Конференція "Наука і металургія" 2023</MUILink></li>
						<li><MUILink href="#" underline="none" color="inherit">Конференція "Наука і металургія" 2024</MUILink></li>
						<li><MUILink href="#" underline="none" color="inherit">Конференція HighMatTech-2025</MUILink></li>
					</Box>
					<Typography variant="h6" sx={{ mb: 1, mt: 2, textTransform: 'uppercase', fontSize: 18 }}>
						ЗБІРНИКИ ТЕЗ КОНФЕРЕНЦІЙ
					</Typography>
					<Box>
						<Accordion sx={{ boxShadow: 'none', background: 'transparent', '&.MuiAccordion-root:before': { display: 'none' } }}>
							<AccordionSummary
								expandIcon={null}
								sx={{ px: 0, minHeight: 'unset', borderBottom: 'none' }}
							>
								<Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
									<ExpandMoreIcon sx={{ mr: 1 }} />
									<Typography sx={{ fontSize: 16, fontWeight: 500 }}>
										Збірники тез (англійською мовою)
									</Typography>
								</Box>
							</AccordionSummary>
							<AccordionDetails sx={{ pl: 4 }}>
								<Box component="ul" sx={{ listStyle: 'none', pl: 0, ml: 0, mb: 0, fontSize: 16, lineHeight: 1.6 }}>
									<li><MUILink href="#" underline="none" color="inherit">Collection of theses 2022</MUILink></li>
									<li><MUILink href="#" underline="none" color="inherit">Collection of theses 2023</MUILink></li>
									<li><MUILink href="#" underline="none" color="inherit">Collection of theses 2024</MUILink></li>
								</Box>
							</AccordionDetails>
						</Accordion>
						<Accordion sx={{ boxShadow: 'none', background: 'transparent', '&.MuiAccordion-root:before': { display: 'none' } }}>
							<AccordionSummary
								expandIcon={null}
								sx={{ px: 0, minHeight: 'unset', borderBottom: 'none' }}
							>
								<Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
									<ExpandMoreIcon sx={{ mr: 1 }} />
									<Typography sx={{ fontSize: 16, fontWeight: 500 }}>
										Збірники тез (українською мовою)
									</Typography>
								</Box>
							</AccordionSummary>
							<AccordionDetails sx={{ pl: 4 }}>
								<Box component="ul" sx={{ listStyle: 'none', pl: 0, ml: 0, mb: 0, fontSize: 16, lineHeight: 1.6 }}>
									<li><MUILink href="#" underline="none" color="inherit">Збірник тез 2019</MUILink></li>
									<li><MUILink href="#" underline="none" color="inherit">Збірник тез 2021</MUILink></li>
									<li><MUILink href="#" underline="none" color="inherit">Збірник тез 2022</MUILink></li>
									<li><MUILink href="#" underline="none" color="inherit">Збірник тез 2023</MUILink></li>
									<li><MUILink href="#" underline="none" color="inherit">Збірник тез 2024</MUILink></li>
								</Box>
							</AccordionDetails>
						</Accordion>
					</Box>
				</Box>
			</Box>
		</Container>
	);
}

export default DevelopmentsPage; 