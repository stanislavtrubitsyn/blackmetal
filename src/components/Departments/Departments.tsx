// import React from 'react'
// import { Box, Typography } from '@mui/material'
// import DepartmentElement from './DepartmentElement'
// import data from './departments.json'

// const Departments = () => {
// 	return (
// 		<Box
// 			sx={{
// 				display: 'flex',
// 				alignItems: 'center',
// 				justifyContent: 'center',
// 				flexDirection: 'column',
// 			}}
// 		>
// 			<Typography variant='h3' fontWeight={'bold'} mt={3}>
// 				Наукові відділи
// 			</Typography>
// 			<Box
// 				sx={{
// 					mt: 5,
// 					mb: 5,
// 					px: 5,
// 					display: 'grid',
// 					gridTemplateColumns: 'repeat(3, 1fr)', // ровно 3 колонки
// 					gap: '20px',
// 					maxWidth: '1920px', // 3 * 390 + 2 * 10
// 					mx: 'auto',
// 					justifyItems: 'center', // центрируем содержимое в каждой ячейке
// 				}}
// 			>
// 				{data.ScientificDepartments.map(dep => (
// 					<Box key={dep.id} sx={{ width: '460px' }}>
// 						<DepartmentElement
// 							shortName={dep.shortName}
// 							fullName={dep.fullName}
// 							img={dep.img}
// 							href={dep.href}
// 						/>
// 					</Box>
// 				))}
// 			</Box>
// 		</Box>
// 	)
// }

// export default Departments
