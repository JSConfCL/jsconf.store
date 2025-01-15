import { useEffect, useRef, useState, type RefObject } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";

interface ProductSectionProps {
  modelName: string;
  description: string;
  imageUrls: string[];
}

const products = [
  {
    id: 3,
    modelName: 'console.log("este es pal frio")',
    description:
      "Acogedor como JQuery, te envuelve como un closure. Este polerón es ideal para esas sesiones de programación en invierno.",
    imageUrls: [
      "https://imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g/88698d55-8831-41b2-980e-fa958d057f00/default",
    ],
    value: "$ 32 Lukas",
    sizes: [
      { size: "S", url: "https://mpago.la/2r6cUy9" },
      { size: "M", url: "https://mpago.la/2wTRHea" },
      { size: "L", url: "https://mpago.la/1Wnt1mQ" },
      { size: "XL", url: "https://mpago.la/1CMvnFx" },
      { size: "2XL", url: "https://mpago.la/2GwVStY" },
    ],
  },
  {
    id: 4,
    modelName: "'undefined' is not a polera",
    description: (
      <>
        Ideal para cuando estos meses de Verano!. Perfecta para{" "}
        <span className="line-through italic" style={{ fontSize: "0.8em" }}>
          los dias de piscina
        </span>{" "}
        cuando trabajas desde la casa.
      </>
    ),
    imageUrls: [
      "https://imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g/14c4e325-80fc-4aa1-9ac2-140afa70a000/default",
    ],
    value: "$ 12 Lukas",
    sizes: [
      { size: "S", url: "https://mpago.la/1ie9vFo" },
      { size: "M", url: "https://mpago.la/1Nqbx4F" },
      { size: "L", url: "https://mpago.la/2YeFteh" },
      { size: "XL", url: "https://mpago.la/14Mw1L1" },
      { size: "2XL", url: "https://mpago.la/2s5XY8R" },
    ],
  },
  // {
  //   id: 1,
  //   modelName: "cannot find 'polera' of null",
  //   description:
  //     "Ideal para cuando el sol está HOT(reload). Aprovecha este diseño para tu polera, lanyard, gorro, o pontelo de aro!",
  //   imageUrls: [
  //     "https://imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g/1ead26c5-cfbd-4afc-cc20-739e79b40800/default",
  //   ],
  //   value: "$ 12 Lukas",
  //   sizes: [
  //     { size: "S", url: "https://mpago.la/17ZyQgK" },
  //     { size: "M", url: "https://mpago.la/2FpscR4" },
  //     { size: "L", url: "https://mpago.la/2FUnJXk" },
  //     { size: "XL", url: "https://mpago.la/27hAVkQ" },
  //     { size: "2XL", url: "https://mpago.la/282cbtK" },
  //   ],
  // },
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
              <div className="relative">
                <div className="absolute -right-24 top-14 -translate-y-1/2">
                  {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg
                    fill="#fff"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="64px"
                    height="64px"
                    viewBox="0 0 380.122 380.122"
                  >
                    <g>
                      <path
                        d="M379.632,148.271c-0.612-7.344-10.403-9.18-13.464-3.672c-9.792-6.12-22.644-10.404-31.824-15.3
		c-15.3-7.956-31.823-16.524-48.96-21.42c-3.672-5.508-14.076-3.672-13.464,4.284c1.836,91.8-115.668,89.964-181.152,78.948
		c0-7.344,0.612-14.688,0.612-21.42c0-3.06,0-6.12,0-9.18c0-1.836-3.06-7.344-3.06-4.896c0-0.612-0.612-1.224-0.612-1.836
		c-6.732-18.972-79.56,29.376-86.904,41.616c-1.224,2.448-1.224,6.12,1.224,8.568c1.224,0.612,2.448,1.836,3.06,3.061l0,0
		c-0.612,1.224-0.612,2.447-0.612,3.06c0.612,7.956,9.792,15.3,14.688,20.196c14.688,15.3,30.6,31.212,47.736,44.063
		c2.448,1.836,7.344,1.225,9.18-1.224c0.612-0.612,0.612-1.225,1.224-1.225c0.612-0.611,0.612-1.836,0.612-3.06
		c0.612-0.612,1.224-1.836,1.836-3.06c0.612-7.345,0.612-16.524,3.06-23.257c0-0.611,0.612-1.224,0.612-1.836
		C171.552,282.911,391.872,282.911,379.632,148.271z M81.588,226.606c-0.612,0-1.836,0-2.448,0c-9.792,0-8.568,18.973-7.344,29.988
		c-9.792-7.956-18.972-17.136-28.152-25.704c-6.732-6.12-12.852-12.239-18.972-18.972c-1.836-2.448-4.284-4.284-6.12-6.732
		c-1.224-1.224-2.448-2.447-3.672-3.06c-1.224-0.612-1.836-0.612-1.836-0.612l-0.612-0.611c4.896-3.672,12.24-9.793,13.464-10.404
		c9.18-6.121,18.36-11.017,28.152-15.913c3.672-1.836,15.912-5.508,25.092-10.404c0,0.612,0,1.224,0,1.836
		c-1.224,7.956-2.448,15.912-2.448,24.48c0,5.508,4.284,7.344,7.956,7.344l0,0c68.544,29.376,198.288,13.464,202.572-77.724
		c13.464,6.732,26.316,13.464,39.78,20.808c9.792,5.508,26.316,17.748,39.168,18.972
		C358.824,279.239,156.252,249.251,81.588,226.606z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex gap-2 mt-10">
                  {products[currentIndex].sizes?.map((size) => (
                    <a
                      key={size.size}
                      href={size.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition-colors min-w-16 text-center"
                    >
                      {size.size}
                    </a>
                  ))}
                </div>
              </div>
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
              <div className="text md:text-lg">
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
              <div className="relative">
                <div className="absolute -right-16 top-6 -translate-y-1/2">
                  {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg
                    fill="#fff"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="38px"
                    height="38px"
                    viewBox="0 0 380.122 380.122"
                  >
                    <g>
                      <path
                        d="M379.632,148.271c-0.612-7.344-10.403-9.18-13.464-3.672c-9.792-6.12-22.644-10.404-31.824-15.3
		c-15.3-7.956-31.823-16.524-48.96-21.42c-3.672-5.508-14.076-3.672-13.464,4.284c1.836,91.8-115.668,89.964-181.152,78.948
		c0-7.344,0.612-14.688,0.612-21.42c0-3.06,0-6.12,0-9.18c0-1.836-3.06-7.344-3.06-4.896c0-0.612-0.612-1.224-0.612-1.836
		c-6.732-18.972-79.56,29.376-86.904,41.616c-1.224,2.448-1.224,6.12,1.224,8.568c1.224,0.612,2.448,1.836,3.06,3.061l0,0
		c-0.612,1.224-0.612,2.447-0.612,3.06c0.612,7.956,9.792,15.3,14.688,20.196c14.688,15.3,30.6,31.212,47.736,44.063
		c2.448,1.836,7.344,1.225,9.18-1.224c0.612-0.612,0.612-1.225,1.224-1.225c0.612-0.611,0.612-1.836,0.612-3.06
		c0.612-0.612,1.224-1.836,1.836-3.06c0.612-7.345,0.612-16.524,3.06-23.257c0-0.611,0.612-1.224,0.612-1.836
		C171.552,282.911,391.872,282.911,379.632,148.271z M81.588,226.606c-0.612,0-1.836,0-2.448,0c-9.792,0-8.568,18.973-7.344,29.988
		c-9.792-7.956-18.972-17.136-28.152-25.704c-6.732-6.12-12.852-12.239-18.972-18.972c-1.836-2.448-4.284-4.284-6.12-6.732
		c-1.224-1.224-2.448-2.447-3.672-3.06c-1.224-0.612-1.836-0.612-1.836-0.612l-0.612-0.611c4.896-3.672,12.24-9.793,13.464-10.404
		c9.18-6.121,18.36-11.017,28.152-15.913c3.672-1.836,15.912-5.508,25.092-10.404c0,0.612,0,1.224,0,1.836
		c-1.224,7.956-2.448,15.912-2.448,24.48c0,5.508,4.284,7.344,7.956,7.344l0,0c68.544,29.376,198.288,13.464,202.572-77.724
		c13.464,6.732,26.316,13.464,39.78,20.808c9.792,5.508,26.316,17.748,39.168,18.972
		C358.824,279.239,156.252,249.251,81.588,226.606z"
                      />
                    </g>
                  </svg>
                </div>

                <div className="flex gap-2 mt-3 justify-center">
                  {products[currentIndex].sizes?.map((size) => (
                    <a
                      key={size.size}
                      href={size.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 border border-white rounded hover:bg-white hover:text-black transition-colors text-sm min-w-14 text-center"
                    >
                      {size.size}
                    </a>
                  ))}
                </div>
              </div>
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
