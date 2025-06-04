import { FC } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NewsItem } from './NewsTypes';

type NewsCardProps = NewsItem;

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  height: 'auto',
  minHeight: '180px',
  width: '100%',
  boxShadow: '0 4px 20px rgba(20, 41, 52, 0.15)',
  '&:hover': {
    // boxShadow: '0 4px 20px rgba(20, 41, 52, 0.15)',
    transition: 'all 0.3s ease-in-out',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const StyledCardMedia = styled(CardMedia)({
  width: '200px',
  flexShrink: 0,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '@media (max-width: 600px)': {
    width: '100%',
    height: '160px',
  },
});

const ContentBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

const TextContent = styled(Box)({
  flex: 1,
});

const ActionBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  marginTop: '16px',
});

export const NewsCard: FC<NewsCardProps> = ({
  title,
  text,
  imageUrl,
  date,
  onClick,
}) => {
  return (
    <StyledCard>
      <StyledCardMedia
        image={imageUrl}
        title={title}
      />
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
        <ContentBox>
          <TextContent>
            <Typography gutterBottom variant="h6" component="h2" sx={{ 
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              mb: 1
            }}>
              {title}
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ mb: 2 }}
            >
              {text}
            </Typography>
          </TextContent>
          <ActionBox>
            <Button 
              variant="outlined" 
              size="small" 
              onClick={onClick}
            >
              Перейти
            </Button>
            <Typography variant="caption" color="text.secondary">
              {date}
            </Typography>
          </ActionBox>
        </ContentBox>
      </CardContent>
    </StyledCard>
  );
}; 