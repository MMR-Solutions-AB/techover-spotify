import React from 'react';
import { Box, Divider } from '@mui/material';
import SideNavOption from '../SideNavOption/SideNavOption';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function SideNav({ playlists }) {
  const renderPlaylists = () => {
    return playlists.map((playlist) => {
      return <SideNavOption key={playlist.playlistId} name={playlist.name} />;
    });
  };

  return (
    <Box
      sx={{
        bgcolor: 'black',
        width: 275,
        height: '100vh',
        display: { xs: 'none', md: 'block' },
        zIndex: 1,
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
      }}
    >
      <img
        style={{ width: 130, padding: '24px 0px 24px 24px' }}
        src='/Spotify_Logo.png'
        alt='logo'
      />
      <SideNavOption name='Home' Icon={HomeOutlinedIcon} />
      <SideNavOption name='Search' Icon={SearchOutlinedIcon} />
      <Divider sx={{ backgroundColor: '#ffffff30', margin: '12px 24px' }} />
      {renderPlaylists()}
    </Box>
  );
}
