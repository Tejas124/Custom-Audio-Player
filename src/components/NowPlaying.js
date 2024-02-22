import React from 'react';

const NowPlaying = ({ file }) => {
  return (
    <div className=''>
      {file ? <p className='font-bold text-2xl'>Now Playing: <br/> <span className='font-light'>{file.name}</span></p>:'No audio file selected'}
    </div>
  );
};

export default NowPlaying;
