'use client'
import { Skeleton } from "@mui/material";
import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import Head from "next/head";
import fetchWeatherData from "@/utils/weatherService";
import { useState, useEffect } from "react";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = async (city) => {
    try {
      const weatherData = await fetchWeatherData(city);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect((city) => {
    async function fetchData() {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      console.log(data);
    }
    fetchData();
    
  }, [])

  if (!weatherData) {
    <Skeleton variant="rounded" width={60} height={210} />
  }
  return ( 
  <>
    <Head>
      <title>Weather App</title>
      </Head>
      <div className="flex"></div>
      <Header />
      <Search onSubmit={handleWeatherData} />
      <Card />
  </>
  )
}
