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
        <div className="flex flex-col items-center text-5xl md:text-6xl lg:text-8xl font-semibold font-mono text-center">
          Solo por este meetup.
        </div>
        <br />
        <br />
        <br />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center font-mono">
          <span className="block leading-relaxed">Y despues nunca mas.</span>
        </h2>
        <br />
        <br />
        <p className="text-center text-md md:text-lg lg:text-xl xl:text-2xl italic">
          (Bueno...hasta el domingo la verdad)
        </p>
      </div>
    </motion.section>
  );
};
