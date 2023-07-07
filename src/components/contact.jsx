import { useTranslation } from "react-i18next";
import { BsSend } from "react-icons/bs";
import { motion } from "framer-motion";
export default function Contact() {
  const [t] = useTranslation("global");
  return (
    <div id="contact" className="grid place-content-center min-h-[70vh]">
      <div className="flex flex-col px-10 max-w-lg text-center gap-5">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold uppercase"
        >
          {t("contact.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay:0.3 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-md md:text-lg font-semibold "
        >
          {t("contact.description")}
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay:0.5 }}
          viewport={{ once: true, amount: 0.8 }}
          href="mailto:mrdaniraymay@gmail.com"
          className="mx-auto mt-10 w-fit ring-2 ring-zinc-900 rounded-sm px-3 py-2 text-lg font-mono font-semibold hover:bg-zinc-900 hover:text-white transition-colors flex items-center gap-3"
        >
          {t("contact.button")} <BsSend size={20} />
        </motion.a>
      </div>
    </div>
  );
}
