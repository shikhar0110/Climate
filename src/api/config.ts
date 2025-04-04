export const API_CONFIG = {
     BASE_URL: "https://api.openweathermap.org/data/2.5",
     GEO: "https://api.openweathermap.org/geo/1.0",
     API_KEY: import.meta.env.VITE_API_KEY|| "34e4a424013bb98f8cfe435264ec768f",
     DEFAULT_PARAMS: {
       units: "metric",
       appid: import.meta.env.VITE_API_KEY|| "34e4a424013bb98f8cfe435264ec768f",
     },
   };

   