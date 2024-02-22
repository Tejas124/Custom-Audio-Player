import React, { useState } from 'react';

const AudioUploader = ({ onUpload }) => {
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedName, setSelectedName] = useState("");

  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0]);
  // };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setSelectedName(file.name);
    // Additional validation logic
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
    }
    setSelectedFile(null);
    setSelectedName(null);

  };

  return (
    <div className='flex flex-col border rounded-md p-4 pt-8 w-[350px] h-[300px] gap-10 items-center'>
      <input type="file" name='file' id='file' accept="audio/mp3" onChange={handleFileChange}
      className='w-[0.1px] h-[0.1px] absolute -z-1' />

      <label 
        for="file" 
        className=' cursor-pointer font-[700] text-[1.25rem] text-white bg-[#9F3C75] rounded-md px-5 py-3
                   hover:bg-[#c95da3] duration-200'>
          {"Choose a file"}
      </label>

      <p className=' font-bold text-black text-lg'>{ selectedName }</p>
      <button onClick={handleUpload}
      className='w-[160px] cursor-pointer font-[700] text-[1.25rem] text-white bg-[#9F3C75] rounded-md px-5 py-3
                   hover:bg-[#c95da3] duration-200'
      >Upload</button>
    </div>
  );
};

export default AudioUploader;
