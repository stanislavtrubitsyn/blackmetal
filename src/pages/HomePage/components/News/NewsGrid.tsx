import { FC, useState, useEffect } from 'react';
import { Grid, CircularProgress, Alert, Box, useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NewsCard } from './NewsCard';
import { NewsItem } from './NewsTypes';
import { Pagination } from '../../../../components/Pagination/Pagination';
import newsDataUA from '../../../../i18n/locales/ua/news.json';
import newsDataEN from '../../../../i18n/locales/en/news.json';

export const NewsGrid: FC = () => {
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  const ITEMS_PER_PAGE = isMobile ? 4 : isTablet ? 4 : 6;

  useEffect(() => {
    const loadNews = () => {
      try {
        setTimeout(() => {
          const currentNewsData = i18n.language === 'en' ? newsDataEN : newsDataUA;
          
          const loadedNews = currentNewsData.news.map(item => ({
            ...item,
            onClick: () => console.log(`${t('common.go')} ${item.id}`)
          }));
          setNews(loadedNews);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(t('news.error'));
        setLoading(false);
      }
    };

    loadNews();
  }, [t, i18n.language]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedNews = news.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4, width: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Grid 
        container 
        spacing={{ xs: 3, sm: 4, md: 5 }}
        sx={{ mb: { xs: 3, sm: 4, md: 5 } }}
      >
        {displayedNews.map((item, idx) => (
          <Grid 
            item 
            key={item.id} 
            xs={12} 
            sm={6}
            sx={{
              mb: {
                xxs: idx !== displayedNews.length - 1 ? 2 : 0,
                xs: 0
              }
            }}
          >
            <NewsCard {...item} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        mt: { xs: 2, sm: 3, md: 4 }
      }}>
        <Pagination
          totalItems={news.length}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          siblingCount={isMobile ? 0 : 1}
        />
      </Box>
    </Box>
  );
}; 