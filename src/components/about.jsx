import { useTranslation } from "react-i18next";
import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoTailwindCss,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import Chip from "./chip";
import { motion } from "framer-motion";

export default function About() {
  const [t] = useTranslation("global");
  return (
    <div
      id="about"
      className="min-h-screen p-5 flex flex-col gap-5 justify-center items-center"
    >
      <div
        className="flex flex-col gap-5 
      md:grid md:grid-cols-2 md:max-w-5xl
      "
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="md:hidden w-fit sticky top-5 text-2xl font-extrabold uppercase z-40 underline"
        >
          {t("about.title")}
        </motion.h2>
        <div className="flex flex-col gap-5 justify-center">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="hidden md:block w-fit text-2xl font-extrabold uppercase underline"
          >
            {t("about.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-lg font-semibold text-zinc-700"
          >
            {t("about.description")}
          </motion.p>
        </div>
        <div className="overflow-auto rounded-xl">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
            className="aspect-square"
            src="/images/avatar.png"
            alt="photo"
          />
        </div>
      </div>

      <div className="md:hidden w-full relative flex gap-3 py-10 overflow-x-clip  px-0  slider-shadow">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.1 }}
          className="flex carrousel"
        >
          <div className="flex gap-3 ml-3">
            <Chip>
              <BiLogoHtml5 size={25} />
              HTML
            </Chip>
            <Chip>
              <BiLogoCss3 size={25} />
              CSS
            </Chip>
            <Chip>
              <BiLogoJavascript size={25} />
              Javascript
            </Chip>
            <Chip>
              <BiLogoTailwindCss size={25} />
              Tailwind
            </Chip>
            <Chip>
              <BiLogoReact size={25} />
              React{" "}
            </Chip>
            <Chip>
              <TbBrandNextjs size={25} />
              Next
            </Chip>
            <Chip>
              <BiLogoNodejs size={25} />
              Node
            </Chip>
            <Chip>
              <SiExpress size={25} />
              Express
            </Chip>
            <Chip>
              <BiLogoMongodb size={25} />
              Mongo DB
            </Chip>
          </div>
          <div className="flex gap-3 ml-3">
            <Chip>
              <BiLogoHtml5 size={25} />
              HTML
            </Chip>
            <Chip>
              <BiLogoCss3 size={25} />
              CSS
            </Chip>
            <Chip>
              <BiLogoJavascript size={25} />
              Javascript
            </Chip>
            <Chip>
              <BiLogoTailwindCss size={25} />
              Tailwind
            </Chip>
            <Chip>
              <BiLogoReact size={25} />
              React{" "}
            </Chip>
            <Chip>
              <TbBrandNextjs size={25} />
              Next
            </Chip>
            <Chip>
              <BiLogoNodejs size={25} />
              Node
            </Chip>
            <Chip>
              <SiExpress size={25} />
              Express
            </Chip>
            <Chip>
              <BiLogoMongodb size={25} />
              Mongo DB
            </Chip>
          </div>
        </motion.div>
      </div>
      <div className="hidden max-w-5xl md:flex w-full relative gap-3 py-10 overflow-x-clip  px-0">
        <div className="flex">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
            className=" flex flex-wrap justify-center gap-5 ml-3"
          >
            <Chip>
              <BiLogoHtml5 size={25} />
              HTML
            </Chip>
            <Chip>
              <BiLogoCss3 size={25} />
              CSS
            </Chip>
            <Chip>
              <BiLogoJavascript size={25} />
              Javascript
            </Chip>
            <Chip>
              <BiLogoTailwindCss size={25} />
              Tailwind
            </Chip>
            <Chip>
              <BiLogoReact size={25} />
              React{" "}
            </Chip>
            <Chip>
              <TbBrandNextjs size={25} />
              Next
            </Chip>
            <Chip>
              <BiLogoNodejs size={25} />
              Node
            </Chip>
            <Chip>
              <SiExpress size={25} />
              Express
            </Chip>
            <Chip>
              <BiLogoMongodb size={25} />
              Mongo DB
            </Chip>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
