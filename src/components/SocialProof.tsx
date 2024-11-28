import { useEffect, useRef, useState, type RefObject } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const testimonials = [
  {
    name: "Ricardo — @diruzcode",
    quote: "Odio el animé, pero amo el polerón de la jsconf.",
    imageUrl: "https://avatars.githubusercontent.com/u/12041331?v=4",
    link: "https://github.com/diruzcode",
  },

  {
    name: "Ana — @uxanarangel",
    quote: "Si se vende todo, hago un mega-livestream de 24 horas.",
    imageUrl: "https://avatars.githubusercontent.com/u/30361612?v=4",
    link: "https://uxanarangel.com/",
  },
  {
    name: "Felipe — @fforres",
    quote: "Oooh, el gorro weno",
    imageUrl: "https://avatars.githubusercontent.com/u/952992?v=4",
    link: "https://fforr.es",
  },
];

const TestimonialsIn2Columns = ({
  scrollRef,
}: {
  scrollRef: RefObject<HTMLDivElement>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest <= 1 / 3) {
        setCurrentIndex(0);
      } else if (latest <= 2 / 3) {
        setCurrentIndex(1);
      } else {
        setCurrentIndex(2);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="h-[400svh] grid grid-cols-12 relative" ref={containerRef}>
      <div className="col-span-6 bg-black sticky top-0 h-[100svh]">
        <AnimatePresence presenceAffectsLayout={false}>
          <motion.div
            key={testimonials[currentIndex].quote}
            className="flex flex-col items-center justify-center text-right px-10 lg:px-20 absolute top-0 left-0 right-0 bottom-0"
            transition={{ duration: 0.35 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mono italic">
              ❝
              <br />
              {testimonials[currentIndex].quote}
              <br />❞
            </p>
            <br />
            <br />
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl flex justify-end flex-col items-end font-mono  w-full">
              <a
                href={testimonials[currentIndex].link}
                target="_blank"
                rel="noreferrer"
              >
                {testimonials[currentIndex].name}
              </a>
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="col-span-6 bg-white sticky top-0 h-[100svh]">
        <AnimatePresence presenceAffectsLayout={false}>
          <motion.div
            key={testimonials[currentIndex].imageUrl}
            className="flex items-center justify-center absolute top-0 bottom-0 left-0 right-0 grayscale"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <div className="px-4 lg:px-10">
              <img
                src={testimonials[currentIndex].imageUrl}
                alt={testimonials[currentIndex].name}
                className="max-w-80 max-h-80 w-full h-full rounded-full object-cover aspect-square"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const TestimonialsIn2Rows = ({
  scrollRef,
}: {
  scrollRef: RefObject<HTMLDivElement>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      console.log(latest);
      if (latest <= 1 / 3) {
        setCurrentIndex(0);
      } else if (latest <= 2 / 3) {
        setCurrentIndex(1);
      } else {
        setCurrentIndex(2);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  console.log({ currentIndex });

  return (
    <div className="h-[400svh] relative flex flex-col" ref={containerRef}>
      <div className="sticky top-0 h-[50vh] bg-black">
        <AnimatePresence presenceAffectsLayout={false}>
          <motion.div
            key={testimonials[currentIndex].name}
            className="flex flex-col items-center justify-center absolute inset-0 px-10 lg:px-20"
            transition={{ duration: 0.35 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="block text-center font-mono italic">
              <span className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                ❝
                <br />
                {testimonials[currentIndex].quote}
                <br />❞
              </span>
              <br />
              <br />

              <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                {testimonials[currentIndex].name}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="sticky top-[50vh] h-[50vh] bg-white overflow-hidden grayscale">
        <AnimatePresence presenceAffectsLayout={false}>
          <motion.div
            key={testimonials[currentIndex].imageUrl}
            className="flex items-center justify-center absolute inset-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <img
              src={testimonials[currentIndex].imageUrl}
              alt={testimonials[currentIndex].name}
              className="w-[40%] aspect-square rounded-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const useOrientation = () => {
  const [isPortrait, setIsPortrait] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(orientation: portrait)").matches
      : true
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)");
    const handleChange = (e: MediaQueryListEvent) => {
      setIsPortrait(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isPortrait;
};

export const SocialProof = () => {
  const isPortrait = useOrientation();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    for (const testimonial of testimonials) {
      new Image().src = testimonial.imageUrl;
    }
  }, []);

  return (
    <div ref={wrapperRef} className="bg-black text-white">
      {isPortrait ? (
        <TestimonialsIn2Rows scrollRef={wrapperRef} />
      ) : (
        <TestimonialsIn2Columns scrollRef={wrapperRef} />
      )}
    </div>
  );
};
