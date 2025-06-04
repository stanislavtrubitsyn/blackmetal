import { FC } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { HeroSectionProps } from './types';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled(Box)({
  width: '100%',
  position: 'relative',
  marginBottom: '2rem',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxHeight: '880px',
});

const HeaderImage = styled('img')({
  width: '100%',
  height: '100%',
  display: 'block',
  objectFit: 'cover',
});

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundColor: 'rgba(20, 41, 52, 0.8)',
  display: 'flex',
  alignItems: 'center',
});

const ContentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',
  paddingLeft: '2rem',
});

const Hashtag = styled(Typography)(({ theme }) => ({
  color: '#fff',
  textAlign: 'left',
  fontSize: '6rem',
  fontWeight: 700,
  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  [theme.breakpoints.down('md')]: {
    fontSize: '4rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '3rem',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  borderColor: '#fff',
  padding: '12px 32px',
  fontSize: '1.2rem',
  '&:hover': {
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

export const HeroSection: FC<HeroSectionProps> = ({
  image,
  overlay = true
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/feedback');
  };

  return (
    <HeaderContainer>
      <HeaderImage src={image} alt="#IЧM" />
      {overlay && (
        <Overlay>
          <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center' }}>
            <ContentWrapper>
              <Hashtag variant="h1">
                #IЧM
              </Hashtag>
              <StyledButton 
                variant="outlined" 
                size="large"
                onClick={handleButtonClick}
              >
                Зворотний зв'язок
              </StyledButton>
            </ContentWrapper>
          </Container>
        </Overlay>
      )}
    </HeaderContainer>
  );
}; 