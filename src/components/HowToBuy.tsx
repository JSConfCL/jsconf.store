import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HowToBuy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);

  return (
    <motion.section
      ref={sectionRef}
      className="min-h-screen bg-black text-white py-20 flex items-center justify-center"
      style={{ opacity, y }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-5xl md:text-6xl lg:text-8xl font-semibold font-mono">
          Como?
        </div>
        <br />
        <br />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center font-mono">
          5 y 6 de Dic <br /> en JSConf Chile
        </h2>
        <br />
        <br />
        <p className="text-center text-md md:text-lg lg:text-xl xl:text-2xl italic">
          (y después, nunca más.)
        </p>
      </div>
    </motion.section>
  );
};
