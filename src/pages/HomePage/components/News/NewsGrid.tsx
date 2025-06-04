import { FC, useState, useEffect } from 'react';
import { Grid, CircularProgress, Alert, Box, Button } from '@mui/material';
import { NewsCard } from './NewsCard';
import { NewsItem } from './NewsTypes';
import newsData from './news.json';

export const NewsGrid: FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_ITEMS_TO_SHOW = 4;

  useEffect(() => {
    const loadNews = () => {
      try {
        setTimeout(() => {
          const loadedNews = newsData.news.map(item => ({
            ...item,
            onClick: () => console.log(`Переход к новости ${item.id}`)
          }));
          setNews(loadedNews);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Ошибка при загрузке новостей');
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  const displayedNews = showAll ? news : news.slice(0, INITIAL_ITEMS_TO_SHOW);
  const hasMoreItems = news.length > INITIAL_ITEMS_TO_SHOW;

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4, width: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 2 }}>
        {error}
      </Alert>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={5}>
        {displayedNews.map((item) => (
          <Grid item key={item.id} xs={12} md={6}>
            <NewsCard {...item} />
          </Grid>
        ))}
      </Grid>
      {hasMoreItems && !showAll && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button 
            variant="outlined" 
            onClick={() => setShowAll(true)}
            sx={{
              px: 4,
              py: 1,
              borderColor: '#142934',
              color: '#142934',
              '&:hover': {
                borderColor: '#142934',
                backgroundColor: 'rgba(20, 41, 52, 0.04)',
              }
            }}
          >
            Показать больше
          </Button>
        </Box>
      )}
    </Box>
  );
}; 