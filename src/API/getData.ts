import axios from "axios";
import { Searchtype } from "../types/SearchType";

export const getData = async (values: Searchtype) => {
  const apiUrl = import.meta.env.VITE_API_KEY;

  if (!apiUrl) {
    throw new Error("Missing VITE_API_KEY environment variable.");
  }

  try {
    const result = await axios.post(apiUrl, values);
    console.log(result.data)
    return result;
  } catch (error: any) {

    throw new Error(error);
  }
};
