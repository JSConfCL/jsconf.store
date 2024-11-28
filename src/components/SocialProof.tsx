import { useEffect, useRef, useState } from "react";
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

const TestimonialsIn2Columns = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest <= 2 / 5) {
        setCurrentIndex(0);
      } else if (latest <= 3 / 5) {
        setCurrentIndex(1);
      } else {
        setCurrentIndex(2);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="h-[600svh] grid grid-cols-12 relative" ref={containerRef}>
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
                className="w-96 h-96 rounded-full object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const TestimonialsIn2Rows = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest <= 2 / 5) {
        setCurrentIndex(0);
      } else if (latest <= 3 / 5) {
        setCurrentIndex(1);
      } else {
        setCurrentIndex(2);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="h-[600svh] relative flex flex-col">
      <div className="sticky top-0 h-[20vh] bg-black">
        <AnimatePresence presenceAffectsLayout={false}>
          <motion.div
            key={testimonials[currentIndex].name}
            className="flex flex-col items-center justify-center absolute inset-0 px-10 lg:px-20"
            transition={{ duration: 0.35 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              <span className="block text-center">
                <span className="font-mono italic">
                  {testimonials[currentIndex].name}
                </span>
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="sticky top-[20vh] h-[80vh] bg-white overflow-hidden">
        <AnimatePresence presenceAffectsLayout={false}>
          <motion.div
            key={testimonials[currentIndex].imageUrl}
            className="flex items-center justify-center absolute inset-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <div className="px-4">
              <img
                src={testimonials[currentIndex].imageUrl}
                alt={testimonials[currentIndex].name}
                className="w-64 h-64 rounded-full object-cover"
              />
            </div>
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

  useEffect(() => {
    for (const testimonial of testimonials) {
      new Image().src = testimonial.imageUrl;
    }
  }, []);

  return (
    <div className="text-white bg-red-200">
      {isPortrait ? <TestimonialsIn2Rows /> : <TestimonialsIn2Columns />}
    </div>
  );
};
