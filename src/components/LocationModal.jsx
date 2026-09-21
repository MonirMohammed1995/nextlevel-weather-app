import { X } from "lucide-react";
import { useState } from "react";
import { getGeoLocation } from "../services/get-geolocation";
import { useNavigate } from "react-router";

const LocationModal = ({ onClose }) => {
  const navigate = useNavigate();

  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const gotoPage = (location) => {
    navigate("/weather", {
      state: { location },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const value = city.trim();

    if (!value) {
      setError("Please enter a city name");
      return;
    }

    try {
      setError("");

      const location = await getGeoLocation(value);

      if (!location) {
        setError("Get GeoLocation Failed");
        return;
      }

      gotoPage(location);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGeoLocations = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        gotoPage({
          name: "Your Location",
          lat: latitude,
          lon: longitude,
        });
      },
      (error) => {
        setError(error.message);
      },
      {
        timeout: 10000,
      }
    );
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
      <div className="h-auto min-h-[320px] w-[400px] bg-gray-100 shadow-2xl rounded-2xl">
        
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-medium">
            Where are you Today
          </h2>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full p-2 bg-gray-300 cursor-pointer"
          >
            <X />
          </button>
        </div>

        <div className="p-5">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border p-2 rounded-2xl"
              placeholder="Enter the City name"
            />

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="text-lg font-medium hover:scale-105 transition-all bg-blue-500 text-white px-5 py-2 rounded-4xl"
              >
                Get Weather
              </button>
            </div>
          </form>
        </div>

        <div className="text-center pb-4">
          OR
        </div>

        <div className="flex justify-center items-center pb-5">
          <button
            type="button"
            onClick={handleGeoLocations}
            className="text-lg font-medium hover:scale-105 transition-all bg-blue-500 text-white px-5 py-2 rounded-4xl"
          >
            Use My Location
          </button>
        </div>

        {error && (
          <p className="text-center text-red-500 pb-4">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default LocationModal;