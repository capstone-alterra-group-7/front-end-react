// ** Import Axios
import axios from "axios";

export const fetcherGet = (url) => axios.get(url).then((res) => res.data);

export const fetcherPost = (url, payload) =>
  axios.post(url, payload).then((res) => res.data);

export const fetcherPut = (url, payload) =>
  axios.put(url, payload).then((res) => res.data);

export const fetcherDelete = (url) => axios.delete(url).then((res) => res.data);
