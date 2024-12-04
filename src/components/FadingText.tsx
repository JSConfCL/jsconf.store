import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const FadingText = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const firstTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.31],
    [1, 1, 0.2]
  );

  const secondTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.31, 0.4, 0.41],
    [0.2, 0.2, 1, 1, 0.2]
  );

  const thirdTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.41, 0.55, 0.56],
    [0.2, 0.2, 1, 1, 0.2]
  );

  const fourthTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.56, 0.57, 1],
    [0.2, 0.2, 1, 1]
  );

  return (
    <div className="bg-black text-white relative" ref={sectionRef}>
      <div className="min-h-screen max-w-5xl px-10 lg:px-20 pt-28 pb-36 md:py-32 md:py-42 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-5xl tracking-tight font-semibold">
        <div className="leading-[1.2] md:leading-[1.15] flex flex-col gap-24 lg:gap-16">
          <motion.div
            className="transition-all duration-300"
            style={{ opacity: firstTextOpacity }}
          >
            Con tu compra:
          </motion.div>
          <motion.span
            className="transition-all duration-300 inline-block after:content-['_']"
            style={{ opacity: secondTextOpacity }}
          >
            <b>Apoyas la Conferencia</b> <br />
            Haces posible el evento de tecnología — hecho por voluntarios — más
            grande de todo Chile.
          </motion.span>
          <motion.span
            className="transition-all duration-300 inline-block after:content-['_']"
            style={{ opacity: thirdTextOpacity }}
          >
            <b>Impulsas la Comunidad</b> — Ayudas a mantener iniciativas como
            TechSchool, meetups y workshops gratuitos que benefician a miles de
            personas.
          </motion.span>
          <motion.span
            className="transition-all duration-300 inline-block"
            style={{ opacity: fourthTextOpacity }}
          >
            <b>Te llevas Algo Especial</b> — Obtienes un producto de edición
            limitada, diseñados exclusivamente para la comunidad tech de Chile.
          </motion.span>
        </div>
      </div>
      <div className="pt-12 pb-36 relative">
        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 32"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32"
            aria-hidden="true"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M16.922 10.56c.07 0 .127 1.74.127 3.895 0 2.156-.058 3.897-.127 3.897s-.127-1.741-.127-3.897c0-2.144.058-3.896.127-3.896Zm-1.936 4.368c.057 0 .103 1.36.103 3.032 0 1.671-.046 3.031-.103 3.031-.058 0-.104-1.36-.104-3.031 0-1.672.046-3.032.104-3.032Zm11.907-2.847c.07 0 .127 1.74.127 3.896 0 2.156-.057 3.896-.127 3.896-.069 0-.126-1.74-.126-3.896 0-2.156.057-3.896.126-3.896Zm-4.357.98c.035 0 .07.864.07 1.936s-.035 1.937-.07 1.937-.07-.865-.07-1.937c.012-1.06.035-1.936.07-1.936ZM9.856 23.205c.034 0 .07.864.07 1.936s-.036 1.937-.07 1.937c-.035 0-.07-.865-.07-1.937s.035-1.936.07-1.936Zm-3.458-4.946c.069 0 .127 1.753.127 3.897 0 2.155-.058 3.896-.127 3.896-.07 0-.127-1.752-.127-3.896-.012-2.156.058-3.897.127-3.897Zm-3.309 2.329c.035 0 .07.864.07 1.936s-.035 1.937-.07 1.937c-.034 0-.069-.864-.069-1.936s.035-1.937.07-1.937ZM32 4.23a4.18 4.18 0 0 0-1.245-2.986A4.18 4.18 0 0 0 27.77 0H4.23a4.18 4.18 0 0 0-2.985 1.245A4.18 4.18 0 0 0 0 4.23v23.538a4.18 4.18 0 0 0 1.245 2.986A4.227 4.227 0 0 0 4.23 32h23.538a4.179 4.179 0 0 0 2.986-1.245A4.227 4.227 0 0 0 32 27.77V4.23ZM.876 23.71V4.232c0-.923.38-1.753.98-2.364a3.32 3.32 0 0 1 2.363-.98h23.539a3.37 3.37 0 0 1 2.363.98 3.32 3.32 0 0 1 .98 2.364v13.233a.625.625 0 0 0-.07-.288c-.195-.38-.368-.738-.518-1.084v.07l-.138 4.887-.139-4.888c-.034-1.371-.357-2.663-.484-4.057-.127-.726-.957-2.536-1.014-.669l-.139 4.888-.126-4.888c-.035-1.245.069-2.029-1.303-2.64-.427-.207-.991.162-1.718 1.084-.276.369-.322 7.158-.345 8.104-.046-1.522-.012-7.712-.473-8.715a1.36 1.36 0 0 0-.127-.207c-.196-.208-.196.15-.23.23-.093.22-.07.23-.081.473l-.138 4.887c-.023-.703-.023-5.302-.265-5.602-.358-.45-.704-.196-.911.23-.265.53-.162 1.061-.358 1.649-.184.576-.207.553-.484 1.037-.126.231-.3.554-.495.957-.23.484-.415.484-.68.888-.22.323-.38.737-.496 1.256-.116.53-.116.819-.53.046a4.732 4.732 0 0 1-.277-.657l-.07 2.271-.08-2.743c-.046-.162-.092-.346-.138-.53l-.035-.07-.138 4.577-.104-3.447-.046-1.775c-.058-.15-.115-.3-.173-.461l-.07 2.305-.137 4.888-.139-4.888c-.069-2.432-.196-3.954-.553-6.328-.035-.116-.138-.669-.288-1.649a.948.948 0 0 0-.957-.818c-.404.011-.392.242-.634.518-.392.462-.288 3.85-.311 4.67l-.139 4.887-.138-4.888c-.012-.473 0-3.942-.196-4.046-.08-.046-.15.023-.196.207 0 .139-.011.266-.023.37l-.127 4.265-.103-3.828c-.07.035-.15.07-.254.15-.392.265-.669.669-.841 1.21-.277.877-.243.9-.277 1.868l-.138 4.888-.139-4.888-.023-.991c-.415.553-.795 1.97-1.13 4.276-.103 2.006-.334 4.312-.68 6.928l-.173 6.11-.138-4.888c-.011-.553-.023-.726-.15-1.256-.069-.3-.046-.508-.242-.738-.346-.415-.715-.657-1.107-.75-.322.058-.587.035-.783-.069l-.012.461-.138 4.888-.139-4.887-.023-.738c0-.023-.011-.046-.023-.08a26.764 26.764 0 0 1-.818-2.237c-.115-.358-.311-.6-.369-.946-.07-.437.012-.391.058-.737.034-.242-.139-.335-.196-.588-.035-.138-.023-.277-.023-.438 0-.841.138-.76-.438-1.141a2.65 2.65 0 0 1-.496-.427c-.185-.415-.427-.542-.738-.369-.253.139-.357.473-.542.704-.046.057-.08.103-.126.15a.19.19 0 0 0-.058.138l-.046 1.74-.138 4.888-.139-4.888-.023-.887a.208.208 0 0 0-.161-.196.203.203 0 0 0-.23.092s0 .011-.012.011c-.173.312-.335.68-.473 1.119-.011.023-.011.034-.011.057l-.116 4.115-.092-3.33a15.38 15.38 0 0 0-.311 2.063c-.127 1.233-.75 3.527-1.856 4.968a.916.916 0 0 0-.127.415Zm24.9 4.658c.979 0 2.097-.3 2.477-1.291.404-1.06.081-1.914-.622-2.536-.634-.554-1.464-.715-2.086-1.095-.335-.208-.623-.461-.496-.9.184-.68 1.107-.587 1.498-.16l.208.31 1.187-.749c-.53-.98-1.475-1.349-2.536-1.21-1.36.173-2.155 1.268-1.844 2.593.38 1.649 2.248 1.557 3.09 2.398.53.53.103 1.222-.612 1.28-.795.057-1.325-.242-1.74-.923l-1.222.738c.542 1.107 1.498 1.556 2.697 1.545Zm-4.047-.75c.334-.426.496-1.037.461-1.81v-5.025h-1.533v4.76c0 .508.115 1.257-.507 1.43-.646.173-1.038-.219-1.314-.76l-1.234.749c.254.518.611.899 1.084 1.14.945.485 2.363.393 3.043-.483Zm-8.104-7.792c.035 0 .07.865.07 1.937s-.035 1.936-.07 1.936c-.034 0-.069-.864-.069-1.936.012-1.072.035-1.937.07-1.937Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
