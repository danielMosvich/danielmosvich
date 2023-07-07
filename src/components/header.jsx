import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import HeaderButtonNav from "./headerButtonNav";
import ChangeLanguageButton from "./changeLanguageButton";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Header() {
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState(false);
  const [t, i18n] = useTranslation("global");
  function ChangeLanguage() {
    if (!language) {
      setLanguage(true);
      i18n.changeLanguage("es");
      document.documentElement.lang = "es";
      localStorage.setItem("language", "es");
    } else {
      setLanguage(false);
      i18n.changeLanguage("en");
      document.documentElement.lang = "en";
      localStorage.setItem("language", "en");
    }
  }
  function closeSlide() {
    setShow(false);
    document.body.style.overflow = "auto";
  }
  useEffect(() => {
    if (localStorage.getItem("language") === "es") {
      setLanguage(true);
      i18n.changeLanguage("es");
      document.documentElement.lang = "es";
    }
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="bg-paper_1/80 min-h-[70px] h-[70px] backdrop-blur-lg fixed top-0 w-full p-5 flex justify-end items-end z-30">
        <div className="hidden md:flex w-full justify-end lg:px-20 gap-6">
          <ul className="flex gap-6 font-semibold text-lg max-w-xl">
            <a href="#about">
              <li className="px-3 p-1 shadow-xl shadow-transparent hover:shadow-black/20 rounded-md transition-all cursor-pointer hover:bg-zinc-900 hover:text-white capitalize">
                {t("header.1")}
              </li>
            </a>
            <a href="#projects">
              <li className="px-3 p-1 shadow-xl shadow-transparent hover:shadow-black/20 rounded-md transition-all cursor-pointer hover:bg-zinc-900 hover:text-white capitalize">
                {t("header.2")}
              </li>
            </a>
            <a href="#contact">
              <li className="px-3 p-1 shadow-xl shadow-transparent hover:shadow-black/20 rounded-md transition-all cursor-pointer hover:bg-zinc-900 hover:text-white capitalize">
                {t("header.3")}
              </li>
            </a>
          </ul>
          <div className="md:flex hidden">
            {language ? (
              <ChangeLanguageButton action={ChangeLanguage}>
                ES
                <img
                  className="w-5 h-4 rounded-sm"
                  src="/images/spain.png"
                  alt="flag_es"
                />
              </ChangeLanguageButton>
            ) : (
              <ChangeLanguageButton action={ChangeLanguage}>
                EN
                <img
                  className="w-5 h-3 rounded-sm"
                  src="/images/us.webp"
                  alt="flag_es"
                />
              </ChangeLanguageButton>
            )}
          </div>
        </div>
        <button className="z-[100]  md:hidden">
          <GiHamburgerMenu
            className="animate-show"
            onClick={() => {
              setShow(true);
              document.body.style.overflow = "hidden";
            }}
            size={30}
          ></GiHamburgerMenu>
        </button>
      </nav>
      <ul
        className={`z-50 gap-14 md:gap-2 ${
          show ? "flex" : "hidden"
        } w-screen h-screen box-content overflow-hidden  top-0 right-0 flex-col justify-center items-center font-semibold text-2xl
        animate-show
        md:flex md:w-fit md:h-fit md:flex-row md:relative md:text-lg
        fixed 
        bg-paper_1/40
        backdrop-blur-sm
        `}
        onClick={closeSlide}
      >
        <div
          className="animate-slide_right flex flex-col gap-10 bg-paper_1 h-full w-2/3 right-0 absolute items-center justify-center z-40 shadow-2xl"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <IoCloseSharp
            className="fixed animate-show z-50 top-5 right-5"
            onClick={() => {
              setShow(false);
              document.body.style.overflow = "auto";
            }}
            size={30}
          ></IoCloseSharp>
          <HeaderButtonNav action={closeSlide} url={"#about"}>
            {t("header.1")}
          </HeaderButtonNav>
          <HeaderButtonNav action={closeSlide} url={"#projects"}>
            {t("header.2")}
          </HeaderButtonNav>
          <HeaderButtonNav action={closeSlide} url={"#contact"}>
            {t("header.3")}
          </HeaderButtonNav>
          <div className="md:hidden flex">
            {language ? (
              <ChangeLanguageButton action={ChangeLanguage}>
                ES
                <img
                  className="w-5 h-4 rounded-sm"
                  src="/images/spain.png"
                  alt="flag_es"
                />
              </ChangeLanguageButton>
            ) : (
              <ChangeLanguageButton action={ChangeLanguage}>
                EN
                <img
                  className="w-5 h-3 rounded-sm"
                  src="/images/us.webp"
                  alt="flag_es"
                />
              </ChangeLanguageButton>
            )}
          </div>
        </div>
      </ul>
    </motion.div>
  );
}
