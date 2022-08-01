const apiKey = 'ynXNh1dB0ZqFnlFg16IgM6imbuuJYdDB';


const locationsSearchUrl = (userInput) => `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${userInput}&language=en-us`;
const currentConditionsUrl = (locationKey) => `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`;
const forecastUrl = (locationKey, isMetric) => `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=${isMetric}`;


export {locationsSearchUrl, currentConditionsUrl, forecastUrl};