<<<<<<< HEAD
import React from 'react';

import CustomButton from './CustomButton';
=======
import React from 'react'

import CustomButton from './CustomButton'
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
<<<<<<< HEAD
        <input
=======
        <input 
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
<<<<<<< HEAD
        <label
          htmlFor="file-upload"
          className="filepicker-label"
        >
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">{file === '' ? 'No file selected' : file.name}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
=======
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton 
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
          type="outline"
          title="Logo"
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
<<<<<<< HEAD
        <CustomButton
=======
        <CustomButton 
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
          type="filled"
          title="Full"
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
<<<<<<< HEAD
  );
};

export default FilePicker;
=======
  )
}

export default FilePicker
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
