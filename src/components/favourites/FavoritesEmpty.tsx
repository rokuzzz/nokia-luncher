import { Box, Typography } from '@mui/material';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

function FavoritesEmpty() {
  return (
    <Box
      display={'flex'}
      flexDirection='column'
      justifyContent={'center'}
      height={'60vh'}
      sx={{ mt: 1 }}
    >
      <Typography variant='h4' alignSelf={'center'}>
        No favorites yet!
      </Typography>
      <Typography
        variant='subtitle1'
        alignSelf={'center'}
        sx={{ lineHeight: '1.3', opacity: '50%' }}
      >
        Click the heart icon on any piece of content,
      </Typography>
      <Typography
        variant='subtitle1'
        alignSelf={'center'}
        sx={{ lineHeight: '1.3', opacity: '50%' }}
      >
        and you'll see it here next time you visit.
      </Typography>
      <HeartBrokenIcon
        color='error'
        fontSize='large'
        sx={{ alignSelf: 'center', mt: 2 }}
      />
    </Box>
  );
}

export default FavoritesEmpty;
