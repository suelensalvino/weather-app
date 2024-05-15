const API_KEY = 'c560984c92b9c9a4004bdae51794ef7f';

export const fetchWeatherData = async (cityName) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=in&appid=${API_KEY}`);

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados do clima.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Erro ao obter os dados do clima.');
  }
};