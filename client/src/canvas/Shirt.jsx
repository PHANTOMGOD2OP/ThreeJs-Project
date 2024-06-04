<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
<<<<<<< HEAD
          <Decal
=======
          <Decal 
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
<<<<<<< HEAD
          <Decal
=======
          <Decal 
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
<<<<<<< HEAD
  );
};

export default Shirt;
=======
  )
}

export default Shirt
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
