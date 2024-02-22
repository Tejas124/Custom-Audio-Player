import React, { useState, useEffect } from 'react';
import AudioUploader from './components/AudioUploader';
import AudioPlayer from './components/AudioPlayer';
import Playlist from './components/Playlist';
import NowPlaying from './components/NowPlaying';
import Navbar from './components/Navbar';

const App = () => {
  const [files, setFiles] = useState([]);
  const [currentFile, setCurrentFile] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const storedFile = localStorage.getItem('currentFile');
    const storedTime = localStorage.getItem('currentTime');

    if (storedFile && storedTime) {
      const fileIndex = files.findIndex(file => file.name === storedFile);
      if (fileIndex !== -1) {
        setCurrentFile(files[fileIndex]);
        setCurrentTime(parseFloat(storedTime));
      }
    }
  }, [files]);

  useEffect(() => {
    if (currentFile) {
      localStorage.setItem('currentFile', currentFile.name);
      localStorage.setItem('currentTime', currentTime.toString());
    }
  }, [currentFile, currentTime]);

  const handleUpload = (file) => {
    setFiles([...files, file]);
  };

  const handlePlay = (file) => {
    setCurrentFile(file);
    setCurrentTime(0);
  };

  const handleEnded = () => {
    const nextIndex = files.findIndex(f => f === currentFile) + 1;
    if (nextIndex < files.length) {
      handlePlay(files[nextIndex]);
    }
  };

  return (
    <div className='w-full'>
      <Navbar />

      <div className=' flex justify-between px-5'>
        <AudioUploader onUpload={handleUpload} />

        <Playlist files={files} onPlay={handlePlay} />
        {/* <AudioPlayer src={currentFile ? URL.createObjectURL(currentFile) : null} onEnded={handleEnded} /> */}
        <div className='flex flex-col gap-6 border rounded-md p-4 w-[350px] mb-3'>
          <NowPlaying file={currentFile} />
          <AudioPlayer
            src={currentFile ? URL.createObjectURL(currentFile) : null}
            currentTime={currentTime}
            onEnded={handleEnded}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
