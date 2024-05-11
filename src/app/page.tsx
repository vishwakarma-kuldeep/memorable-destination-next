import Cards from "@/components/Cards";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import { Crimson_Text } from "next/font/google";

export default function Home() {
  // const crimson_text = Crimson_Text({ weight: "400", style: "normal"})
  return (
    <div className="w-full bg-white font-crimson font-normal ">
      <Slider />
      <Cards />
      <Testimonials />
    </div>
  );
}
