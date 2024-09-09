import axios from "axios";
import { CountryOverview } from "./types.ts";

const BASE_URL = "https://restcountries.com/v3.1";
const axiosInstance = axios.create({ baseURL: BASE_URL });
export const getCountryOverview = async () => {
  return await axiosInstance.get<CountryOverview[]>(
    "all?fields=cca2,name,flags,population,fifa,continents",
  );
};
