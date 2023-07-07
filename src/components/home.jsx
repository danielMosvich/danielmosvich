import { useTranslation } from "react-i18next";
import HomeParallax from "./homeParallax";
import { motion } from "framer-motion";
export default function Home() {
  const [t, i18next] = useTranslation("global");
  return (
    <div className="w-full min-h-screen grid place-content-center">
      <HomeParallax />
      <div className="font-extrabold font-roboto mx-3">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{duration:1, delay:1}} 
          className="text-2xl sm:text-4xl"
        >
          {t("presentation.presentation")}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="text-5xl sm:text-7xl lg:text-8xl "
        >
          {t("presentation.name")}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="text-xl sm:text-3xl font-[500]"
        >
          {t("presentation.talent")}
        </motion.h1>
      </div>
    </div>
  );
}
