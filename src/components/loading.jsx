// import { motion } from "framer-motion";
import { PiFlowerLotusBold } from "react-icons/pi";
export default function Loading({show}) {
  return (
    <div className="w-full h-screen bg-paper_1 z-50 absolute top-0 left-0 grid place-content-center"
    style={{opacity: show ? 1 : 0, transition:"all 1s"}}
    >
      <PiFlowerLotusBold size={100} className="animate-pulse" />
      <h2 className="font-extrabold text-2xl text-center animate-pulse">
        Loading
      </h2>
    </div>
  );
}
