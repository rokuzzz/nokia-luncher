import { Box, Button, IconButton, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      display={'flex'}
      flexDirection='column'
      justifyContent='end'
      alignContent={'end'}
      sx={{ height: '12vh', p: 2 }}
    >
      <Typography variant='subtitle2' alignSelf={'center'}>
        Nokia Luncher ® 2022
      </Typography>
      <Box display={'flex'} justifyContent={'center'} sx={{ mt: 1 }}>
        <IconButton
          href='https://linkmix.co/12973923'
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href='https://linkmix.co/12973923'
          sx={{ ml: 1, textDecoration: 'none', color: 'inherit' }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href='https://linkmix.co/12973923'
          sx={{ ml: 1, textDecoration: 'none', color: 'inherit' }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
