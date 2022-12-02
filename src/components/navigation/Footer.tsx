import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      display={'flex'}
      flexDirection='column'
      justifyContent='center'
      alignContent={'center'}
      sx={{ height: '20vh' }}
    >
      <Typography variant='subtitle2' alignSelf={'center'}>
        Nokia Luncher ® 2022
      </Typography>
      <Box display={'flex'} justifyContent={'center'} sx={{ mt: 1 }}>
        <InstagramIcon />
        <GitHubIcon sx={{ ml: 1 }} />
        <LinkedInIcon sx={{ ml: 1 }} />
      </Box>
    </Box>
  );
}

export default Footer;
