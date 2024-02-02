'use client'

import Navbar from "@/components/Navbar";
import { useQuery } from "react-query";

interface WeatherDetail {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherDetail[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}


export default function Home() {
  const { isLoading, error, data } = useQuery<WeatherData>('repoData', 
  async () => {
    const {data} = await axios.get("https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=4b5862e8f419a5027d1ad0aa0fca1948&cnt=56");
    return data;
  }

    // fetch('https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=4b5862e8f419a5027d1ad0aa0fca1948&cnt=56').then(res =>
    //   res.json()
    // )
  )

  if (isLoading) return 'Loading...'

  console.log("data", data)
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
    <Navbar/>
    </div>
  );
}
