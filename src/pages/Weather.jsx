import { useLocation } from "react-router";

const Weather = () => {
    const value = useLocation()
    const place = value.state.location
    console.log(place)
    return (
        <div>
            This Weather Details
        </div>
    );
};

export default Weather;