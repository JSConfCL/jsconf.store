import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface ProductSectionProps {
  modelName: string;
  description: string;
  imageUrls: string[];
}

export default function ProductSection({
  modelName,
  description,
  imageUrls,
}: ProductSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(textRef, { amount: 0.5, once: true });

  return (
    <div className="grid grid-cols-12 gap-4 bg-white" ref={sectionRef}>
      <div className="col-span-6 col-start-1 bg-black ">
        <div
          className="px-10 lg:px-20 text-right sticky  top-[25%]
        mt-[50vw] flex justify-end

        "
        >
          <motion.p
            className="text-right text-4xl md:text-5xl lg:text-6xl tracking-tight font-light transition-all duration-300
max-w-xl

            "
            ref={textRef}
            initial={{ opacity: 1 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl block">
              <span className="font-bold bg-white text-black px-2 mr-2">
                modelo:
              </span>
              <span className="font-mono italic">{modelName}</span>
            </span>{" "}
            <br />{" "}
            <div
              className=""
              // className="pt-[10vw] pb-[20vw]"
            >
              <span className="font-bold">{description}</span>
              <div className="mt-12 font-bold transition-all duration-300">
                $65.00 USD
              </div>
            </div>
          </motion.p>
        </div>
      </div>

      <div className="col-span-6 bg-white ">
        {imageUrls.map((url, index) => {
          const imageRef = useRef<HTMLDivElement>(null);
          const imageInView = useInView(imageRef, {
            amount: 0.5,
            once: true,
          });

          return (
            <motion.div
              ref={imageRef}
              key={url + index}
              className="h-[100svh]"
              initial={{ opacity: 0 }}
              animate={{ opacity: imageInView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-full">
                <img
                  loading="lazy"
                  src={url}
                  alt={`JSConf Hoodie ${index + 1}`}
                  className="w-full object-contain sticky top-[25%]"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
