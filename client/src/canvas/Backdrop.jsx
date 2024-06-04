<<<<<<< HEAD
import React, { useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
=======
import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
<<<<<<< HEAD
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
=======
      scae={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight 
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
<<<<<<< HEAD
      <RandomizedLight
=======
      <RandomizedLight 
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
<<<<<<< HEAD
  );
};

export default Backdrop;
=======
  )
}

export default Backdrop
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
