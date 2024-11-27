import { FadingText } from "./FadingText";
import { Hero } from "./Hero";
import { Products } from "./Products";
import { TextSection } from "./TextSection";

export const Application = () => {
  return (
    <div
    // className="h-[100svh] w-full flex justify-center items-center text-white text-5xl font-bold"
    >
      <Hero />
      <TextSection />
      <FadingText />
      <Products />
    </div>
  );
};
