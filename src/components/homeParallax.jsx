import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
export default function HomeParallax() {
  return (
    <div className="parallax absolute w-full h-screen top-0 left-0 overflow-hidden">
      <Parallax
        className="w-52 absolute right-80 bottom-72 hidden 2xl:block"
        speed={50}
        rotate={[0, 75]}
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          src="./images/flower_1.png"
          alt=""
        />
      </Parallax>
      <Parallax
        className="w-52 absolute left-72 bottom-52 hidden 2xl:block"
        speed={20}
        rotate={[-15, -75]}
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          src="./images/flower_2.png"
          alt=""
        />
      </Parallax>
      <div className="absolute w-full flex justify-center h-full items-center">
        <Parallax
          className="w-96  top-52 opacity-10"
          speed={-25}
          rotate={[0, 45]}
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            src="./images/flower_1.png"
            alt=""
            className="md:-translate-x-32"
          />
        </Parallax>
        <Parallax
          className="w-96 bottom-52 opacity-10"
          speed={-20}
          rotate={[0, -45]}
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            src="./images/flower_2.png"
            alt=""
            className="md:translate-x-20 md:translate-y-10"
          />
        </Parallax>
      </div>
    </div>
  );
}
