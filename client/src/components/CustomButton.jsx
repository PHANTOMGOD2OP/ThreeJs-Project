<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
import { useSnapshot } from 'valtio';

import state from '../store';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
<<<<<<< HEAD
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === 'outline') {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };
=======
    if(type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    } else if(type === "outline") {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color
      }
    }
  }
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
<<<<<<< HEAD
  );
};

export default CustomButton;
=======
  )
}

export default CustomButton
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
