import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import PlaylistItem from '../PlaylistItem/PlaylistItem';

function Library({ playlists, loading }) {
  const renderPlaylistItems = () => {
    if (loading)
      return [1, 2, 3, 4, 5, 6].map((e, i) => (
        <PlaylistItem key={i} loading={true} />
      ));
    return playlists.map((playlist, i) => (
      <PlaylistItem {...playlist} key={i} />
    ));
  };

  return (
    <Box
      className='Library'
      sx={{
        display: { xs: 'block', md: 'none' },
        background: 'black',
        height: '100%',
        width: '100%',
        padding: '30px 16px',
      }}
    >
      <Typography variant='h1' sx={{ color: 'text.primary' }}>
        Ditt bibliotek
      </Typography>
      <List>{renderPlaylistItems()}</List>
    </Box>
  );
}

export default Library;
