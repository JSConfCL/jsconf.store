import { useEffect, useRef, useState, type RefObject } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";

const testimonials = [
  {
    name: "Ricardo — @diruzcode",
    quote: "Odio el animé, pero amo el polerón de la jsconf.",
    imageUrl: "https://avatars.githubusercontent.com/u/12041331?v=4",
    link: "https://github.com/diruzcode",
  },

  // {
  //   name: "Ana — @uxanarangel",
  //   quote: "Con este deskpad un livestream de 2^8 horas.",
  //   imageUrl: "https://avatars.githubusercontent.com/u/30361612?v=4",
  //   link: "https://uxanarangel.com/",
  // },
  {
    name: "Joel — @DezkaReid",
    quote:
      "Si tengo que elegir entre el one piece, y el deskpad de la jsconf?... el deskpad.",
    imageUrl: "https://avatars.githubusercontent.com/u/1269896?v=4",
    link: "https://x.com/dezkareid",
  },
  {
    name: "Felipe — @fforres",
    quote: "Y no hay de React?",
    imageUrl: "https://avatars.githubusercontent.com/u/952992?v=4",
    link: "https://fforr.es",
  },
  {
    name: "Miguel Duran — @Midudev",
    quote: (
      <>
        Quién eres tu!
        <br />
        Qué haces aquí?!
        <br />
        Sal de mi casa!!
      </>
    ),
    imageUrl: "https://avatars.githubusercontent.com/u/1561955?v=4",
    link: "https://github.com/midudev",
  },
];

const TestimonialsIn2Columns = ({
  scrollRef,
}: {
  scrollRef: RefObject<HTMLDivElement>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest >= 0.9) {
        setShowNavigation(false);
      } else if (latest === 0) {
        setShowNavigation(false);
      } else {
        setShowNavigation(true);
      }
      const numTestimonials = testimonials.length;
      const sectionSize = 1 / numTestimonials;

      // Find which section we're in based on scroll progress
      const sectionIndex = Math.min(
        Math.floor(latest / sectionSize),
        numTestimonials - 1
      );

      setCurrentIndex(sectionIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);
  return (
    <>
      <div
        className={`fixed top-0 left-0 bottom-0 w-10 z-10 transition-all duration-300 flex justify-center items-center ${
          showNavigation ? "opacity-100" : "opacity-0"
        }`}
        id="navigation"
      >
        <div className="h-1/2 w-full flex flex-col items-center justify-center gap-2 py-10">
          {testimonials.map((el, index) => (
            <div
              key={el.name}
              className={`flex-1 w-[1px] rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>
      <div className="h-[800svh] grid grid-cols-12 relative" ref={containerRef}>
        <div className="col-span-6 bg-black sticky top-0 h-[100svh]">
          <AnimatePresence presenceAffectsLayout={false}>
            <motion.div
              key={testimonials[currentIndex].name}
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
    </>
  );
};

const TestimonialsIn2Rows = ({
  scrollRef,
}: {
  scrollRef: RefObject<HTMLDivElement>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest >= 0.9) {
        setShowNavigation(false);
      } else if (latest === 0) {
        setShowNavigation(false);
      } else {
        setShowNavigation(true);
      }
      const numTestimonials = testimonials.length;
      const sectionSize = 1 / numTestimonials;

      // Find which section we're in based on scroll progress
      const sectionIndex = Math.min(
        Math.floor(latest / sectionSize),
        numTestimonials - 1
      );

      setCurrentIndex(sectionIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 h-10 z-10 ${
          showNavigation ? "opacity-100" : "opacity-0"
        }`}
        id="navigation"
      >
        <div className="h-full w-full flex items-center justify-center gap-2 px-10">
          {testimonials.map((el, index) => (
            <div
              key={el.name}
              className={`w-full h-0.5 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>
      <div className="h-[800svh] relative flex flex-col" ref={containerRef}>
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
    </>
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
        <TestimonialsIn2Rows key={"key1"} scrollRef={wrapperRef} />
      ) : (
        <TestimonialsIn2Columns key={"key2"} scrollRef={wrapperRef} />
      )}
    </div>
  );
};
