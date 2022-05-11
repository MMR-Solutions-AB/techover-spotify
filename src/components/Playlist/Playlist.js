import { Typography, Grid, Box } from '@mui/material';
import TableOfSongs from '../TableOfSongs/TableOfSongs';

const Playlist = ({ name, image, loading, songs }) => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        padding: '60px',
        flex: 1,
      }}
    >
      <Grid container spacing={2} mb={6}>
        <Grid item xs={12} lg={2}>
          <img src={image} style={{ width: '100%' }} alt={name} />
        </Grid>
        <Grid
          item
          xs={12}
          lg={10}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <Typography variant='subtitle1' sx={{ color: 'text.primary', mb: 2 }}>
            Playlist
          </Typography>
          <Typography variant='h1' sx={{ color: 'text.primary' }}>
            {name}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TableOfSongs loading={loading} songs={songs} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Playlist;
