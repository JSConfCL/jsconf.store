import { useEffect, useRef, useState, type RefObject } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";

interface ProductSectionProps {
  modelName: string;
  description: string;
  imageUrls: string[];
}

const products = [
  {
    id: 2,
    modelName: "De(sk)bugger",
    description:
      "Debuguea como un crack con este DeskPad de JSConf Chile. Con un diseño inesperado como un 'undefined is not a function', pero que al final hace sentido... como JavaScript 💛.",
    imageUrls: [
      "https://imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g/ec03e5f8-b1e1-449a-62d9-8952a0e27300/default",
    ],
    value: "$ 14 Lukas",
  },
  {
    id: 4,
    modelName: "H2-OS — (CommunityOS Edition)",
    description: (
      <>
        Hidrátate cuando el sol está HOT(reload). Llenalo de agua o café. El
        complemento perfecto para{" "}
        <span className="line-through italic" style={{ fontSize: "0.8em" }}>
          los dias de piscina
        </span>{" "}
        cuando trabajas desde la casa.
      </>
    ),
    imageUrls: [
      "https://imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g/7ebd4672-aff5-4066-8677-d836a4cfa500/default",
    ],
    value: "$ 20 Lukas",
  },
  {
    id: 1,
    modelName: "undefined is not a pin",
    description:
      "Cuélgalo en tu mochila, en tu lanyard, gorro, o pontelo de aro! El pin de JSConf Chile 2024 es el complemento perfecto para cualquier evento de programación.",
    imageUrls: [
      "https://imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g/1ead26c5-cfbd-4afc-cc20-739e79b40800/default",
    ],
    value: "$ 3 Lukas",
  },
];

const ProductsIn2Columns = ({
  scrollRef,
}: {
  scrollRef: RefObject<HTMLDivElement>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showNavigation, setShowNavigation] = useState(false);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest >= 0.9) {
        setShowNavigation(false);
      } else if (latest === 0) {
        setShowNavigation(false);
      } else {
        setShowNavigation(true);
      }
      const productCount = products.length;
      const sectionSize = 1 / productCount;

      for (let i = 0; i < productCount; i++) {
        if (latest <= (i + 1) * sectionSize) {
          setCurrentIndex(i);
          break;
        }
      }
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
          {products.map((el, index) => (
            <div
              key={el.id}
              className={`flex-1 w-[1px] rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>
      <div className="h-[600svh] grid grid-cols-12 relative" ref={containerRef}>
        <div className="col-span-6 bg-black sticky top-0 h-[100svh]">
          <AnimatePresence presenceAffectsLayout={false}>
            <motion.div
              key={products[currentIndex].id}
              className="bg-red flex flex-col items-center justify-center text-right px-10 lg:px-20 absolute top-0 left-0 right-0 bottom-0 "
              transition={{ duration: 0.35 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                <span className="block text-right">
                  <span className="font-bold bg-white text-black px-2 mr-2 rounded-sm">
                    modelo:
                  </span>
                  <span className="font-mono italic">
                    {products[currentIndex].modelName}
                  </span>
                </span>
              </div>
              <br />
              <br />
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mono">
                {products[currentIndex].description}
              </p>
              <br />
              <br />
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-right w-full">
                {products[currentIndex].value}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="col-span-6 bg-white sticky top-0 h-[100svh]">
          <AnimatePresence presenceAffectsLayout={false}>
            <motion.div
              key={products[currentIndex].id}
              className="flex items-center justify-center absolute top-0 bottom-0 left-0 right-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="px-4 lg:px-10">
                <img
                  src={products[currentIndex].imageUrls[0]}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

const ProductsIn2Rows = ({
  scrollRef,
}: {
  scrollRef: RefObject<HTMLDivElement>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showNavigation, setShowNavigation] = useState(false);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest >= 0.9) {
        setShowNavigation(false);
      } else if (latest === 0) {
        setShowNavigation(false);
      } else {
        setShowNavigation(true);
      }
      const productCount = products.length;
      const sectionSize = 1 / productCount;

      for (let i = 0; i < productCount; i++) {
        if (latest <= (i + 1) * sectionSize) {
          setCurrentIndex(i);
          break;
        }
      }
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
          {products.map((el, index) => (
            <div
              key={el.modelName}
              className={`w-full h-0.5 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>
      <div className="h-[600svh] relative flex flex-col" ref={containerRef}>
        <div className="sticky top-0 h-[30vh] bg-black">
          <AnimatePresence presenceAffectsLayout={false}>
            <motion.div
              key={products[currentIndex].modelName}
              className="flex flex-col items-center justify-center absolute inset-0 px-5 lg:px-20"
              transition={{ duration: 0.35 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text  md:text-lg">
                <span className="block text-center">
                  <span className="font-bold bg-white text-black px-2 mr-2 rounded-sm">
                    modelo:
                  </span>
                  <span className="font-mono italic">
                    {products[currentIndex].modelName}
                  </span>
                </span>
              </div>
              <br />
              <p className="text md:text-xl font-mono text-center">
                {products[currentIndex].description}
              </p>
              <br />
              <p className="text md:text-2xl mt-2 font-bold text-right w-full">
                {products[currentIndex].value}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="sticky top-[30vh] h-[70vh] bg-white overflow-hidden">
          <AnimatePresence presenceAffectsLayout={false}>
            <motion.div
              key={products[currentIndex].imageUrls[0]}
              className="flex items-center justify-center absolute inset-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="px-4">
                <img
                  src={products[currentIndex].imageUrls[0]}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
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

export const Products = () => {
  const isPortrait = useOrientation();
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    for (const product of products) {
      for (const url of product.imageUrls) {
        new Image().src = url;
      }
    }
  }, []);

  return (
    <div id="wrapper" ref={wrapperRef} className="bg-black text-white relative">
      {isPortrait ? (
        <ProductsIn2Rows key={"key1"} scrollRef={wrapperRef} />
      ) : (
        <ProductsIn2Columns key={"key2"} scrollRef={wrapperRef} />
      )}
    </div>
  );
};
