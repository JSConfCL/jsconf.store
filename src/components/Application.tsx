import { FadingText } from "./FadingText";
import { Hero } from "./Hero";
import { Products } from "./Products";
import { frame, cancelFrame } from "framer-motion";
import { ReactLenis, useLenis, type LenisRef } from "lenis/react";
import { TextSection } from "./TextSection";
import { useEffect, useRef } from "react";

export const Application = () => {
  return (
    <ReactLenis root>
      <Hero />
      <TextSection />
      <FadingText />
      <Products />
    </ReactLenis>
  );
};
