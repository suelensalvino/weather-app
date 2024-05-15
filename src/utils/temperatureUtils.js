export const getTemperatureClass = (temperature) => {
    if (temperature < 0) {
        return "snowy";
    } else if (temperature >= 0 && temperature <= 20) {
        return "rainy";
    } else if (temperature > 20 && temperature <= 30) {
        return "sunny";
    } else {
        return "hot";
    }
};