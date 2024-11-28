import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRect } from "@darkroom.engineering/hamo";

interface ProductSectionProps {
  modelName: string;
  description: string;
  imageUrls: string[];
}

const products = [
  {
    modelName: "[Object object]",
    description:
      "Inspirada en la JSConf. Perfecta para sesiones de programación o para mostrar tu amor por el desarrollo web.",
    imageUrls: [
      "https://imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g/3e979acb-3e9d-43e3-2f8c-276f4b3dc000/default",
    ],
  },
  {
    modelName: "undefined is not a function",
    description:
      "Un diseño impredecible como un 'undefined', confuso como el 'this', pero que al final hace sentido... como JavaScript.",
    imageUrls: [
      "https://imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g/89889d43-c367-4478-2996-aef9870d2100/default",
    ],
  },
  {
    modelName: 'console.log("pal frio")',
    description:
      "Un polerón acogedor que te envuelve como un closure. Ideal para esas sesiones de programación en invierno.",
    imageUrls: [
      "https://imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g/9c839f57-94ac-4806-276f-1d37eac20700/default",
      "https://imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g/9c839f57-94ac-4806-276f-1d37eac20700/default",
      "https://imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g/9c839f57-94ac-4806-276f-1d37eac20700/default",
    ],
  },
  // hat
  {
    modelName: "jav-HAT-script",
    description:
      "Protegete cuando el sol está HOT(reload). El complemento perfecto para 𝚕̶𝚘̶𝚜̶ ̶𝚍̶𝚒̶𝚊̶𝚜̶ ̶𝚍̶𝚎̶ ̶𝚙̶𝚒̶𝚜̶𝚌̶𝚒̶𝚗̶𝚊̶ cuando trabajas desde la casa.",
    imageUrls: [
      "https://imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g/037a580b-3a53-49c0-75d2-0143379de700/default",
    ],
  },
];

const ProductsIn2Columns = () => {
  const index = 0;
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
      } else if (latest <= 4 / 5) {
        setCurrentIndex(2);
      } else {
        setCurrentIndex(3);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="h-[600svh] grid grid-cols-12 relative">
      <div className="col-span-6 bg-black sticky top-0 h-[100svh]">
        <AnimatePresence presenceAffectsLayout={false}>
          <motion.div
            key={products[currentIndex].modelName}
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
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="col-span-6 bg-white sticky top-0 h-[100svh]">
        <AnimatePresence presenceAffectsLayout={false}>
          <motion.div
            key={products[currentIndex].imageUrls[0]}
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
  );
};

const ProductsIn2Rows = () => {
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
      } else if (latest <= 4 / 5) {
        setCurrentIndex(2);
      } else {
        setCurrentIndex(3);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="h-[600svh] relative flex flex-col">
      <div className="sticky top-0 h-[20vh] bg-black">
        <AnimatePresence presenceAffectsLayout={false}>
          <motion.div
            key={products[currentIndex].modelName}
            className="flex flex-col items-center justify-center absolute inset-0 px-10 lg:px-20"
            transition={{ duration: 0.35 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
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
            <p className="text-xl mt-2 font-mono text-center md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              {products[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="sticky top-[20vh] h-[80vh] bg-white overflow-hidden">
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

  useEffect(() => {
    for (const product of products) {
      for (const url of product.imageUrls) {
        new Image().src = url;
      }
    }
  }, []);

  return (
    <div className="bg-black text-white">
      {isPortrait ? <ProductsIn2Rows /> : <ProductsIn2Columns />}
    </div>
  );
};
