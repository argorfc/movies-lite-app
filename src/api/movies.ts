import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL_API;

export const apiGetMovies = async () => {
  try {
    const res = await axios.get(baseURL + "/movies");
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

export const apiGetMovieViews = async () => {
  try {
    const res = await axios.get(baseURL + "/movie/views");
    return res.data;
  } catch (e) {
    console.error(e);
  }
}
