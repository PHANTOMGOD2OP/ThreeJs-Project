<<<<<<< HEAD
import { Canvas } from '@react-three/fiber';
=======
import { Canvas } from '@react-three/fiber'
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
import { Environment, Center } from '@react-three/drei';

import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
<<<<<<< HEAD
      <Environment preset="city" />
=======
     {/*<Environment preset="city" />*/}
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
<<<<<<< HEAD
  );
};

export default CanvasModel;
=======
  )
}

export default CanvasModel
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
