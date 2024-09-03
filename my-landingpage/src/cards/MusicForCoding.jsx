import React from 'react';
import useAudio from '../hooks/useAudio';
import '../stylesheets/musicforcoding.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const MusicForCoding = () => {
  const radioUrl = 'https://datashat.net/music_for_programming_71-neon_genesis.mp3';
  const { isPlaying, togglePlayPause } = useAudio(radioUrl);

  return (
    <Card className="card" style={{ backgroundImage: 'url(https://i.postimg.cc/J4JXBBy2/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <CardContent>
        <h2>Radio</h2>
        <button className="button" onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </CardContent>
    </Card>
  );
};

export default MusicForCoding;


