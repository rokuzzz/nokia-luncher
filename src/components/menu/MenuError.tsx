import { Box, Stack, Typography } from '@mui/material';

function MenuError({ isSmall }: { isSmall: boolean }) {
  return (
    <Box
      display={'flex'}
      flexDirection='column'
      justifyContent={'center'}
      height={isSmall ? '' : '40vh'}
      sx={{ mt: 1 }}
    >
      <Typography variant='h4' alignSelf={'center'}>
        We're sorry for the inconvenience
      </Typography>
      <Typography variant='subtitle1' alignSelf={'center'}>
        The menu for the date you have chosen is currently unavailable. Please
        try other dates.
      </Typography>
    </Box>
  );
}

export default MenuError;
