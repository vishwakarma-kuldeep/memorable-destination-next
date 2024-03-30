import Cards from "@/components/Cards";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
// import Tours from "@/components/Tours";
export default function Home() {
  return (
    <div className="w-full bg-white">
      <Slider />
      
      {/* <Tours /> */}
      <Cards />
      <Testimonials />
    </div>
  );
}
