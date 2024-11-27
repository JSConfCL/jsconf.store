import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const priceRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const priceRef2 = useRef<HTMLDivElement>(null);
  const textRef3 = useRef<HTMLDivElement>(null);
  const priceRef3 = useRef<HTMLDivElement>(null);

  const isText1InView = useInView(textRef1, { amount: 0.5 });
  const isText2InView = useInView(textRef2, { amount: 0.5 });
  const isText3InView = useInView(textRef3, { amount: 0.5 });

  useEffect(() => {
    new Image().src =
      "https://imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g/3e979acb-3e9d-43e3-2f8c-276f4b3dc000/default";
    new Image().src =
      "https://imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g/3e979acb-3e9d-43e3-2f8c-276f4b3dc000/default";
  }, []);

  return (
    <div className="bg-black text-white">
      {/* SECTION 1 */}
      <div className="flex" ref={sectionRef}>
        <div className="w-1/2 bg-black text-white min-h-screen flex items-center justify-end h-[150svh]">
          <div className="max-w-xl px-10 lg:px-20 text-right">
            <p className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-light transition-all duration-300 sticky top-0">
              <span className="text-2xl">
                <span className="font-bold bg-white text-black px-2 mr-2">
                  modelo:
                </span>
                <span className="font-mono italic">[Object object]</span>
              </span>{" "}
              <br />{" "}
              <motion.span
                ref={textRef1}
                className="font-bold"
                animate={{ opacity: isText1InView ? 1 : 0.2 }}
                transition={{ duration: 0.5 }}
              >
                Inspirada en la JSConf. Perfecta para sesiones de programación o
                para mostrar tu amor por el desarrollo web.
              </motion.span>
              <motion.div
                ref={priceRef1}
                className="mt-12 font-bold transition-all duration-300"
                animate={{ opacity: isText1InView ? 1 : 0.2 }}
                transition={{ duration: 0.5 }}
              >
                $65.00 USD
              </motion.div>
            </p>
          </div>
        </div>

        <div className="w-1/2 bg-white min-h-screen flex items-center justify-center h-[150] relative">
          <motion.img
            loading="lazy"
            src="https://imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g/3e979acb-3e9d-43e3-2f8c-276f4b3dc000/default"
            alt="JSConf Hoodie"
            className="w-full sticky top-0 left-0"
            animate={{ opacity: isText1InView ? 1 : 0.2 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="flex" ref={sectionRef}>
        <div className="w-1/2 bg-black text-white min-h-screen flex items-center justify-end h-[150svh]">
          <div className="max-w-xl px-10 lg:px-20 text-right">
            <p className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-light transition-all duration-300 sticky top-0">
              <span className="text-2xl">
                <span className="font-bold bg-white text-black px-2 mr-2">
                  modelo:
                </span>
                <span className="font-mono italic">
                  undefined is not a function
                </span>
              </span>{" "}
              <br />{" "}
              <motion.span
                ref={textRef2}
                className="font-bold"
                animate={{ opacity: isText2InView ? 1 : 0.2 }}
                transition={{ duration: 0.5 }}
              >
                Un diseño impredecible como un 'undefined', confuso como el
                'this', pero que al final hace sentido... como JavaScript.
              </motion.span>
              <motion.div
                ref={priceRef2}
                className="mt-12 font-bold transition-all duration-300"
                animate={{ opacity: isText2InView ? 1 : 0.2 }}
                transition={{ duration: 0.5 }}
              >
                $65.00 USD
              </motion.div>
            </p>
          </div>
        </div>

        <div className="w-1/2 bg-white min-h-screen flex items-center justify-center h-[150] relative">
          <motion.img
            loading="lazy"
            src="https://imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g/89889d43-c367-4478-2996-aef9870d2100/default"
            alt="JSConf Hoodie"
            className="w-full sticky top-0 left-0"
            animate={{ opacity: isText2InView ? 1 : 0.2 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="flex" ref={sectionRef}>
        <div className="w-1/2 bg-black text-white min-h-screen flex items-center justify-end h-[150svh]">
          <div className="max-w-xl px-10 lg:px-20 text-right">
            <p className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-light transition-all duration-300 sticky top-0">
              <span className="text-2xl">
                <span className="font-bold bg-white text-black px-2 mr-2">
                  modelo:
                </span>
                <span className="font-mono italic">
                  console.log("pal frio")
                </span>
              </span>{" "}
              <br />{" "}
              <motion.span
                ref={textRef3}
                className="font-bold"
                animate={{ opacity: isText3InView ? 1 : 0.2 }}
                transition={{ duration: 0.5 }}
              >
                Un polerón acogedor que te envuelve como un closure, ideal para
                esas sesiones de programación en invierno.
              </motion.span>
              <motion.div
                ref={priceRef3}
                className="mt-12 font-bold transition-all duration-300"
                animate={{ opacity: isText3InView ? 1 : 0.2 }}
                transition={{ duration: 0.5 }}
              >
                $65.00 USD
              </motion.div>
            </p>
          </div>
        </div>

        <div className="w-1/2 bg-white min-h-screen flex items-center justify-center h-[150] relative">
          <motion.img
            loading="lazy"
            src="https://imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g/3e979acb-3e9d-43e3-2f8c-276f4b3dc000/default"
            alt="JSConf Hoodie"
            className="w-full sticky top-0 left-0"
            animate={{ opacity: isText3InView ? 1 : 0.2 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};
