import { Box, Button, IconButton, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer({ isSmall }: { isSmall: boolean }) {
  return (
    <Box
      display={'flex'}
      flexDirection='column'
      justifyContent='end'
      alignContent={'end'}
      sx={
        isSmall
          ? {
              height: '12vh',
              pt: 2,
              pb: 2,
              mb: 7,
            }
          : {
              height: '12vh',
              pt: 2,
              pb: 2,
            }
      }
    >
      <Typography variant='subtitle2' alignSelf={'center'}>
        Nokia Luncher ® 2022
      </Typography>
      <Box display={'flex'} justifyContent={'center'} sx={{ mt: 1 }}>
        <IconButton
          href='https://linkmix.co/13049101'
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href='https://linkmix.co/13049346'
          sx={{ ml: 1, textDecoration: 'none', color: 'inherit' }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href='https://linkmix.co/13049490'
          sx={{ ml: 1, textDecoration: 'none', color: 'inherit' }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
