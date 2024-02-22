import React, { useRef, useEffect } from 'react';

const AudioPlayer = ({ src, currentTime, onEnded }) => {
  const audioRef = useRef();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', onEnded);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', onEnded);
      }
    };
  }, [onEnded]);

  useEffect(() => {
    if (audioRef.current && currentTime) {
      audioRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  return (
    <audio ref={audioRef} src={src} controls
    className='w-full '
    />
  );
};

export default AudioPlayer;
