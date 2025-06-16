import { FC, useState } from 'react';
import { Box, IconButton, Typography, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SendIcon from '@mui/icons-material/Send';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { PresentationPlayerProps } from './types';

const PlayerContainer = styled(Box)({
  width: '100%',
  maxWidth: '680px',
  margin: '0 auto',
  background: '#fff',
  borderRadius: 0,
  overflow: 'hidden',
  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
});

const SlideContent = styled(Box)({
  height: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
});

const SlideImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'fill',
  position: 'absolute',
  top: 0,
  left: 0,
});

const ControlsBar = styled(Box)({
  background: '#2D7A84',
  display: 'flex',
  alignItems: 'center',
  height: 48,
  padding: '0 16px',
  gap: 8,
  position: 'relative',
  zIndex: 2,
});

const ProgressBar = styled(LinearProgress)({
  flex: 1,
  height: 6,
  borderRadius: 3,
  background: '#2D7A84',
  '& .MuiLinearProgress-bar': {
    background: '#fff',
  },
});

export const PresentationPlayer: FC<PresentationPlayerProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const handlePrev = () => setCurrent(c => (c === 0 ? total - 1 : c - 1));
  const handleNext = () => setCurrent(c => (c === total - 1 ? 0 : c + 1));

  return (
    <PlayerContainer>
      <SlideContent>
        <SlideImage src={slides[current].image} alt="slide" />
      </SlideContent>
      <ControlsBar>
        <IconButton onClick={handlePrev} sx={{ color: '#fff' }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton onClick={handleNext} sx={{ color: '#fff', ml: 0.5 }}>
          <ArrowForwardIosIcon />
        </IconButton>
        <Typography sx={{ color: '#fff', minWidth: 32, textAlign: 'center', fontWeight: 500, ml: 2 }}>
          {current + 1}
        </Typography>
        <ProgressBar variant="determinate" value={((current + 1) / total) * 100} />
        <Typography sx={{ color: '#fff', minWidth: 32, textAlign: 'center', fontWeight: 500 }}>
          {total}
        </Typography>
        <IconButton sx={{ color: '#fff' }}>
          <SendIcon />
        </IconButton>
        <IconButton sx={{ color: '#fff' }}>
          <FullscreenIcon />
        </IconButton>
      </ControlsBar>
    </PlayerContainer>
  );
}; 

export default PresentationPlayer