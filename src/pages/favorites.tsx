import {
  Typography,
  Container,
  List,
  ListItem,
  Divider,
  ListItemText,
  Box,
  ButtonGroup,
  IconButton,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { MenuComponentBox } from '../styles/menu';
import NavigationBar from '../components/navigation/NavigationBar';
import { useAppSelector } from '../hooks/appHook';

export default function Favorites() {
  const { itemsInFavorites } = useAppSelector(
    (state) => state.favoritesReducer
  );

  const renderFavoritesContent = itemsInFavorites.map((item) => (
    <Grid xs={12} md={6}>
      <Card>
        <CardContent>
          <Typography>{item.title_fi}</Typography>
        </CardContent>
      </Card>
    </Grid>
  ));

  return (
    <>
      <NavigationBar></NavigationBar>
      <MenuComponentBox margin={'auto'}>
        <Typography
          variant='h5'
          sx={{
            mt: 3,
            fontWeight: '800',
          }}
        >
          Favorites
        </Typography>
        <Grid container rowSpacing={0}>
          {renderFavoritesContent}
        </Grid>
      </MenuComponentBox>
    </>
  );
}
