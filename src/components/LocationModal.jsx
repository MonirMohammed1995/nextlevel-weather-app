import { X } from "lucide-react";
import { useState } from "react";

const LocationModal = ({ onClose }) => {
  const [city,setCity]=useState("")
  const handleSubmit = (e) =>{
    e.preventDefault()
    const value = city.trim()
    console.log(value)
  }
  const handleGeoLocations = () =>{
    navigator.geolocation.getCurrentPosition((positions)=>{
      const{latitude,longitude}=positions.coords
      console.log({latitude,longitude})
    },(error)=>{
      console.log(error)
    },{
      timeout:1000 
    })
  }
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
      <div className="h-[320px] w-[400px] bg-gray-100 shadow-2xl rounded-2xl">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-medium">Where are you Today</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full p-2 bg-gray-300 cursor-pointer"
          >
            <X />
          </button>
        </div>
        <div className="p-5">
          <form onSubmit={handleSubmit} action="" className="space-y-5">
            <input
              type="text"
              value={city}
              onChange={(e)=>setCity(e.target.value)}
              className="w-full border p-1 rounded-2xl"
              placeholder="Enter the City name"
            />
            <div className="flex justify-center items-center">
              <button
              type="submit"
              className="text-lg font-medium hover:scale-105 transition-all delay-400 bg-blue-500 text-white px-5 py-2 rounded-4xl"
            >
              Get Weather
            </button>
            </div>
          </form> 
        </div>
        <div className="text-center pb-4">OR</div>
        <div className="flex justify-center items-center">
              <button
              type="button"
              onClick={handleGeoLocations }
              className="text-lg font-medium hover:scale-105 transition-all delay-400 bg-blue-500 text-white px-5 py-2 rounded-4xl"
            >
              Use My Location
            </button>
            </div>
      </div>
    </div>
  );
};

export default LocationModal;
 