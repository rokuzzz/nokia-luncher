import {
  Box,
  Divider,
  IconButton,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function MenuSkeleton({ items }: {items: number}) {
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));

  const renderSkeleton = Array(items)
    .fill(0)
    .map((item) => (
      <Box>
        <Box
          maxWidth={isDownMedium ? '100%' : '65%'}
          display={'flex'}
          sx={{ pt: 2, pb: 2 }}
          alignItems={'start'}
          justifyContent={'space-between'}
        >
          <Box display={'flex'} flexDirection={'column'} width={'100%'}>
            <Typography variant='body2'>
              <Skeleton variant='text' width={'17%'} animation={'wave'} />
            </Typography>
            <Typography variant='subtitle2'>
              <Skeleton variant='text' width={'50%'} animation={'wave'} />
            </Typography>
            <Typography>
              <Skeleton variant='text' width={'50%'} animation={'wave'} />
            </Typography>
          </Box>
          <Box margin={'auto 0'}>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </Box>
        </Box>
        <Divider />
      </Box>
    ));
  return <Stack>{renderSkeleton}</Stack>;
}

export default MenuSkeleton;
