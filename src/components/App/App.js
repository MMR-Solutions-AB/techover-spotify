import './App.css';
import SideNav from '../SideNav/SideNav';
import Library from '../Library/Library';
import Playlist from '../Playlist/Playlist';

function App() {
  const mockData = [
    { name: 'Rock', playlistId: 123, image: '/Justin-Bieber.png' },
    { name: 'Pop', playlistId: 646, image: '/Justin-Bieber.png' },
    { name: 'Hip hop', playlistId: 834, image: '/Justin-Bieber.png' },
    { name: 'X-mas', playlistId: 5503, image: '/Justin-Bieber.png' },
    { name: 'Code life', playlistId: 4832, image: '/Justin-Bieber.png' },
  ];

  const songs = [
    {
      image: '/Justin-Bieber.png',
      title: 'Holy',
      artist: 'Justin Bieber',
      album: 'No clue',
      duration: 180,
    },
    {
      image: '/Justin-Bieber.png',
      title: 'Holy',
      artist: 'Justin Bieber',
      album: 'No clue',
      duration: 180,
    },
    {
      image: '/Justin-Bieber.png',
      title: 'Holy',
      artist: 'Justin Bieber',
      album: 'No clue',
      duration: 180,
    },
    {
      image: '/Justin-Bieber.png',
      title: 'Holy',
      artist: 'Justin Bieber',
      album: 'No clue',
      duration: 180,
    },
    {
      image: '/Justin-Bieber.png',
      title: 'Holy',
      artist: 'Justin Bieber',
      album: 'No clue',
      duration: 180,
    },
    {
      image: '/Justin-Bieber.png',
      title: 'Holy',
      artist: 'Justin Bieber',
      album: 'No clue',
      duration: 180,
    },
  ];

  return (
    <div
      className='App'
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
      }}
    >
      <SideNav playlists={mockData} />
      <Library playlists={mockData} loading={false} />
      <Playlist
        name={'Rock from the 90s'}
        image='/Justin-Bieber.png'
        loading={false}
        songs={songs}
      />
    </div>
  );
}

export default App;
