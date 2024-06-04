import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
<<<<<<< HEAD
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';
import { CustomButton } from '../components';
=======
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
<<<<<<< HEAD
        <motion.section
          className="home"
          {...slideAnimation('left')}
        >
          <motion.header {...slideAnimation('down')}>
            <img
              src="./threejs.png"
=======
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./threejs.png'
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

<<<<<<< HEAD
          <motion.div
            className="home-content"
            {...headContainerAnimation}
          >
=======
          <motion.div className="home-content" {...headContainerAnimation}>
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
<<<<<<< HEAD
                Create you unique and exclusive shirt with our brand-new 3D customization tool.{' '}
                <strong>Unleash your imagination</strong> and define your own style.
              </p>

              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
=======
              Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>

              <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
<<<<<<< HEAD
  );
};

export default Home;
=======
  )
}

export default Home
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
