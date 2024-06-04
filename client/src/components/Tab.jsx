<<<<<<< HEAD
import React from 'react';
import { useSnapshot } from 'valtio';
=======
import React from 'react'
import { useSnapshot } from 'valtio'
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088

import state from '../store';

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

<<<<<<< HEAD
  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: 'transparent', opacity: 1 };
=======
  const activeStyles = isFilterTab && isActiveTab 
    ? { backgroundColor: snap.color, opacity: 0.5 }
    : { backgroundColor: "transparent", opacity: 1 }
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088

  return (
    <div
      key={tab.name}
      className={`tab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'}`}
      onClick={handleClick}
      style={activeStyles}
    >
<<<<<<< HEAD
      <img
=======
      <img 
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
        src={tab.icon}
        alt={tab.name}
        className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`}
      />
    </div>
<<<<<<< HEAD
  );
};

export default Tab;
=======
  )
}

export default Tab
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
