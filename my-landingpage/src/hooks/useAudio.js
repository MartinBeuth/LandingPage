
import { useState, useEffect } from 'react';

const useAudio = (url) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(url);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [isPlaying, audio]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return { isPlaying, togglePlayPause };
};

export default useAudio;
