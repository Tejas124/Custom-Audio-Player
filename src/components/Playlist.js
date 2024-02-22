import React from 'react';

const Playlist = ({ files, onPlay }) => {
  return (
    <div className='border rounded-md p-4 w-[350px] h-auto gap-5'>
      <h3 className='font-bold text-2xl'>Playlist</h3>
      <ul className='flex flex-col rounded-md pt-8 gap-5'>
        {files.map((file, index) => (
          <li key={index} onClick={() => onPlay(file)}
          className='bg-[#FAEEFA] p-3 rounded-md w-full cursor-pointer hover:bg-[#fec7ee] duration-200'>
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
