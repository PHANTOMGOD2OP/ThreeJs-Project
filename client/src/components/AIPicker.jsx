<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088

import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
<<<<<<< HEAD
      <textarea
=======
      <textarea 
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
<<<<<<< HEAD

      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
=======
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton 
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
<<<<<<< HEAD
            <CustomButton
=======
            <CustomButton 
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />
<<<<<<< HEAD
            <CustomButton
=======

            <CustomButton 
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
<<<<<<< HEAD
  );
};

export default AIPicker;
=======
  )
}

export default AIPicker
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
