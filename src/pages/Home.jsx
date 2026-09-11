import { useState } from "react";
import LocationModal from "../components/LocationModal";

const Home = () => {
  const [click, setClick] = useState(false);
  console.log(click);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-6xl text-blue-200 font-extrabold">
          NextLevel <span className="text-blue-400">Weather</span>
        </h1>
        <p className="text-md text-gray-400 py-4">
          Check Your Weather Today Next Level
        </p>
      </div>
      <div className="flex justify-center items-center">
        <button
          type="button"
          className="text-lg font-medium hover:scale-105 transition-all delay-400 bg-blue-500 text-white px-5 py-2 rounded-4xl"
          onClick={() => setClick(true)}
        >
          Check Weather
        </button>
      </div>
      {click && <LocationModal onClose={()=>setClick(false)}/>}
    </div>
  );
};

export default Home;
