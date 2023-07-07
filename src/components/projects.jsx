import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MiniChip from "./miniChip";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { motion } from "framer-motion";

export default function Projects() {
  const [t] = useTranslation("global");
  const [position, setPosition] = useState(0);

  const changePosition = (i) => {
    setPosition(i);
  };
  const projects = {
    es: {
      all: [
        {
          title: "daily planner",
          description:
            "Una aplicacion web para organizar tu tiempo mediante un pomodoro, to-do list y mas para poder organizar tus actividades para aumentar tu productividad.",
          technology: ["react", "vite", "styled components", "google authent"],
          image: "./images/dailyplanner.png",
          url: "https://dailyplanner.online",
          repo: "https://github.com/danielMosvich/daily-planner",
        },
        {
          title: "genshin characters beta",
          description:
            "Pagina para poder visualizar todos los personajes del videojuego genshin impact, esto gracias a la api de Genshin Impact.",
          technology: ["next", "tailwind", "genshin api"],
          image: "./images/genshinpagebeta.png",
          url: "https://genshinimpact-page-beta.vercel.app/characters",
          repo: "https://github.com/danielMosvich/genshin-fans-page-beta",
        },
        {
          title: "tic tac toe",
          description:
            "Una aplicacion del conocido juego 3 en ralla el cual esta hecho para jugar por turnos. ",
          technology: ["next", "styled components"],
          image: "./images/tiktaktoe.png",
          url: "https://tic-tac-toe-daniraygod.vercel.app",
          repo: "https://github.com/danielMosvich/tic-tac-toe",
        },
        {
          title: "weather app",
          description:
            "Aplicacion que hace uso de la api de climas para poder burcar el clima de la ubicacion dictada. ",
          technology: ["svelte", "styled components"],
          image: "./images/weather.png",
          url: "https://weather-app-daniraygod.vercel.app/",
          repo: "https://github.com/danielMosvich/weather-app",
        },
      ],
    },
    en: {
      all: [
        {
          title: "daily planner",
          description:
            "A web application to organize your time through a pomodoro, to-do list and more to organize your activities to increase your productivity.",
          technology: ["react", "vite", "styled components", "google authent"],
          image: "./images/dailyplanner.png",
          url: "https://dailyplanner.online",
          repo: "https://github.com/danielMosvich/daily-planner",
        },
        {
          title: "genshin characters beta",
          description:
            "Page to be able to visualize all the characters of the video game genshin impact, this thanks to the api of Genshin Impact.",
          technology: ["next", "tailwind", "genshin api"],
          image: "./images/genshinpagebeta.png",
          url: "https://genshinimpact-page-beta.vercel.app/characters",
          repo: "https://github.com/danielMosvich/genshin-fans-page-beta",
        },
        {
          title: "tic tac toe",
          description:
            "An application of the well-known match 3 game which is made to play in turns.",
          technology: ["next", "styled components"],
          image: "./images/tiktaktoe.png",
          url: "https://tic-tac-toe-daniraygod.vercel.app",
          repo: "https://github.com/danielMosvich/tic-tac-toe",
        },
        {
          title: "weather app",
          description:
            "Application that makes use of the weather api to be able to search the weather of the dictated location.",
          technology: ["svelte", "styled components"],
          image: "./images/weather.png",
          url: "https://weather-app-daniraygod.vercel.app/",
          repo: "https://github.com/danielMosvich/weather-app",
        },
      ],
    },
  };

  function Display({ title, description, image, url, technology, repo }) {
    return (
      <div className={`relative sm:flex-[2] md:flex-[3] lg:flex-[4]`}>
        <img
          className="lg:hidden sepia absolute w-full h-full top-0 left-0 object-cover"
          src={image}
          alt="page image example"
        />
        <div className="overflow-y-auto sm:min-h-[450px] sm:max-h-[450px] relative bg-paper_1/90 p-5 border-2 border-zinc-900 rounded-b-md sm:rounded-none md:grid lg:grid-cols-2 ">
          <div className="z-10">
            <h3 className="text-3xl font-bold capitalize pl-4 drop-shadow-md">
              {title}
            </h3>
            <p className="text-md font-semibold bg-paper_1 shadow-xl text-zinc-800  px-4 py-3 mt-3 backdrop-blur-sm rounded-md">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 py-5 pr-4">
              {technology &&
                technology.map((e, i) => (
                  <div key={e + i}>
                    <MiniChip>{e}</MiniChip>
                  </div>
                ))}
            </div>
            <div className="flex gap-3">
              <div
                className="font-semibold 
            text-zinc-800
            hover:text-blue-600 transition-colors cursor-pointer"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-paper_1 flex gap-2 items-center"
                >
                  <BiLinkExternal size={28} />
                  View Page
                </a>
              </div>
              <div
                className=" font-semibold text-zinc-800
            hover:text-rose-600 transition-colors cursor-pointer"
              >
                <a
                  href={repo}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-3 rounded-md bg-paper_1 flex gap-2 items-center"
                >
                  <BiLogoGithub size={28} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex h-full py-10 items-center">
            <img
              src={image}
              alt="photo example"
              className="scale-125 opacity-80 xl:scale-[1.4] w-full -translate-x-14 xl:-translate-x-28 object-cover rounded-lg mt-5 shadow-xl"
            />
          </div>
        </div>
      </div>
    );
  }
  // useEffect(()=>{
  //   console.log(position)
  // },[])
  return (
    <div id="projects" className="h-fit w-full p-5 pt-[70px]">
      <div className="md:max-w-5xl md:mx-auto">
        {/* sticky comming soon */}
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-2xl font-extrabold uppercase underline"
        >
          {t("projects.title")}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col py-10 sm:flex-row "
        >
          <ul className="flex sm:flex-[1] overflow-x-auto sm:flex-col sm:border-2 sm:border-black sm:border-r-0">
            {projects[t("language")].all.map((e, i) => {
              return (
                <li
                  key={String(i) + e.title}
                  className={`${
                    position === i &&
                    "bg-zinc-900 text-white rounded-tl-md rounded-tr-md"
                  } px-3 py-2 whitespace-nowrap transition-colors cursor-pointer capitalize sm:rounded-none font-semibold text-ellipsis sm:overflow-hidden`}
                  onClick={() => changePosition(i)}
                >
                  {e.title}
                </li>
              );
            })}
          </ul>
          {/* DISPLAY */}
          {projects[t("language")].all &&
            Display(projects[t("language")].all[position])}
          {/* {Display(projects.all[position])} */}
        </motion.div>
      </div>
    </div>
  );
}
