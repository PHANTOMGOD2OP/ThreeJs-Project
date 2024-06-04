<<<<<<< HEAD
import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
=======
import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
<<<<<<< HEAD
      <SketchPicker
        color={snap.color}
        disableAlpha
        // for custon preset colors
        // presetColors={['#e63946', '#f1faee', '#a8dadc', '#457b9d', '#1d3557']}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
=======
      <SketchPicker 
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
