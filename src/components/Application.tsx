import { FadingText } from "./FadingText";
import { Hero } from "./Hero";
import { Products } from "./Products";
import { SocialProof } from "./SocialProof";
import { HowToBuy } from "./HowToBuy";
import { Footer } from "./Footer";
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
      <HowToBuy />
      <SocialProof />
      <Footer />
    </ReactLenis>
  );
};
