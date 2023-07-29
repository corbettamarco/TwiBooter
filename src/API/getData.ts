import axios from "axios";
import { Searchtype } from "../types/SearchType";

declare var process: {
  env: {
    REACT_APP_API_KEY: string;
  };
};
export const getData = async (values: Searchtype) => {
  try {
    const result = await axios.post(
        process.env.REACT_APP_API_KEY,
      values
    );
    console.log(result.data)
    return result;
  } catch (error: any) {

    throw new Error(error);
  }
};
