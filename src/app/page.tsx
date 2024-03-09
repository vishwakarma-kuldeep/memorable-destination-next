import Slider from "@/components/Slider";
export default function Home() {
  return (
    <div className="w-full">
      <Slider />
      {/* Adding some design patterns */}
      <div className="flex flex-col justify-center items-center max-h-56 h-44 border mb-2 overflow-auto">
        <h1 className="text-3xl font-bold">Welcome to Memorable Destination</h1>
        <p className="text-lg font-medium">
          We are here to make your journey memorable
        </p>
      </div>
    </div>
  );
}
