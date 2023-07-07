import { useTranslation } from "react-i18next";
import {
  BiLogoGithub,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiSolidHeart,
} from "react-icons/bi";
export default function Footer() {
  const [t] = useTranslation("global");
  return (
    <div className="p-5">
      <ul className="flex gap-5 justify-center">
        <li>
          <a
            href="https://github.com/danielMosvich"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoGithub size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/danielmosvich"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoTwitter size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/danielMosvich"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoLinkedin size={30} />
          </a>
        </li>
      </ul>
      <p className=" text-center mt-3 text-sm font-mono">
        {t("footer")} <span className="font-semibold ">Daniel Mosvich </span>
        <BiSolidHeart className="inline" />
      </p>
    </div>
  );
}

// export default Footer;
