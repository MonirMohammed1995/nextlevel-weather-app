import { useLocation } from "react-router";
import { getWeather } from "../services/get-weather";

const Weather = () => {
    const value = useLocation()
    const place = value.state.location
    // console.log(place)
    // getWeather(place)
    const fetchWeather = async()=>{
        try{
            const result = await getWeather(place)
            console.log(result)
        }catch(error){
            console.log(error)
        }
    }
    fetchWeather()
    return (
        <div>
            This Weather Details
        </div>
    );
};

export default Weather;