import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

// 5ff27210bdmsh0aa4936ac614736p1dad45jsn6b86426f3d5c

const options = {
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": "9788bd998cmsh2c270e64909c9eep103cefjsn73fed5bc69a7",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
